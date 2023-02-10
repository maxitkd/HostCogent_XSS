
let search = document.getElementById('searchFor');

// That's a secondary check for the web input
function sanitization(e) {
     if(e!==null||e!==undefined){
        if(e.value!==""&&e.name==="searchFor")
            e.value=e.value.toUpperCase();

     }
}

