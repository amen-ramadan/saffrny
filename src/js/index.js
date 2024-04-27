import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "../scss/style.scss";

const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
});

// check local storage when loaded pages
document.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  } else {
    document.body.classList.remove("dark-mode");
    darkModeToggle.checked = false;
  }
});


// code for footer 
    document.addEventListener('DOMContentLoaded', function() {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var footer = document.getElementById('footer');
        var copyright = document.getElementById('copyright');
        copyright.innerHTML = "&copy; " + currentYear + "سفرني";
    });
