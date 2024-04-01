document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.getElementById("mobileMenuIcon");
  const closeIcon = document.getElementById("closeIcon");
  const mobileMenu = document.querySelector(".mobileMenu");

  mobileMenuIcon.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    mobileMenuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  closeIcon.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
    mobileMenuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });

  function handleResize() {
    if (window.innerWidth > 1023) {
      mobileMenu.classList.add("hidden");
      mobileMenuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  }
  handleResize();

  window.addEventListener("resize", handleResize);

  const title = document.getElementById("title");
  const imageTitle = document.getElementById("imageTitle");
  const project = document.getElementById("project");

  const images = [
    document.getElementById("image1"),
    document.getElementById("image2"),
    document.getElementById("image3"),
  ];
  const labels = [
    {
      title: "Brand naming & guidelines",
      imageTitle: "Lean Product Roadmap",
      project: "2019 Project",
    },
    {
      title: "Brand identity & merchandise",
      imageTitle: "New Majestic Hotel",
      project: "2018 Project",
    },
    {
      title: "Brand identity & web design",
      imageTitle: "Crypto Dashboard",
      project: "2016 Project",
    },
  ];
  let currentIndex = 0;

  function showCurrentImage() {
    images.forEach((image, index) => {
      if (index === currentIndex) {
        image.classList.remove("hidden");
      } else {
        image.classList.add("hidden");
      }
    });
    title.textContent = labels[currentIndex].title;
    imageTitle.textContent = labels[currentIndex].imageTitle;
    project.textContent = labels[currentIndex].project;
  }

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showCurrentImage();
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    showCurrentImage();
  });

  showCurrentImage();
});
