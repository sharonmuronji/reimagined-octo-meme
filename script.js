const contactform=document.getElementById("contactform");
if (contactform) {
    contactform.addEventListener("submit", function(event){
        event.preventDefault();
        document.getElementById("message").textContent="Thank you! Your message have been received.";
        contactform.requestFullscreen();
    });
}