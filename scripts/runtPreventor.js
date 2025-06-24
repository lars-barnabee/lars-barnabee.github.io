
    /*
        runt - when the last line found in a paragraph ends with a single word
        The goal is for that to be prevented by finding runts and inserting a
        &nbsp; at the last whitespace in a paragraph. Assumes you write a 
        paragraph between <p> </p> for this to work.
    */
    function runtPreventor(){

        document.querySelectorAll("p").forEach(element => {
            // replace last whitespace found with a "&nbsp;" to prevent a runt word
            element.innerHTML = element.innerHTML.replace(/ (?=[^ ]*$)/i, "&nbsp;");
        });

    }; // end of function runtPreventor

    runtPreventor();