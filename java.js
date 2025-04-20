document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    // Validate inputs
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const birthDate = document.getElementById('birth-date').value;
    
    if (!fullName || !email || !phone || !birthDate) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Show success message (in real apps, you might send this data to the server)
    alert("Form submitted successfully!");
    document.getElementById('registration-form').reset(); // Reset the form
  });
  
