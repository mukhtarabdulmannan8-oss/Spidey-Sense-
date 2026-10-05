document.querySelector(".newsletter-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.querySelector("#email");

    if (!email.checkValidity()) {
        email.reportValidity();
        return;
    }

    alert("Thanks for subscribing!");
    this.reset();
});

function space() {
    document.getElementById("")
}