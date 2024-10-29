document.addEventListener("DOMContentLoaded", () => {
    let closebtn = document.getElementById("closebtn");
    let outer = document.querySelector(".outer");
    let popup = document.querySelector(".popup");
    let reservationForm = document.getElementById("reservationForm");
    let dateInput = document.getElementById("date");

    // Set the minimum date to today
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    dateInput.setAttribute("min", formattedDate); // Set the min attribute

    // Show the popup on form submit
    reservationForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting

        // Show the outer div (flex) and the popup
        outer.style.display = "flex"; 
        popup.style.display = "block"; // Ensure the popup is displayed
        document.body.style.backgroundColor = "#9EA9B1"; // Change background
    });

    // Close the popup on click
    closebtn.addEventListener("click", () => {
        outer.style.display = "none"; // Hide the outer div
        popup.style.display = "none"; // Optionally hide the popup again
        document.body.style.backgroundColor = ""; // Reset background color
        
        // Reset the form fields
        reservationForm.reset();
    });

});

document.addEventListener("DOMContentLoaded", () => {
    let submitbtn = document.getElementById("submit");
    let closebtn = document.getElementById("closebtn");
    let outer = document.querySelector(".outer");
    let popup = document.querySelector(".popup");
    let contactForm = document.getElementById("contactForm");

    // Show the popup on form submit
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting

        // Show the outer div and the popup
        outer.style.display = "flex"; 
        popup.style.display = "block"; // Ensure the popup is displayed

        // Optionally reset the form
        contactForm.reset();
    });

    // Close the popup on click
    closebtn.addEventListener("click", () => {
        outer.style.display = "none"; // Hide the outer div
        popup.style.display = "none"; // Optionally hide the popup again
    });
});

