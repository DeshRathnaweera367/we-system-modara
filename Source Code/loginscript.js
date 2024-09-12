function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    var navbar = document.getElementById("navbar");
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "32px";
    } else {
        navbar.style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
};


document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('formSuccess').textContent = '';
  
    // Get form values
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
  
    // Validation flags
    var isValid = true;
  
    // Username validation
    if (username.length < 3 || username.length > 50) {
      document.getElementById('usernameError').textContent = 'Username must be between 3 and 50 characters.';
      isValid = false;
    }
  
    // Password validation
    if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
      isValid = false;
    }
  
    // If form is valid, display success message
    if (isValid) {
      document.getElementById('formSuccess').textContent = 'Login successful!';
      // You can add code here to actually submit the form or process the login
      // For example: this.submit(); or send data to a server
    }
  });
  
  // Handle forgot password link click
  document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    // Redirect to a forgot password page or show a modal
    alert('Redirect to forgot password page.');
  });