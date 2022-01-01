const box = document.querySelector(".box");

const observer = new ResizeObserver((entity) => {
  const box = entity[0];
  box.contentRect.width < 500
    ? (box.target.style.backgroundColor = "blue")
    : (box.target.style.backgroundColor = "red");
});
observer.observe(box);
