document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});

document.addEventListener("DOMContentLoaded", function() {
  var drop = document.querySelectorAll(".dropdown-trigger");
  var inst = M.Dropdown.init(drop);
});
