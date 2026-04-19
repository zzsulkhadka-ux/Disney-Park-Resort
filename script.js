// Smooth scroll effect + subtle animation

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

// initial animation state
cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s ease";
});
