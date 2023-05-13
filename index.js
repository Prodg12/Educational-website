// Navbar section
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });

// Courses section
    let scrollContainer = document.querySelector(".courses-container");
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");


    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });

    nextBtn.addEventListener("click", ()=>{
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += 700;
    });

    backBtn.addEventListener("click", ()=>{
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= 700;
    });