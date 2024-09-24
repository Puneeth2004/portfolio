document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    if (email === "" || message === "") {
      alert("Please fill out all fields.");
    } else {
      alert("Thank you for your message!");
      // Simulate form submission (in real scenario, you would send this data to your server)
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  });