function preenche() {
    if(quiz.isEnded()) {
        mostraScores();
    }
    else {
        // mostra questões
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestaoIndex().texto;

        // mostra opções
        var selecao = quiz.getQuestaoIndex().selecao;
        for(var i = 0; i < selecao.length; i++) {
            var element = document.getElementById("opcao" + i);
            element.innerHTML = selecao[i];
            guess("btn" + i, selecao[i]);
        }

        mostraProgresso();
    }
};

function guess(id, guess) {
    var botao = document.getElementById(id);
    botao.onclick = function() {
        quiz.guess(guess);
        preenche();
    }
};


function mostraProgresso() {
    var numeroQuestao = quiz.questaoIndex + 1;
    var element = document.getElementById("progresso");
    element.innerHTML = "Questão " + numeroQuestao + " de " + quiz.questoes.length;
};

function mostraScores() {
    var gameOverHTML = "<h1>Resultado</h1>";
    gameOverHTML += "<h2 id='score'> Pontuação: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// cria questões
var questoes = [
    new Question("Qual não é uma linguagem de programação orientada a objetos?", ["Java", "C#","C++", "C"], "C"),
    new Question("Qual linguagem é usada para personalizar páginas da Web?", ["C#", "JQuery", "CSS", "Unity"], "CSS"),
    new Question("Qual das alternativas não é um sistema operacional?", ["Android", "Apple","Windows", "Linux"], "Apple"),
    new Question("Se um determinado código não gera resultado, pode se dizer que o problema esta no(a)....", ["Compilação", "Execução","Orientação", "Programador"], "Compilação"),
    new Question("Existem ____ componentes principais da programação orientada a objetos.", ["1", "6","2", "4"], "4"),
    new Question("O que fazer quando o Windows está sofrendo atualização não solicitada?", ["Reiniciar", "Forçar o desligamento","Esperar", "Fazer Café"], "Fazer Café"),
    new Question("Qual linguagem é usada em aplicativos da web?", ["PHP", "Python", "Javascript", "Todas"], "Todas"),
    new Question("Se um programa não gera o resultado esperado, é classificado como erro de___?", ["Compilação", "Fatoração", "Modelagem", "Execução"], "Execução"),
    new Question("Qual linguagem abaixo foi usada para fazer o jogo Cuphead?", ["Java", "Erlang", "Kotlin", "Unity"], "Unity"),
    new Question("Ser um programador é...", ["Cansativo", "Cansativo", "Cansativo", "Cansativo"], "Cansativo")
];

// cria Quiz
var quiz = new Quiz(questoes);

// exibe Quiz
preenche();
