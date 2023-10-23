---
layout: post
title: Hacking in Disassembly
date: 2020-06-12
tags: [pokeemerald, pokefirered]
---

It's been a fun time this summer. I've been messing with the disassemblies of
Pokemon FireRed and Emerald. I have some basic C knowledge and Assembly
knowledge so I was able to figure out, for the most part, how the code worked.
FireRed was harder to change the starters vs Emerald due to having to edit
Text, Pokemon, and Trainer Parties. I only edited the first battle and didn't
update the rest of the game. If I was doing an actual hack, I probably would
have done that. This mainly took an hour once I figured out what I was doing.

## Pics or it didn't happen
Here's some screenshots where I replaced the
Kanto Starters with the Johto Starters in FireRed.
{% include image.html file="chikorita_firered.png" description="Chikorita Selection" %}

{% include image.html file="totodile_firered.png" description="Totodile Selection" %}

{% include image.html file="cyndaquil_firered.png" description="Cyndaquil Selection" %}

{% include image.html file="rival_firered.png" description="And once you pick your starter, the first rival battle..." %}

## Tutorial

No C Code has to be changed here because it's all scripting for the Oak
Pokemon intro. Mainly did a search/replace for each starter i.e
`SPECIES_SQUIRTLE` -> `SPECIES_TOTODILE`. Since these are variables already,
the game will handle the mon pics, party, and initial battle automatically.

Change the following in `data/maps/PalletTown_ProfessorOaksLab`:
```diff

PalletTown_ProfessorOaksLab_EventScript_SquirtleBall::
	lock
	faceplayer
	setvar PLAYER_STARTER_NUM, 1
-       setvar PLAYER_STARTER_SPECIES, SPECIES_SQUIRTLE
-       setvar RIVAL_STARTER_SPECIES, SPECIES_BULBASAUR
+       setvar PLAYER_STARTER_SPECIES, SPECIES_TOTODILE
+       setvar RIVAL_STARTER_SPECIES, SPECIES_CHIKORITA
	setvar RIVAL_STARTER_ID, LOCALID_BULBASAUR_BALL
	goto_if_ge VAR_MAP_SCENE_PALLET_TOWN_PROFESSOR_OAKS_LAB, 3, PalletTown_ProfessorOaksLab_EventScript_LastPokeBall
	goto_if_eq VAR_MAP_SCENE_PALLET_TOWN_PROFESSOR_OAKS_LAB, 2, PalletTown_ProfessorOaksLab_EventScript_ConfirmStarterChoice
	msgbox PalletTown_ProfessorOaksLab_Text_ThoseArePokeBalls
	release
	end

PalletTown_ProfessorOaksLab_EventScript_BulbasaurBall::
	lock
	faceplayer
	setvar PLAYER_STARTER_NUM, 0
-       setvar PLAYER_STARTER_SPECIES, SPECIES_BULBASAUR
-       setvar RIVAL_STARTER_SPECIES, SPECIES_CHARMANDER
+       setvar PLAYER_STARTER_SPECIES, SPECIES_CHIKORITA
+       setvar RIVAL_STARTER_SPECIES, SPECIES_CYNDAQUIL
	setvar RIVAL_STARTER_ID, LOCALID_CHARMANDER_BALL
	goto_if_ge VAR_MAP_SCENE_PALLET_TOWN_PROFESSOR_OAKS_LAB, 3, PalletTown_ProfessorOaksLab_EventScript_LastPokeBall
	goto_if_eq VAR_MAP_SCENE_PALLET_TOWN_PROFESSOR_OAKS_LAB, 2, PalletTown_ProfessorOaksLab_EventScript_ConfirmStarterChoice
	msgbox PalletTown_ProfessorOaksLab_Text_ThoseArePokeBalls
	release
	end

PalletTown_ProfessorOaksLab_EventScript_CharmanderBall::
	lock
	faceplayer
	setvar PLAYER_STARTER_NUM, 2
-       setvar PLAYER_STARTER_SPECIES, SPECIES_CHARMANDER
-       setvar RIVAL_STARTER_SPECIES, SPECIES_SQUIRTLE
+       setvar PLAYER_STARTER_SPECIES, SPECIES_CYNDAQUIL
+       setvar RIVAL_STARTER_SPECIES, SPECIES_TOTODILE
	setvar RIVAL_STARTER_ID, LOCALID_CHARMANDER_BALL
	goto_if_ge VAR_MAP_SCENE_PALLET_TOWN_PROFESSOR_OAKS_LAB, 3, PalletTown_ProfessorOaksLab_EventScript_LastPokeBall
	goto_if_eq VAR_MAP_SCENE_PALLET_TOWN_PROFESSOR_OAKS_LAB, 2, PalletTown_ProfessorOaksLab_EventScript_ConfirmStarterChoice
	msgbox PalletTown_ProfessorOaksLab_Text_ThoseArePokeBalls
	release
	end

```


