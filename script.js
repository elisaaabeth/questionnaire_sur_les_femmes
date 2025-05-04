const questions = document.querySelectorAll(".question");

console.log(questions, "question");

questions.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item, "question");

    const next = item.nextElementSibling;
    next.classList.toggle("visible");
    // je cible et stock l'icone de item
    icone = item.lastElementChild;
    icone.classList.toggle("bxs-chevron-up");
  });
});
