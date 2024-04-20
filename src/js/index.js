import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "../scss/style.scss";

const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode'); // تبديل الفئة dark-mode على الـ body
});
