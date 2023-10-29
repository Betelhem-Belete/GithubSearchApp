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

//Get Repositories

async function getRepos(username){
    const response = await fetch(v.apiURL + username + "/repos");
    const data = await response.json();

    console.log(data);
    displayRepos(data);
    
}

// Error message function
export function errorMessage(msg){
    v.profile.innerHTML = "";
    document.querySelector(".hide").style.display = "none";
    return v.repos.innerHTML = `<p class="alert alert-danger">${msg}</p>`;
}


// Display data
export function displayData(user){
    const html = `
        <img src="${user.avatar_url}" alt="${user.name}" class="img-thumbnail rounded-circle" />
        <h2>${user.name}</h2>
        <p>${user.login}</p>
        <div class="d-grid">
            <a href="https://github.com/${user.login}" target="_blank" rel="noopener" class="btn btn-outline-secondary">View Profile</a>
        </div>  
        <p class="pt-2"><span>${user.followers} Followers</span>   
                             <span>  ${user.following} Following</span></p>
        <p>${user.public_repos} Public repos</p>
        <p><i class="fas fa-marker-alt"></i>${user.location}</p>
        `;
        v.profile.innerHTML = html;
}

// Display repo
function displayRepos(repoData){
    let repo_data = repoData.map((repo) => {
        return `
            <span class="repo border border-rounded p3">
                <a href="${repo.html_url}" target="_blank" 
                rel="noopener">Responsive Websites</a>
                <p>
                    <strong>Stars: ${repo.stargazers_count} |</strong>
                    <strong>Watchers: ${repo.swatchers_count} |</strong>
                    <strong>Forks: ${repo.forks_count} |</strong>
                </p>
            </span>
     `;
    })
    v.repos.innerHTML = repo_data;
}