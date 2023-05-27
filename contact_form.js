// Function to validate the email
function validateEmail(email) {
  // Regular expression to check for lowercase email
  const lowercaseRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  return lowercaseRegex.test(email);
}

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent the form from submitting by default

  const emailInput = document.getElementById('contact_email');
  const errorMessage = document.getElementById('error_message');

  const email = emailInput.value.trim().toLowerCase();

  if (!validateEmail(email)) {
    // Email validation failed
    errorMessage.textContent = 'Please enter a valid lowercase email address.';
    return; // Stop form submission
  }

  // Clear any previous error messages
  errorMessage.textContent = '';

  // Submit the form
  const form = document.getElementById('contact_form');
  form.submit();
}

// Event listener for form submission
const submitButton = document.getElementById('submit_btn');
submitButton.addEventListener('click', submitForm);
