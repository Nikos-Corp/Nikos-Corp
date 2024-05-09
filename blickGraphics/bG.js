document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.getElementById('navbarToggle');
  const darkDiv = document.querySelector('.invisibleDiv');
  const menuItems = document.querySelectorAll('.invisibleMenuItem');

  navbarToggle.addEventListener('click', function() {
    // Loop through each menuItem element
    menuItems.forEach(function(item) {
      // Toggle the 'invisibleMenuItem' class on the element
      item.classList.toggle('menuItem');
      darkDiv.classList.toggle('darkDiv')
    });
  });
});