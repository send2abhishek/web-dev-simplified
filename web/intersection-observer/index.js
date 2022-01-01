const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(
  (entries) => {
    // add the class list as show when card is visible on screen and hide when it is not on screen
    entries.forEach((e) => {
      e.target.classList.toggle("show", e.isIntersecting);
      // stop observing once it is visible on screen, so that once user scrolls up he can see the loaded
      // element early
      //   if (e.isIntersecting) {
      //     observer.unobserve(e.target);
      //   }
    });
  },
  {
    threshold: 0.5, // 50%
  }
  // this threshold define what percentage we want to obser on single item, its value between 0 and  1.
  // where 1 is observe when it is visible completly
);

const lastCardObserver = new IntersectionObserver(
  (entries) => {
    const lastCard = entries[0];

    if (!lastCard.isIntersecting) return;
    loadNewCards();
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(document.querySelector(".card:last-child"));
  },
  {
    rootMargin: "100px",
  }
);

lastCardObserver.observe(document.querySelector(".card:last-child"));

cards.forEach((card) => observer.observe(card));

const cardContainer = document.querySelector(".container");

function loadNewCards() {
  console.log("called");
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.textContent = "New Card";
    card.classList.add("card");
    observer.observe(card);
    cardContainer.append(card);
  }
}
