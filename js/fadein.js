function fadeInOnScroll() {
    const fadeSections = document.querySelectorAll('.fade-in-section');
  
    fadeSections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const windowHeight = window.innerHeight;
  
      if (window.pageYOffset > sectionTop - windowHeight + sectionHeight / 2) {
        section.classList.add('fade-in');
      }
    });
  }
  
  // Listen for scroll events and trigger fadeInOnScroll
  window.addEventListener('scroll', fadeInOnScroll);
  
  // Trigger fadeInOnScroll on page load
  window.addEventListener('load', fadeInOnScroll);