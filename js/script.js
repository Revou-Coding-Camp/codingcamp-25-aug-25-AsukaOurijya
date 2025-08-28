console.log("Hello World");

greet();

validateForm();

// Greet the user
function greet() {
    let username = prompt("Please enter your name: ");
    alert("Hello ", username, "!")
    document.getElementById("username").innerText = username;
}

// Validate the form
function validateForm() {
    let name = document.getElementById("name-input").value;
    if (name === "") {
        // If empty
        alert("Name must be filled out");
    } else {
        // If filled
        alert("Thanks, ", name, "!");
    }
}