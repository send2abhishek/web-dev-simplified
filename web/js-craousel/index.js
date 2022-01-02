const buttons = document.querySelectorAll("[data-carousal-btn]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carousalBtn === "next" ? 1 : -1;

    console.log("offset", offset);

    // from button selector go to parent element and then select the data-slides
    // this will select all the slides elements return result in array
    const slides = button
      .closest("[data-carousal]")
      .querySelector("[data-slides]");

    // select the active slide
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }

    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
