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



  // تعريف الدالة التي ستتم تنفيذها عند النقر على الزر
//   function toggleContent() {
//   var contents = document.getElementsByClassName("contentToToggle");
//   for (var i = 0; i < contents.length; i++) {
//     if (contents[i].style.display === "none" || contents[i].style.display === "") {
//       contents[i].style.display = "block";
//     } else {
//       contents[i].style.display = "none";
//     }
//   }
//   document.getElementById("toggleButton").classList.toggle("open");
// }


//   // اضافة حدث النقر إلى الزر
//   document.getElementById("toggleButton").addEventListener("click", toggleContent);

// <div class="icon-burger" id="toggleButton">
//         <span></span><span></span><span></span>
//       </div>


// burger icon
// .icon-burger {
//   margin: 20px auto;
//   width: 20px;
//   height: 14px;
//   cursor: pointer;
//   position: relative;
//   display: none;

//   @include breakpoint(medium) {
//     display: block;
//   }
//   span {
//     background-color: black;
//     height: 2px;
//     position: absolute;
//     width: 100%;
//     left: 0;
//     transition: all 0.3s ease;
//   }

//   span:first-child {
//     top: 0;
//   }

//   span:nth-child(2) {
//     top: 6px;
//   }

//   span:nth-child(3) {
//     top: 12px;
//   }

//   &.open span:nth-child(2) {
//     opacity: 0;
//   }

//   &.open span:first-child,
//   &.open span:last-child {
//     background-color: red;
//     top: 6px;
//   }

//   &.open span:first-child {
//     transform: rotate(45deg);
//   }

//   &.open span:last-child {
//     transform: rotate(-45deg);
//   }
// }