import * as v from "./variables.js";

// Get Users
async function getUser(username){
    const response = awiat fetch(v.apiURL + username);
    const data = await response.json();
}