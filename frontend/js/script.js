// Check authentication status and update navbar
function checkAuth() {
    fetch("http://127.0.0.1:8000/auth/status")
      .then(response => response.json())
      .then(data => {
        const authLinks = document.getElementById("auth-links");
        if (data.authenticated) {
          // User is signed in
          authLinks.innerHTML = `
            <a href="#" id="logout">Logout</a>
            <span>Welcome, ${data.username}</span>
          `;
          document.getElementById("logout").addEventListener("click", logout);
        } else {
          // User is not signed in
          authLinks.innerHTML = `
            <a href="signin.html">Sign In</a>
            <a href="register.html">Register</a>
          `;
        }
      })
      .catch(error => console.error("Error checking auth:", error));
  }
  
  // Log out the user
  function logout() {
    fetch("http://127.0.0.1:8000/auth/logout", { method: "POST" })
      .then(() => {
        checkAuth(); // Refresh navbar after logging out
      })
      .catch(error => console.error("Error logging out:", error));
  }
  
// Load the navbar dynamically
document.addEventListener("DOMContentLoaded", () => {
    fetch("components/navbar.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("navbar").innerHTML = html;
        setupNavigation(); // Set up event listeners for navigation
      });
  });
  
  // Set up navigation to dynamically load pages
  function setupNavigation() {
    const links = document.querySelectorAll('[data-page]');
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const page = event.target.dataset.page; // Get the page name
        loadPage(page); // Dynamically load the content
      });
    });
  }
  
  // Dynamically load the page into the #content section
  function loadPage(page) {
    fetch(`pages/${page}.html`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Page not found: ${page}`);
        }
        return response.text();
      })
      .then(html => {
        document.getElementById("content").innerHTML = html;
      })
      .catch(error => {
        console.error("Error loading page:", error);
        document.getElementById("content").innerHTML = `<p>Page not found</p>`;
      });
  }
  
