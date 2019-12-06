function Quiz(questoes) {
    this.score = 0;
    this.questoes = questoes;
    this.questaoIndex = 0;
}

Quiz.prototype.getQuestaoIndex = function() {
    return this.questoes[this.questaoIndex];
}

Quiz.prototype.guess = function(resposta) {
    if(this.getQuestaoIndex().respostaCorreta(resposta)) {
        this.score++;
    }

    this.questaoIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questaoIndex === this.questoes.length;
}