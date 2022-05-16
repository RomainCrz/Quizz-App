class Question {
  constructor(question, proposition, reponse) {
    (this.question = question),
      (this.proposition = proposition),
      (this.reponse = reponse);
  }

  async display() {
    await this.questionDisplay();
    await this.propositionDisplay();
  }

  questionDisplay() {
    questionDisplay.textContent = this.question;
  }
  propositionDisplay() {
    for (let i = 0; i < this.proposition.length; i++) {
      document.querySelector("#guess" + i).textContent = this.proposition[i];
    }
  }
  reponseDisplay(e) {
    if (e == this.reponse) {
      return true;
    } else {
      return false;
    }
  }
}
