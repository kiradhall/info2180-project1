document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("button");
    var txt = document.getElementsByClassName("message")[0];
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email;

    function ValidateEmail(email){
        
        if(email.match(emailformat)){
            return true;
        } else{
            return false;
        }
    }

    btn.addEventListener("click", function(event) {
        event.preventDefault();

        email = document.getElementById("email").value;
        
        if (ValidateEmail(email)){
            txt.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!"; 
        } else{
            txt.textContent = "Please enter a valid email address.";  
        }
    });
})



