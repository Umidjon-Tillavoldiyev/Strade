const questions = document.querySelectorAll(".question-answer");

questions.forEach(function(question) {
  const faq = question.querySelector('.question-btn');
  faq.addEventListener("click",function(){
    question.classList.toggle("show-text");
  });
});