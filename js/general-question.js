const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  console.log(question);
  btn.addEventListener("click", function () {
    questions.forEach((iten) => {
      if (iten !== question) {
        iten.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
    console.log(question);
  });
});
