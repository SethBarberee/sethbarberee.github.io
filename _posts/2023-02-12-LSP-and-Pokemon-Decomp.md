---
layout: post
title: LSP and Pokemon Decomp
date: 2023-02-12
tags: [lsp, nvim]
---

Most people tend to use VS Code for Pokemon decomp and it works very nicely for
them with clangd all set up and tools. However, I'm different. I like to use
neovim and just doing clangd normally will give errors. Why? Well, you need to
generate the `compile_commands.json` first. So, using a tool called
`compiledb`, I'll do that now for pokeemerald.

```bash
compiledb make
```

This will fix most of the previous errors because now, clangd sees the custom
compiler that Pokemon decompilations use. There are still some warnings and
errors. Mainly, with how the code sets graphics like:
```c
const u32 gMonFrontPic_Ivysaur[] = INCBIN_U32("graphics/pokemon/ivysaur/anim_front.4bpp.lz");
```

We can tweak `.clangd` with the following config:
```
CompileFlags:
    Remove: [-mthumb-interwork, -fhex-asm]
    Add: [--include=include/global.h, --include=include/gba/types.h, -Wno-pointer-sign, -D __APPLE__] # include GBA global to fix type errors, silence pointer warnings for text, and use define to silence other warnings
```

`-D __APPLE__` tricks the compiler to take an optimized route in the code and
use the workarounds that VS Code uses.

`--include=include/global.h, --include=include/gba/types.h, -Wno-pointer-sign`
adds in our custom types and other gba/pokemon specific things to `clang`.

`-mthumb-interwork, -fhex-asm` these flags cause some issues with `clang` so
we'll remove it. It won't make a difference in our diagnostics/warnings.

### Extra Credit
If you go down the hole of scripting in pokeemerald, there is an interesting
project called poryscript, which can replace normal scripting. It is a
different language and has an LSP server! So, install poryscrip-pls (however
you do it for your OS). 
Now, we need to make neovim call poryscript-pls when it enters the buffer. We
can do this via a custom nvim-lspconfig configuration. I created the following
in `lua/lspconfig/server_configurations/poryscript_lsp.lua`. 

```lua
local util = require 'lspconfig.util'

return {
    default_config = {
        cmd = { "poryscript-pls" },
        filetypes = { 'pory' },
        root_dir = util.find_git_ancestor,
        single_file_support = true,
    },
    docs = {
        description = [[
https://github.com/huderlem/poryscript-pls

Language server for poryscript (a high level scripting language for pokemon decompilation projects)

 ]]      ,
        default_config = {
            root_dir = [[util.find_git_ancestor]],
        },
    },
}
```

Nice, so now this is registered in `nvim-lspconfig` and we can call the
following in our config to autostart the lsp on the buffer.
```lua
lspconfig('poryscript_lsp').setup()
```

Check your `:LspInfo` and verify it's attached. Now, it is working but we
don't have any meaningful diagnostics/warnings yet because this LSP is a
little special and needs some special handlers. `poryscript-lsp` calls custom
methods that standard neovim doesn't know yet. So, we'll add them to our
config then:
```lua
local handlers = {}

handlers["poryscript/getPoryscriptFiles"] = function(_, result, ctx, _)
    -- search for all *pory files for this request
    -- and return a table of URIs

    -- get all files ending with .pory
    local files = vim.fs.find(function(name, path)
        return name:match('.*%.pory$')
    end, { limit = math.huge, type = 'file' })

    --print(vim.inspect(files))

    local files_array = {}
    for k, v in pairs(files) do
        local uri_file = vim.uri_from_fname(v)
        table.insert(files_array, uri_file)
    end
    --print(vim.inspect(files_array))
    return files_array
end

handlers["poryscript/getfileuri"] = function(_, result, ctx, _)
    --print("get file uri")
    --print(vim.inspect(result))
    return vim.uri_from_bufnr(0)
end

handlers["poryscript/readfile"] = function(_, result, ctx, _)
    local bufnr = vim.uri_to_bufnr(result)
    if vim.api.nvim_buf_is_loaded(bufnr) then
        -- NOTE: Read the lines in the buffer and then combine into a string since poryscript-pls expects a string
        local lines = vim.api.nvim_buf_get_lines(bufnr, 0, -1, false)
        return table.concat(lines, "\n")
    else
        return ""
    end
end

handlers["poryscript/readfs"] = function(_, result, ctx, _)
    local bufnr = vim.uri_to_bufnr(result)
    if vim.api.nvim_buf_is_loaded(bufnr) then
        -- NOTE: Read the lines in the buffer and then combine into a string since poryscript-pls expects a string
        local lines = vim.api.nvim_buf_get_lines(bufnr, 0, -1, false)
        return table.concat(lines, "\n")
    else
        return ""
    end

end

return handlers
```

Note, this isn't exactly perfect noted by the TODO but this will get us some diagnostics now.

