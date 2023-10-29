import * as v from "./js/variables.js";
import { getUser, errorMessage } from "./js/functions.js"

v.form.addEventListener("submit", (e) => {
    e.preventDefault();
    // let user = v.search.value;
    // let user = v.search.value.replace(/\s+/g, "");//another way to remove the empty space between
    let user = v.search.value.split(" ").join("");//remove the empty space between
    
    if (user === ""){
        errorMessage("Input cannot be blank");
        console.log("blank");
    }
    else {
        getUser(user);
        // v.form.reset();//remove the words in the search tab after the search button is pressed
        v.search.value = "";//remove the words in the search tab after the search bytton is pressed
    }
})