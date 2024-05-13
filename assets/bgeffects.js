//================ BACKGROUND VIDEO ================//
// Get the canvas element and its context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas width and height to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the Particle class
class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 3 + 1; // Random radius between 1 and 4
        this.color = color;
        this.velocity = {
            x: (Math.random() - 0.5) * 2, // Random velocity along x-axis (reduced from 5 to 2)
            y: (Math.random() - 0.5) * 2  // Random velocity along y-axis (reduced from 5 to 2)
        };
        this.opacity = 1; // Initial opacity
        this.fadeOutRate = Math.random() * 0.01 + 0.005; // Random fade-out rate (reduced from 0.02 to 0.01, and from 0.01 to 0.005)
    }

    // Draw the particle on the canvas
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }

    // Update the particle's position and opacity
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.opacity -= this.fadeOutRate; // Decrease opacity based on fade-out rate
        this.draw(); // Draw the particle
    }
}


// Array to store particles
const particles = [];
let isParticleActive = false; // Flag to track particle activation state

// Function to create particles at a specific position
function createParticles(x, y) {
    const particlesCount = Math.random() * 200 + 50; // Number of particles to create (random between 50 and 250)
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color

    for (let i = 0; i < particlesCount; i++) {
        const angle = Math.random() * Math.PI * 2; // Random angle in radians
        const velocity = Math.random() * 5 + 1; // Random velocity between 1 and 6
        const velocityX = Math.cos(angle) * velocity; // X component of velocity
        const velocityY = Math.sin(angle) * velocity; // Y component of velocity

        const particle = new Particle(x, y, color); // Create a new particle
        particle.velocity.x = velocityX;
        particle.velocity.y = velocityY;
        particles.push(particle); // Add the particle to the array
    }
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Update and draw each particle if active
    if (isParticleActive) {
        particles.forEach((particle, index) => {
            particle.update();
            if (particle.opacity <= 0) {
                particles.splice(index, 1); // Remove faded particles from the array
            }
        });
    }
}

// Event listener for mouse click
canvas.addEventListener('click', function(event) {
    if (isParticleActive) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        createParticles(mouseX, mouseY); // Create particles at the click position
    }
});

// Event listener for window resize
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth; // Resize canvas width
    canvas.height = window.innerHeight; // Resize canvas height
});

// Function to toggle particle activation
function toggleParticleEffect() {
    isParticleActive = !isParticleActive; // Toggle particle activation state
    if (isParticleActive) {
        animate(); // Start the animation loop if activated
    }
}

// Get the icon element by its ID
const icon = document.getElementById('fire_work_effect');

// Event listener for icon click to toggle particle effect
icon.addEventListener('click', toggleParticleEffect);

// =================desolve=====================//

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bgVideo');
    const dissolveBtn = document.getElementById('dissolve');

    dissolveBtn.addEventListener('click', function() {
        dissolveVideo();
    });

    function dissolveVideo() {
        gsap.to(video, {
            duration: 2, // Duration of the animation (in seconds)
            scale: 0.1, // Shrinking the video to 10% of its original size
            ease: "power2.inOut", // Easing function for smoother transition
            onComplete: function() {
                explodeVideo(); // Call explodeVideo function when the video is too small to see
            }
        });
    }

    function explodeVideo() {
        gsap.to(video, {
            duration: 0.5, // Duration of the explosion animation (in seconds)
            scale: 2, // Increase the scale to make the video explode
            opacity: 0, // Fade out the video as it explodes
            ease: "power2.out", // Easing function for explosion effect
            onComplete: function() {
                // Reset the video properties
                video.style.opacity = 1;
            }
        });
    }
});

// ================== TIMER ==================//
document.addEventListener('DOMContentLoaded', function() {
    const timerBtn = document.getElementById('timer');
    const images = document.querySelectorAll('.icon'); // Select all elements with class 'icon'

    timerBtn.addEventListener('click', function() {
        interactWithSite();
    });

    function interactWithSite() {
        // Update root colors to light theme
        document.body.classList.toggle('light-theme');   
        
        // Select all images except those within .home__icons
        let imgs = document.querySelectorAll('img:not(.home__icons img)');
    
        
        // Toggle the filter state for each image
        imgs.forEach(img => {
            let currentFilter = img.style.filter;
            if (currentFilter === 'invert(0)') {
                img.style.filter = 'invert(1)';
            } else if (currentFilter === 'invert(1)') {
                img.style.filter = 'invert(0)';
            } else {
                img.style.filter = 'invert(0)';
            }
        });
    }
    function triggerTornadoAnimation() {
        // Define the animation timeline for the spin effect on the tornado button
        const tlSpin = gsap.to(tornadoButton, {
            duration: 1, // Animation duration in seconds
            rotation: '+=360', // Rotate the tornado button by 360 degrees
            ease: 'power2.out' // Easing function for smoother animation
        });
    
        // Play the spin animation
        tlSpin.play();
    }
    
    
    
    const tornadoButton = document.getElementById('timer');
    tornadoButton.addEventListener('click', triggerTornadoAnimation);
    


    

    // Example usage: Call the function when an element is clicked
    const triggerElement = document.getElementById('trigger');
    triggerElement.addEventListener('click', interactWithSite);
});




//================= PAINT ================//
// Add JavaScript here
document.querySelector('#Paint').addEventListener('click', function() {
    // Add your interactive behavior here
    alert('You clicked the paint brush icon!');
});

//================= SOUND ================//
// Load the sound
const clickSound = new Audio('assets/sounds/minimal-pop-click-ui-1-198301.mp3');

// Add event listeners to the elements
document.getElementById('dissolve').addEventListener('click', () => clickSound.play());
document.getElementById('fire_work_effect').addEventListener('click', () => clickSound.play());
document.getElementById('timer').addEventListener('click', () => clickSound.play());
document.getElementById('Paint').addEventListener('click', () => clickSound.play());