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
        pergunta: () => `Digite uma senha.`,
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
        pergunta: () => `Aqui é você que manda!\nO que você quer fazer?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "multioption",
        option1: "Ouvir Piada",
        option2: "Algo Interessante",
        option3: "Ver suas informações",
        option4: "Assistir um Video",
    
        nextquestion1: 6,
        nextquestion2: 7,
        nextquestion3: 8,
        nextquestion4: 9,
    },
    {
        pergunta: () => "Era uma vez um pintinho sem cu!\n Foi peidar e explodiu!",
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "onlyoption",
        option1: "Legal",
        nextquestion: 5,
    },
    {
        pergunta: () => "Em cima das caravelas portuguesas existia uma pequena cesta por onde a tripulação observava o horizonte em busca de sinal de terra. Por causa do balanço do mar este local era muito instavel e balançava muito, fazendo com que fosse uma função que ninguem desejava, tornando-se quase um castigo. O nome dessa pequena cesta era 'caralho'.Por isso como forma de castigo mandamos alguem pro caralho!",
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "onlyoption",
        option1: "Legal",
        nextquestion: 5,
    },
    {
        pergunta: () => "Essas são suas informações!",
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "infooption",
        option1: "Ok",
        nextquestion: 5,
    },
    {
        pergunta: () => "Esse video é muito Legal.",
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "video",
        option1: "Voltar",
        nextquestion: 5,
        urlvideo: "XqQ_IfaojFQ",
    },
]

// FUNÇÃO DE ANALISE DE TIPO DE INTERAÇÃO
function seletor(question){
    $("#audio").html(`<audio hidden="True" controls="" autoplay="" name="media"><source src="${question.audio()}" type="audio/x-wav"></audio>`)
    if (question.exibicao == "input"){
        perguntainputtext(question)
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
    if (question.exibicao == "onlyoption"){
        perguntaonlyoption(question)
        return 0
    }
    if (question.exibicao == "multioption"){
        perguntamultioption(question)
        return 0
    }
    if (question.exibicao == "infooption"){
        perguntainfooption(question)
        return 0
    }
    if (question.exibicao == "video"){
        perguntavideooption(question)
        return 0
    }
    perguntaoption2(question)
}
// FUNCÕES DE CONSTRUÇÃO - EXIBI HTML DE ACORDO COM O TIPO DE INTERAÇÃO
function perguntamultioption(question){
    $("#question").text(`${question.pergunta()}`)
    $("#resposta").html(`
    <button class="btnresposta" id="piada">${question.option1}</button>
    <button class="btnresposta" id="algoint">${question.option2}</button>
    <button class="btnresposta" id="info">${question.option3}</button>
    <button class="btnresposta" id="videobtn">${question.option4}</button>
    `)
    $("#piada").click(function(){
        var idnext = question.nextquestion1
        encoderaudio(questionario[idnext])
        seletor(questionario[idnext])
    });
    $("#algoint").click(function(){
        var idnext = question.nextquestion2
        encoderaudio(questionario[idnext])
        seletor(questionario[idnext])
    });
    $("#info").click(function(){
        var idnext = question.nextquestion3
        encoderaudio(questionario[idnext])
        seletor(questionario[idnext])
    });
    $("#videobtn").click(function(){
        var idnext = question.nextquestion4
        encoderaudio(questionario[idnext])
        seletor(questionario[idnext])
    });
}
function perguntaonlyoption(question){
    $("#question").text(`${question.pergunta()}`)
    $("#resposta").html(`<button class="btnresposta" id="ok">${question.option1}</button>`)
    $("#ok").click(function(){
        var idnext = question.nextquestion
        encoderaudio(questionario[idnext])
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
    var cpf = $("#inputcpf");
    cpf.mask('000.000.000-00', {reverse: true});
    $("#inputok").click(function(){
        if (parseInt($("#inputcpf").val().length) <= 14){
            var cpf = $("#inputcpf").val()
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
function perguntainfooption(question){
    $("#question").text(`${question.pergunta()}`)
    $("#resposta").html(``)
    $("#infopessoais").html(`
    <h5>Nome:</h5><h4>${memoria.primeironome}</h4>
    <h5>Sobrenome:</h5><h4>${memoria.segundonome}</h4>
    <h5>CPF:</h5><h4>${memoria.numerocpf}</h4>
    <h5>Password:</h5><h4>${memoria.senha}</h4>
    <button class="btnresposta" id="ok">${question.option1}</button>
    `)
    $("#ok").click(function(){
        $("#infopessoais").html(``)
        var idnext = question.nextquestion
        encoderaudio(questionario[idnext])
        seletor(questionario[idnext])
    });
}
function perguntavideooption(question){
    $("#question").text(`${question.pergunta()}`)
    $("#resposta").html(`<button class="btnresposta" id="ok">${question.option1}</button>`)
    $("#video").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${question.urlvideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    $("#ok").click(function(){
        $("#resposta").html(``)
        $("#video").html(``)
        var idnext = question.nextquestion
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