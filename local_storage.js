function saveFormData() {
  // Interact with DOM by getting ID of field inputs
  const nameInput = document.getElementById('contact_full_name');
  const emailInput = document.getElementById('contact_email');
  const messageInput = document.getElementById('msg_form');

  // Create data object
  const formData = {
    full_name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  // Save to local storage, apply JSON object strinifymethod on form data
  localStorage.setItem('form_data', JSON.stringify(formData));
}

// Function to load form data from local storage
function loadFormData() {
  // Check if data exists in local storage
  if (localStorage.getItem('form_data')) {
    // Get form inputs
    const nameInput = document.getElementById('contact_full_name');
    const emailInput = document.getElementById('contact_email');
    const messageInput = document.getElementById('msg_form');

    // Load data from local storage
    const formData = JSON.parse(localStorage.getItem('form_data'));

    // Pre-fill form inputs with stored data
    nameInput.value = formData.full_name;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

// Set up event listenerv on the contact form
document.getElementById('contact_form').addEventListener('input', saveFormData);

// Load form data on page load
loadFormData();
