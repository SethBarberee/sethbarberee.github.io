var base_url = "https://api.nasa.gov/"
var api_key = "2YsiBAq53hmt7nSIZuYGDNmQnUbhkQkxrryS8bao"
var database = "techport"

var full_url = base_url + database + "/api"

var call = full_url + "/projects" + "?api_key=" + api_key

fetch(call).then(function(response) {
    return response.json();
}).then(function(j) {
    id = Math.floor(Math.random() * j.projects.totalCount);  // returns a random integer from 0 to max count of projects
    var project_id = j.projects.projects[id].id; // Select a row of the project
    console.log("Selected Project ID: " + project_id);
    return project_id;
}).then(function(id) {
    call = full_url + "/projects/" + id + "?api_key=" + api_key;
    returning = fetch(call)
        .then(function(response) {
            return response.json()
        })
    return returning
}).then(function(k) {
    document.getElementById("techport-title").innerHTML = k.project.title;
    document.getElementById("techport-id").innerHTML = "Project ID: " + k.project.id;
    document.getElementById("techport-text").innerHTML = k.project.description;
}).catch(error => console.log(error) );


