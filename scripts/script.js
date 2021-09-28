var memoria = {
    nomerobo: "Jorge"
}
var questionario = [
    {
        pergunta: () => `Oi Humano eu sou o ${memoria.nomerobo}!\n Qual é o seu primeiro nome?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "input",
        nomedememoria: "primeironome",
        nextquestion: 1,
    },
    {
        pergunta: () => `Tudo bem, ${memoria.primeironome}?\n E qual é o seu segundo nome?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "input",
        nomedememoria: "segundonome",
        nextquestion: 2,
        
    },
    {
        pergunta: () => `Legal ${memoria.primeironome} ${memoria.segundonome}! Voce quer rir?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "option",
        option1: "Sim. quero.",
        option2: "Não tô afim!",
        nextquestion1: 6,
        nextquestion2: 5,
    },
    {
        pergunta: () => "Vai ficar tudo bem! Eu prometo!",
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "option",
        option1: "Vai sim",
        option2: "Acho que não!",
        nextquestion1: 6,
        nextquestion2: 4,
    },
    {
        pergunta: () => "Vai melhorar Pedrão! Quer rir?",
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "option",
        option1: "Sim. quero.",
        option2: "Não tô afim!",
        nextquestion1: 6,
        nextquestion2: 5,
    },
    {
        pergunta: () => "hey cadê meu guerreiro? Deixa eu te conta uma piada?",
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "option",
        option1: "Pode ser",
        option2: "Quero não!",
        nextquestion1: 7,
        nextquestion2: 2,
    },
    {
        pergunta: () => "Qual é o parente que nunca recusa um convite?",
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "option",
        option1: "Outra",
        option2: "Péssima",
        nextquestion1: 6,
        nextquestion2: 5,
    },
    {
        pergunta: () => "Voce quer ouvir uma piada ou um fato interessante?",
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "option",
        option1: "Piada",
        option2: "Fato interessante",
        nextquestion1: 6,
        nextquestion2: 8,
    },
    {
        pergunta: () => "Não sei! Vou cantar!",
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "option",
        option1: "Início",
        option2: "Tchau",
        nextquestion1: 0,
        nextquestion2: 0,
    },
]

function exibirperguntaopcao(question){
    $("#question").text(`${question.pergunta()}`)
    $("#resposta").html(`<button class="btnresposta" id="sim">${question.option1}</button><button class="btnresposta" id="nao">${question.option2}</button>`)
    $("#sim").click(function(){
        var idnext = question.nextquestion1
        exibirperguntaopcao(questionario[idnext])
    });
    $("#nao").click(function(){
        var idnext = question.nextquestion2
        exibirperguntaopcao(questionario[idnext])
    });
}
function seletor(question){
    $("#audio").html(`<audio hidden="True" controls="" autoplay="" name="media"><source src="${question.audio()}" type="audio/x-wav"></audio>`)
    if (question.exibicao == "input"){
        perguntainput(question)
        return 0
    }
    if (question.exibicao == "video"){
        perguntavideo(question)
        return 0
    }
    if (question.exibicao == "option"){
        perguntaoption(question)
        return 0
    }
    exibirperguntaopcao(question)
}
function perguntainput(question){
    $("#question").text(`${question.pergunta()}`)
    $("#resposta").html(`<input type="text" id="inputnome"><button id="inputok">>></button>`)
    $("#inputok").click(function(){
        var nome = $("#inputnome").val()
        var nomechave = question.nomedememoria
        memoria[nomechave] = nome
        encoderaudio(questionario[question.nextquestion])
        seletor(questionario[question.nextquestion])
    });
}
function perguntaoption(question){
    $("#question").text(`${question.pergunta()}`)
    $("#resposta").html(`<button id="sim" class=".btnresposta">${question.option1}</button><button id="nao" class=".btnresposta">${question.option2}</button>`)
    $("#sim").click(function(){
        var idnext = question.nextquestion1
        encoderaudio(questionario[idnext])
        seletor(questionario[idnext])
    });
    $("#nao").click(function(){
        var idnext = question.nextquestion2
        encoderaudio(questionario[idnext])
        seletor(questionario[idnext])
    });
}
function encoderaudio(question){
    var texto = `${question.pergunta()}`
    var encoder = encodeURIComponent(texto);
    var audiochave = "text2speech"
    memoria[audiochave] = encoder

}
$( document ).ready(function() {
    encoderaudio(questionario[0])
    seletor(questionario[0])
  });

//   <iframe width="560" height="315" src="https://www.youtube.com/embed/cEItmb_a20M?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>