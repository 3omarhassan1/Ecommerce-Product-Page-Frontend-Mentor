function openOverlay() {
  document.querySelector(".overlay").style.display = "flex";
}

document.querySelector(".close").addEventListener("click", (e) => {
  document.querySelector(".overlay").style.display = "none";
});

let si = 0;
showSlide(si);

function changeSlide(n) {
  si += n;
  if (si < 0) {
    si = 3;
  }
  if (si > 3) {
    si = 0;
    console.log(si);
  }
  showSlide(si);
}

function currentSlide(n) {
  showSlide((si = n));
}

function showSlide(si) {
  console.log(si);
  let slides = document.querySelectorAll(".slide");
  let thumbins = document.querySelectorAll(".thumbin");
  let thumbs = document.querySelectorAll(".thumbin");

  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[si].style.display = "block";

  thumbins.forEach((thumbin) => {
    thumbin.parentElement.classList.remove("active");
  });

  thumbins[si].parentElement.classList.add("active");
}
