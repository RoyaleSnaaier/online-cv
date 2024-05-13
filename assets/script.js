// ============== MOUSE =============//
// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})
//================ LOOP ================//
const images = document.querySelectorAll('.loader__container img');

let index = 0; // Initialize index

// Function to show the next image
function showNextImage() {
    images.forEach(image => {
        image.classList.remove('active'); // Hide all images
    });
    images[index].classList.add('active'); // Show the active image
    index = (index + 1) % images.length; // Update index for next image
}

// Call showNextImage function every 2 seconds (adjust as needed)
setInterval(showNextImage, 2000);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Get the loader container
// Get the loader container
const loaderContainer = document.querySelector('.loader__container');

let activeSection = null;

// Function to fade in a section
function fadeInSection(sectionElement) {
  gsap.fromTo(sectionElement, { opacity: 0, scale: 0.8 }, { duration: 0.5, opacity: 1, display: 'block', scale: 1, ease: "power2.out" });
}

// Function to fade out a section
function fadeOutSection(sectionElement, callback) {
  gsap.to(sectionElement, { duration: 0.5, opacity: 0, display: 'none', ease: "power2.inOut", onComplete: callback });
}

// Function to fade in the loader
function fadeInLoader() {
  loaderContainer.style.display = 'block'; // Set display to block before fading in
  gsap.to(loaderContainer, { duration: 0.5, opacity: 1, ease: "power2.out" });
}


// Function to fade out the loader
function fadeOutLoader() {
  gsap.to(loaderContainer, { duration: 0.5, opacity: 0, display: 'none', ease: "power2.inOut" });
}

// Function to toggle visibility of a section
function toggleVisibility(sectionElement, triggerElement) {
  if (sectionElement === activeSection) {
    fadeOutSection(activeSection, fadeInLoader); // If clicked on the active section, fade it out and then fade in the loader
    activeSection = null; // Reset the active section
    return;
  }

  if (activeSection) {
    fadeOutLoader(); // Fade out the loader first
    setTimeout(() => {
      fadeOutSection(activeSection, () => {
        fadeInSection(sectionElement); // Fade in the new section after the previous one fades out
        activeSection = sectionElement; // Set the clicked section as the active section
      });
    }, 500); // Delay fading out the active section by 500 milliseconds to ensure the loader fades out first
  } else {
    fadeOutLoader(); // Fade out the loader first
    setTimeout(() => {
      fadeInSection(sectionElement); // Fade in the new section
      activeSection = sectionElement; // Set the clicked section as the active section
    }, 500); // Delay fading in the new section by 500 milliseconds to ensure the loader fades out first
  }

  // Disable the clicked trigger and re-enable others
  const allTriggers = [work1Trigger, work2Trigger, work3Trigger, work4Trigger];
  allTriggers.forEach(trigger => {
    trigger.disabled = (trigger === triggerElement);
  });
}

// Add click event listeners to the trigger elements
const work1Trigger = document.getElementById('work_1');
const work2Trigger = document.getElementById('work_2');
const work3Trigger = document.getElementById('work_3');
const work4Trigger = document.getElementById('work_4');

work1Trigger.addEventListener('click', () => {
  const work1Section = document.querySelector('.work__1');
  toggleVisibility(work1Section, work1Trigger);
});

work2Trigger.addEventListener('click', () => {
  const work2Section = document.querySelector('.work__2');
  toggleVisibility(work2Section, work2Trigger);
});

work3Trigger.addEventListener('click', () => {
  const work3Section = document.querySelector('.work__3');
  toggleVisibility(work3Section, work3Trigger);
});

work4Trigger.addEventListener('click', () => {
  const work4Section = document.querySelector('.work__4');
  toggleVisibility(work4Section, work4Trigger);
});

// Initially fade in the loader when no work section is displayed
fadeInLoader();
