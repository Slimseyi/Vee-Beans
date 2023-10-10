

let navbar = document.querySelector('.navbar');
let iconMenu = document.querySelector('#icon-menu');


iconMenu.onclick = () => {
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    navbar.classList.remove('open');
}


document.body.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !iconMenu.contains(event.target)) {
        navbar.classList.remove('open');
    }
});





/////////////////////Animations using intersection observer API/////////////////////

const faders = document.querySelectorAll('.fade-in');

const options = {
  root: null, 
  rootMargin: '0px 0px -50px 0px', 
  threshold: 0.5, // Trigger at 50%
};

const appearScroll = new IntersectionObserver(function(entries, appearScroll) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            appearScroll.unobserve(entry.target);
        }
    });
}, options);

faders.forEach(fader => { 
    appearScroll.observe(fader);
});


                /////////////////////LAZY LOADER/////////////////////


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset; 
        img.classList.add('active'); 
        observer.unobserve(img); // 
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the image is visible
  });
  
  const lazyImages = document.querySelectorAll('.fade-in-element');
  lazyImages.forEach(img => {
    observer.observe(img);
  });



   /////////////////////Increment delay ANIMATION////////////////////////

   
 const fadersDelay = document.querySelectorAll('.fade-in-delay');

 const optionsDelay = {
   root: null,
   threshold: 0.5, // Trigger at 50%
 };
 
 const appearScrollDelay = new IntersectionObserver(function(entries, appearScrollDelay) {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add("appear-delay");
       appearScrollDelay.unobserve(entry.target);
     }
   });
 }, optionsDelay);
 
 let delay = 1000; //  the first delay time in ms
 
 fadersDelay.forEach(faderDelay => {

   setTimeout(() => {
     appearScrollDelay.observe(faderDelay);
   }, delay);
 
   delay += 600; //the increment delay time in ms
 });
 
 



 
  



