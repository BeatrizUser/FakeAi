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
        pergunta: () => `Legal ${memoria.primeironome} ${memoria.segundonome}! qual é o seu CPF?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "inputcpf",
        nomedememoria: "numerocpf",
        nextquestion: 3,
    },
    {
        pergunta: () => `Digite uma senha ${memoria.primeironome} ${memoria.segundonome}.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "inputpassword",
        nomedememoria: "senha",
        nextquestion: 4,
    },
    {
        pergunta: () =>`Vou te chamar só de ${memoria.primeironome}! Ok?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "onlyoption",
        option1: "Ok",
        nomedememoria: "ignorarsegundonome",
        nextquestion: 5,
    },
    // ATE AQUI DEUS AJUDOU!

    {
        pergunta: () => `${memoria.primeironome}, aqui é você que manda!\nO que você quer fazer?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "multioption",
        option1: "Ouvir Piada",
        option2: "Algo Interessante",
        option3: "Ver suas informações",
        option4: "Assistir um Video",
        option5: "Algo Interessante",
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

// FUNÇÃO DE ANALISE DE TIPO DE INTERAÇÃO
function seletor(question){
    $("#audio").html(`<audio hidden="True" controls="" autoplay="" name="media"><source src="${question.audio()}" type="audio/x-wav"></audio>`)
    if (question.exibicao == "input"){
        perguntainputtext(question)
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
    if (question.exibicao == "inputpassword"){
        perguntainputpassword(question)
        return 0
    }
    if (question.exibicao == "inputcpf"){
        perguntainputcpf(question)
        return 0
    }
    perguntaoption2(question)
}




// FUNCÕES DE CONSTRUÇÃO - EXIBI HTML DE ACORDO COM O TIPO DE INTERAÇÃO

function perguntaonlyoption(question){
    $("#question").text(`${question.pergunta()}`)
    $("#resposta").html(`<button class="btnresposta" id="ok">${question.option1}</button>`)
    $("#ok").click(function(){
        var idnext = question.nextquestion
        seletor(questionario[idnext])
    });
}

function perguntaoption2(question){
    $("#question").text(`${question.pergunta()}`)
    $("#resposta").html(`<button class="btnresposta" id="sim">${question.option1}</button><button class="btnresposta" id="nao">${question.option2}</button>`)
    $("#sim").click(function(){
        var idnext = question.nextquestion1
        perguntaoption2(questionario[idnext])
    });
    $("#nao").click(function(){
        var idnext = question.nextquestion2
        perguntaoption2(questionario[idnext])
    });
}

function perguntainputtext(question){
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
function perguntainputpassword(question){
    $("#question").text(`${question.pergunta()}`)
    $("#resposta").html(`<input type="password" id="inputpassword"><button id="inputok">>></button>`)
    $("#inputok").click(function(){
        var senha = $("#inputpassword").val()
        var nomechave = question.nomedememoria
        memoria[nomechave] = senha
        encoderaudio(questionario[question.nextquestion])
        seletor(questionario[question.nextquestion])
    });
}
function perguntainputcpf(question){
    $("#question").text(`${question.pergunta()}`)
    $("#resposta").html(`<input type="text" id="inputcpf" pattern="[0-9]{11}" placeholder="Insira seu CPF..."><button id="inputok">>></button>`)
    $("#inputok").click(function(){
        if (parseInt($("#inputcpf").val().length) == 11){
            var part1 = $("#inputcpf").val().slice(0,3);
            var part2 = $("#inputcpf").val().slice(3,6);
            var part3 = $("#inputcpf").val().slice(6,9);
            var part4 = $("#inputcpf").val().slice(9,11);
            var formatcpf = `${part1}.${part2}.${part3}-${part4}`
            
            var cpf = formatcpf
            var nomechave = question.nomedememoria
            memoria[nomechave] = cpf
            encoderaudio(questionario[question.nextquestion])
            seletor(questionario[question.nextquestion])
            return 0
    }
        alert("Digite 11 números!")
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




// FUNÇÕES DE SELEÇÃO
function encoderaudio(question){
    var texto = `${question.pergunta()}`
    var encoder = encodeURIComponent(texto);
    var audiochave = "text2speech"
    memoria[audiochave] = encoder

}




// READY!  QUANDO A PAGINA ABRE RODA AS SEGUINTES FUNCOES NA ORDEM DADA.
$( document ).ready(function() {
    encoderaudio(questionario[0])
    seletor(questionario[0])
  });

//   <iframe width="560" height="315" src="https://www.youtube.com/embed/cEItmb_a20M?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>