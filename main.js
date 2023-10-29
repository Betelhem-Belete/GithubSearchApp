import * as v from "./js/variables.js";

v.form.addEventListener("submit", (e) => {
    e.preventDefault();
    // let user = v.search.value;
    let user = v.search.value.split(" ").join("");//remove the empty space between
    // let user = v.search.value.replace(/\s+/g, "");//another way to remove the empty space between
    

    if (user === ""){
        v.errorMessage("Input cannot be empty");
    }
    else {
        getUser(user);
        // v.form.reset();//remove the words in the search tab after the search button is pressed
        v.search.value = "";//remove the words in the search tab after the search bytton is pressed
    }
})