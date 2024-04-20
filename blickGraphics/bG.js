document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');

  navbarToggle.addEventListener('click', function() {
    if (navbarMenu.style.display === 'none' || navbarMenu.style.display === '') {
      navbarMenu.style.display = 'flex';
    } else {
      navbarMenu.style.display = 'none';
    }
  });
});
