var memoria = {
    nomerobo: "Jorge"
}
var listapiadas = [
    {
        piada: () => `O que o pato disse para a pata?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "piada",
        resposta: "Vem Quá!",
        nextquestion: 5,
    },
    {
        piada: () => `Qual é a fórmula da água benta?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "piada",
        resposta: "H Deus O!",
        nextquestion: 5,
    },
    {
        piada: () => `Qual a cidade brasileira que não tem táxi?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "piada",
        resposta: "Uberlândia!",
        nextquestion: 5,
    },
    {
        piada: () => `O que o tijolo falou para o outro?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "piada",
        resposta: "Há um ciumento entre nós.",
        nextquestion: 5,
    },
    {
        piada: () => `Porque o Batman colocou o bat-móvel no seguro?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "piada",
        resposta: "Porque ele tem medo que Robin!",
        nextquestion: 5,
    },
    {
        piada: () => `Quem é a vó dos trigos?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "piada",
        resposta: "Avéia!",
        nextquestion: 5,
    },
    {
        piada: () => `Porque o rádio não pode ter filhos?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        exibicao: "piada",
        resposta: "Porque ele é stereo",
        nextquestion: 5,
    },
]
var fatosinteressantes = [
    {
        fato: () => `As três famílias mais ricas do mundo têm mais dinheiro que a riqueza dos 48 países mais pobres do mundo`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Até 2011, a cerveja não era considerada uma bebida alcoólica na Rússia, Ela era classificada como um refresco;`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Nos Estados Unidos existem mais casas sem ninguém morando do que moradores de rua.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `A maioria dos banheiros em Hong Kong utilizam água do mar. Isso é feito para conservar a pouca quantidade de água doce que tem disponível;`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Cerca de 2/3 dos habitantes da Terra nunca viram neve na vida`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=carlos-highquality.voice`,
        nextquestion: 5,
    },
]
    
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
    if (question.exibicao == "piada"){
        perguntapiadaoption(question)
        return 0
    }
    perguntaoption2(question)
}
// FUNCÕES DE CONSTRUÇÃO - EXIBI HTML DE ACORDO COM O TIPO DE INTERAÇÃO
function perguntamultioption(question,piadas){
    $("#question").text(`${question.pergunta()}`)
    $("#resposta").html(`
    <button class="btnresposta" id="piada">${question.option1}</button>
    <button class="btnresposta" id="algoint">${question.option2}</button>
    <button class="btnresposta" id="info">${question.option3}</button>
    <button class="btnresposta" id="videobtn">${question.option4}</button>
    `)
    $("#piada").click(function(){
        var index = Math.floor(Math.random()*(10-0+1)+0);
        var idnext = piadas.nextquestion
        encoderaudiopiadas(questionario[idnext])
        perguntapiadaoption(listapiadas[index])
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
    cpf.mask('000.000.000-00', {reverse: false});
    $("#inputok").click(function(){
        if (parseInt($("#inputcpf").val().length) != 14){
            alert("Digite 11 números!")
            return 0
        }
        var cpf = $("#inputcpf").val()
        var nomechave = question.nomedememoria
        memoria[nomechave] = cpf
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
function perguntapiadaoption(listapiadas){
    $("#question").text(`${listapiadas.piada()}`)
    $("#resposta").html(`<button class="btnresposta" id="ok">Ok</button><button class="revelarresposta" id="ok">Ver resposta</button>`)
    $("#ok").click(function(){
        var idnext = listapiadas.nextquestion
        encoderaudiopiadas(questionario[idnext])
        seletor(questionario[idnext])
    });
}
// FUNÇÕES DE SELEÇÃO
function encoderaudiopiadas(listapiadas){
    var texto = `${listapiadas.piada()}`
    var encoder = encodeURIComponent(texto);
    var audiochave = "text2speech"
    memoria[audiochave] = encoder

}
function encoderaudio(question){
    var texto = `${question.pergunta()}`
    var encoder = encodeURIComponent(texto);
    var audiochave = "text2speech"
    memoria[audiochave] = encoder

}
// READY!  QUANDO A PAGINA ABRE RODA AS SEGUINTES FUNCOES NA ORDEM DADA.
$( document ).ready(function() {
    encoderaudio(questionario[0],listapiadas[0])
    seletor(questionario[0],listapiadas[0])
  });