$(document).ready(function() {

  document.getElementById('fb').onclick = function() {
    window.location.href = "https://www.facebook.com/jacob.wieler";
  }

  document.getElementById('insta').onclick = function() {
    window.location.href = "https://www.instagram.com/jakewieler/";
  }

  document.getElementById('github').onclick = function() {
    window.location.href = "https://github.com/jwieler";
  }

  document.getElementById('imgMenu').onclick = function() {
    document.getElementById("testMenu").classList.toggle("show");
  }

  window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("testMenu");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

});
