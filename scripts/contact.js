// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
let contact_page = document.getElementById("contact-page")

let submit_button = document.getElementById("submit-button")

submit_button.addEventListener("click", function() {
    contact_page.style.justifyContent = "flex-start"
    contact_page.style.fontSize = "24px"
    contact_page.innerHTML = "<p>" + "Thank you for your message!" + "</p>"
})

