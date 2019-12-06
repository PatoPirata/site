function Question(texto, selecao, resposta) {
    this.texto = texto;
    this.selecao = selecao;
    this.resposta = resposta;
}

Question.prototype.respostaCorreta = function(opcao) {
    return this.resposta === opcao;
}