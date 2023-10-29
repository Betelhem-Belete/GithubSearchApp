import * as v from "./variables.js";

// Get Users
export async function getUser(username){
    const response = await fetch(v.apiURL + username);
    const data = await response.json();

    // console.log(data);
    if (!response.ok){
        errorMessage("User not found, try another");
    } else {
        displayData(data);
        getRepos(username);
    }
}

export function errorMessage(msg){
    v.profile.innerHTML = "";
    document.querySelector(".hide").style.display = "none";
    return v.repos.innerHTML = `<p class="alert alert-danger">${msg}</p>`;
}