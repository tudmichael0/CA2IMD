// Dynamic functionality can be added here if needed.
// For example, form validation, animations, or interactivity.
console.log("Michael Olaogun's portfolio website loaded!");

// Get the modal
const modal = new bootstrap.Modal(document.getElementById('myModal'));

// Get the button that opens the modal
const modalButton = document.getElementById('myButton');

// When the user clicks the button, open the modal
modalButton.addEventListener('click', function() {
    modal.show();
});

// Optionally, you can add functionality to close the modal when the user clicks the close button
const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', function() {
    modal.hide();
});
