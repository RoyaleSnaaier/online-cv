// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Animation for home section - H1 with a delay
gsap.from('.home h1', {
    duration: 1,
    opacity: 0,
    y: -50,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.home',
        start: 'top 90%', // Start animation when 90% of the home section is in view
        toggleActions: 'play none none reverse' // Play animation when scrolling down, reverse when scrolling up
    }
});
// // Animation for home section - icons with a delay
// gsap.from('.icon', {
//     duration: 1,
//     opacity: 0,
//     y: -50,
//     stagger: 0.3,
//     ease: "power2.out",
//     delay: 2,
//     scrollTrigger: {
//         trigger: '.home',
//         start: 'top 90%',
//         toggleActions: 'play none none reverse'
//     }
// });
const icons = document.querySelectorAll('.icon');

// Add event listeners for hover effect
icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { scale: 1.2, duration: 0.3, ease: 'power2.inOut' });
    });

    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { scale: 1, duration: 0.3, ease: 'power2.inOut' });
    });
});




// Animation for section 1
gsap.from('.section-1 p, .section-1 p1', {
    duration: 1,
    opacity: 0,
    x: -50,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 90%', // Start animation when 90% of section 1 is in view
        toggleActions: 'play none none reverse' // Play animation when scrolling down, reverse when scrolling up
    }
});

// Animation for section 2
gsap.from('.section-2 .section-2__content__right', {
    duration: 1,
    opacity: 0,
    x: -50,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.section-2',
        start: 'top 90%', // Start animation when 90% of section 2 is in view
        toggleActions: 'play none none reverse' // Play animation when scrolling down, reverse when scrolling up
    }
});

// Animation for cards in section 3
gsap.from('.card', {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.section-3',
        start: 'top 90%', // Start animation when 90% of section 3 is in view
        toggleActions: 'play none none reverse' // Play animation when scrolling down, reverse when scrolling up
    }
});

// Animation for skill categories in section 3
gsap.from('.skill-category', {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.section-3',
        start: 'top 90%', // Start animation when 90% of section 3 is in view
        toggleActions: 'play none none reverse' // Play animation when scrolling down, reverse when scrolling up
    }
});

