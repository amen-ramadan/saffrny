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



// هذا الكود تم وضعه داخل الملف  the-tourist-tour-2.html

// function enlargeImage(index) {
//   // تكبير الصورة المختارة في الكاروسيل
//   document.querySelectorAll('.carousel-item').forEach(item => {
//     item.classList.remove('active');
//   });
//   document.querySelectorAll('.carousel-item')[index - 1].classList.add('active');
// }