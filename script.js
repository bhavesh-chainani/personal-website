function toggleMenu() {
    const menu =document.querySelector(".menu-links"); 
    const icon =document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function sendMail(event) {
    event.preventDefault(); // Prevent default form submission

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs
        .send("service_20pigze", "template_jm79tde", params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Message sent successfully!");
        })
        .catch((err) => console.log(err));
}

// Attach the sendMail function to the form's submit event
document.querySelector(".contact-form").addEventListener("submit", sendMail);
