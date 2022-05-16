const questionDisplay = document.querySelector("#question");
const buttons = document.querySelectorAll("button");
const progress = document.querySelector("#progress");
const container = document.querySelector(".container");

let i = 0;
let score = 0;

const questions = [
  new Question(
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()", "includes()", "findIndex()", "isOdd()"],
    "includes()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en un objet Javascript ?",
    ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
    "JSON.parse()"
  ),
  new Question(
    "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.round()"
  ),
];

// console.log(questions);
// async function loop() {
//   for (let i = 0; i < questions.length; i++) {
//     questions[i].questionDisplay();
//     console.log(i);
//     await timer(3000);
//   }
// }

function game() {
  round();
}
function round() {
  if (i < 4) {
    let correct = false;
    progress.textContent = "Question " + (i + 1) + "/" + questions.length;
    questions[i].display();
  } else {
    container.innerHTML = `
    <h1>QUIZ TERMINÉ !<h1/>
    <h3> Votre score est de ${score}/4<h3/>
    `;
  }
}
game();

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (questions[i].reponseDisplay(e.target.innerText)) {
      score++;
    }
    if (i < 4) {
      i++;
    }
    console.log(score);
    round();
  });
});
