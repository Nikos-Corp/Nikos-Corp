document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.getElementById('navbarToggle');
  
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
    });

  });
  
});
