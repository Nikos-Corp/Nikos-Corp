// Select the image element with class '.logo'
var logo = document.querySelector('.logo');

// Function to handle mouse movement for the logo
function handleLogoMouseMove(event) {
    // Get the mouse position relative to the center of the logo
    var mouseX = event.clientX - (logo.offsetLeft + logo.offsetWidth / 2);
    var mouseY = event.clientY - (logo.offsetTop + logo.offsetHeight / 2);

    // Calculate the tilt angle based on mouse position with reduced intensity
    var tiltAngleX = -mouseY / 20; // Adjust the divisor to reduce tilt intensity
    var tiltAngleY = mouseX / 20; // Adjust the divisor to reduce tilt intensity

    // Apply the perspective and tilt transformation to the logo
    logo.style.perspective = '1000px'; // Adjust the perspective depth as needed
    logo.style.transform = 'perspective(1000px) rotateX(' + tiltAngleX + 'deg) rotateY(' + tiltAngleY + 'deg)';
}

// Select the elements to apply different effects
var parallaxElements = document.querySelectorAll('.container, .back, .nav');

// Function to handle mouse movement for the parallax elements
function handleParallaxMouseMove(event) {
    // Get the mouse position relative to the center of the window
    var mouseX = event.clientX - window.innerWidth / 2;
    var mouseY = event.clientY - window.innerHeight / 2;

    // Define different intensities for each class
    var intensityMap = {
        'container': 0.1,
        'back': 0.05,
        'nav': -0.075
    };

    // Apply different parallax effects based on the class
    parallaxElements.forEach(function(element) {
        var classList = element.classList;
        var intensity = intensityMap['default']; // Default intensity

        if (classList.contains('container')) {
            intensity = intensityMap['container'];
        } else if (classList.contains('back')) {
            intensity = intensityMap['back'];
        } else if (classList.contains('nav')) {
            intensity = intensityMap['nav'];
        }

        // Calculate the parallax effect based on mouse position and class intensity
        var translateX = mouseX * intensity;
        var translateY = mouseY * intensity;

        // Apply the parallax transformation to each parallax element
        element.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px)';
    });
}

// Add event listeners to track mouse movement for the logo and parallax elements
logo.addEventListener('mousemove', handleLogoMouseMove);
document.addEventListener('mousemove', handleParallaxMouseMove);

// display page unavailable popUp
document.addEventListener("DOMContentLoaded", function() {
    const unavailableElement = document.querySelector('.unavailable');
    const deadEndButtons = document.querySelectorAll('.deadEnd');

    deadEndButtons.forEach(function(button) {
            button.addEventListener('click', function() {
            unavailableElement.style.display = 'flex';
        });
    })

    unavailableElement.addEventListener('click', function() {
        unavailableElement.style.display = 'none';
    });


//REFRESH

    const refreshButton = document.querySelector(".home");

    // Add event listener to refresh button
    refreshButton.addEventListener("click", function() {
        // Reload the current page
        location.reload();
    });
});


    
