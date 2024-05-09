document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.getElementById('navbarToggle');
<<<<<<< HEAD
  const darkDiv = document.querySelector('.invisibleDiv');
  const menuItems = document.querySelectorAll('.invisibleMenuItem');

  navbarToggle.addEventListener('click', function() {
    // Loop through each menuItem element
    menuItems.forEach(function(item) {
      // Toggle the 'invisibleMenuItem' class on the element
      item.classList.toggle('menuItem');
      darkDiv.classList.toggle('darkDiv')
=======
  
  const menuItems = document.querySelectorAll('.menuItem');
  
  navbarToggle.addEventListener('click', function() {

    menuItems.forEach(function(item) {
      if (item.style.display === 'none' || item.style.display === '') {
        item.style.display = 'block';
        setTimeout(function() {
          item.style.opacity = '1';
        }, 10); 
      } else {
        item.style.opacity = '0';
        setTimeout(function() {
          item.style.display = 'none';
        }, 300); // Adjust as needed to match CSS transition duration
      }
>>>>>>> 5460a5ff301fedeb4451754af59a23159b3aad3e
    });

  });
<<<<<<< HEAD
});
=======
  
});
>>>>>>> 5460a5ff301fedeb4451754af59a23159b3aad3e
