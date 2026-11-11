// Small interactive feature for the contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page from actually reloading
    
    const nameInput = document.getElementById('name').value;
    const feedbackElement = document.getElementById('formFeedback');
    
    feedbackElement.style.color = "green";
    feedbackElement.textContent = "Thank you, " + nameInput + "! Your message has been sent successfully.";
    
    // Clear form inputs
    document.getElementById('contactForm').reset();
});