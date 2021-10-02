var memoria = {
    nomerobo: "Laura"
}
var listapiadas = [
    {
        piada: () => `O que o pato disse para a pata?`,
        audio:`https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        chave: "num",
        exibicao: "piadaoption",
        resposta: "Vem Quá!",
        nextquestion: 5,
    },
    {
        piada: () => `Qual é a fórmula da água benta?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        chave: "num",
        exibicao: "piadaoption",
        resposta: "H Deus O!",
        nextquestion: 5,
    },
    {
        piada: () => `Qual a cidade brasileira que não tem táxi?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        chave: "num",
        exibicao: "piadaoption",
        resposta: "Uberlândia!",
        nextquestion: 5,
    },
    {
        piada: () => `O que o tijolo falou para o outro?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        chave: "num",
        exibicao: "piadaoption",
        resposta: "Há um ciumento entre nós.",
        nextquestion: 5,
    },
    {
        piada: () => `Porque o Batman colocou o bat-móvel no seguro?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        chave: "num",
        exibicao: "piadaoption",
        resposta: "Porque ele tem medo que Robin!",
        nextquestion: 5,
    },
    {
        piada: () => `Quem é a vó dos trigos?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        chave: "num",
        exibicao: "piadaoption",
        resposta: "Avéia!",
        nextquestion: 5,
    },
    {
        piada: () => `Porque o rádio não pode ter filhos?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        chave: "num",
        exibicao: "piadaoption",
        resposta: "Porque ele é stereo",
        nextquestion: 5,
    },
    {
        piada: () => `O que é um pontinho preto no avião?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        chave: "num",
        exibicao: "piadaoption",
        resposta: "Uma aeromosca.",
        nextquestion: 5,
    },
    {
        piada: () => `Sabe o que o rato diz quando se queima?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        chave: "num",
        exibicao: "piadaoption",
        resposta: "Ai! eu Mickey mei!",
        nextquestion: 5,
    },
    {
        piada: () => `Qual é o ator que ta achando esse ano muito ruim!`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        chave: "num",
        exibicao: "piadaoption",
        resposta: "Keanu reeves",
        nextquestion: 5,
    },
    {
        piada: () => `Qual é o Rei dos queijos?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        chave: "num",
        exibicao: "piadaoption",
        resposta: "O Requeijão",
        nextquestion: 5,
    },
]
var fatosinteressantes = [
    {
        fato: () => `As três famílias mais ricas do mundo têm mais dinheiro que a riqueza dos 48 países mais pobres do mundo.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Até 2011, a cerveja não era considerada uma bebida alcoólica na Rússia, Ela era classificada como um refresco.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Nos Estados Unidos existem mais casas sem ninguém morando do que moradores de rua.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `A maioria dos banheiros em Hong Kong utilizam água do mar. Isso é feito para conservar a pouca quantidade de água doce que tem disponível.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Cerca de 78% dos habitantes da Terra nunca viram neve na vida.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Em média, cada pessoa perde 4kg de pele morta em um ano.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Charles Osborne teve uma crise de soluços que durou, nada mais nada menos que, 69 anos. Começou em 1922, quando pesava um cerdo para sacrificá-lo e só parou quando ele já tinha 97 anos.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `O maior pênis registrado até hoje é de Jonah Falcon. Este, aliás, é um estadunidense de Nova York (EUA), com 34,29 cm.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `30% do sangue bombeado pelo coração vai direto para o cérebro.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `A decomposição do corpo humano começa apenas 4 minutos depois da morte.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Beijar um bebê na orelha pode deixá-lo surdo.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `É mais provável que uma pessoa morra com um coco caindo sobre a sua cabeça do que por um ataque de tubarão.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Fredric John Bauer foi o criador da lata das batatas Pringles. Quando ele morreu em 2008 suas cinzas foram colocadas em uma delas.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Em Nova York (EUA) é proibido vender uma casa mal assombrada sem avisar ao comprador.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },{
        fato: () => `No Japão você pode comprar um sorvete com sabor de enguia.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Usain Bolt exige que todas as fotografias tiradas dele sejam realizadas na Jamaica, seu país de origem. Assim ele contribui economicamente para o seu país.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Leonardo Di Caprio recebeu esse nome porque enquanto sua mãe observava um quadro de Leonardo Da Vinci, na Itália, ele deu um chute em sua barriga.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Em Las Vegas você pode dirigir uma escavadora dentro de uma caixa de areia gigante. A atração faz parte de um parque temático da cidade.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `O único planeta do Sistema Solar que não tem nome de um deus, é o nosso.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Um Boeing 747 levaria 120 bilhões de anos para cruzar a Via Láctea.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Cientistas calcularam que se fosse escavado um túnel através do centro da Terra, e uma pessoa pulasse ali dentro, demoraria 42 minutos e 12 segundos para atravessá-lo por completo.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `De toda a vida animal que se desenvolveu no planeta, aproximadamente 80% têm 6 ou mais pernas.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `A pele de uma rã dourada venenosa possui toxinas suficientes para matar 100 pessoas.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Os únicos mamíferos capazes de voar são os morcegos.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `A água-viva Turritopsis Nutricula é o único organismo na Terra que a Ciência reconhece como biologicamente imortal.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Originalmente, Feng shui era a arte de escolher um local apropriado para sepulturas.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `A probabilidade de que o copo de água que você está bebendo contenha uma molécula de água que já tenha passado por um dinossauro é de cerca de 100%.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
    {
        fato: () => `Universidade de Oxford é mais antiga que o Império Asteca.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}E&voice=adriana-highquality.voice`,
        nextquestion: 5,
    },
]
    
var questionario = [     
    {
        pergunta: () => `Oi! Tudo bem? Eu sou a ${memoria.nomerobo}.\n Qual é o seu Nome?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        exibicao: "input",
        nomedememoria: "primeironome",
        nextquestion: 1,
    },
    {
        pergunta: () => `Tudo bem, ${memoria.primeironome}?\n E qual é o seu sobrenome?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        exibicao: "input",
        nomedememoria: "segundonome",
        nextquestion: 2,
        
    },
    {
        pergunta: () => `Legal ${memoria.primeironome} ${memoria.segundonome}! qual é o seu CPF?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        exibicao: "inputcpf",
        nomedememoria: "numerocpf",
        nextquestion: 3,
    },
    {
        pergunta: () => `Digite uma senha.`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        exibicao: "inputpassword",
        nomedememoria: "senha",
        nextquestion: 4,
    },
    {
        pergunta: () =>`Vou te chamar só de ${memoria.primeironome}! Ok?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        exibicao: "onlyoption",
        option1: "Ok",
        nomedememoria: "ignorarsegundonome",
        nextquestion: 5,
    },
    
    {
        pergunta: () => `O que você quer fazer, ${memoria.primeironome}?`,
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        exibicao: "multioption",
        option1: "Ouvir Piada",
        option2: "Algo Interessante",
        option3: "Ver suas informações",
        option4: "Assistir um Video",
        option5: "Texto em Fala.",
        option6: "Uma opnião.",
        
        nextquestion3: 6,
        nextquestion4: 7,
    },
    {
        pergunta: () => "Essas são suas informações!",
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        exibicao: "infooption",
        option1: "Ok",
        nextquestion: 5,
    },
    {
        pergunta: () => "Esse video é muito Legal.",
        audio: () => `https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice`,
        exibicao: "video",
        option1: "Voltar",
        nextquestion: 5,
        urlvideo: "XqQ_IfaojFQ",
    },
]

// FUNÇÃO DE ANALISE DE TIPO DE INTERAÇÃO
function seletor(question){
    if (question.exibicao == "piadaoption"){
        perguntapiadaoption()
        return 0
    }
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
    alert(question)
    perguntapiadaoption(question)
}
// FUNCÕES DE CONSTRUÇÃO - EXIBI HTML DE ACORDO COM O TIPO DE INTERAÇÃO
function perguntamultioption(question){
    $("#question").text(`${question.pergunta()}`)
    $("#resposta").html(`
    <button class="btnresposta" id="piada">${question.option1}</button>
    <button class="btnresposta" id="algoint">${question.option2}</button>
    <button class="btnresposta" id="info">${question.option3}</button>
    <button class="btnresposta" id="videobtn">${question.option4}</button>
    <button class="btnresposta" id="text2speechbtn">${question.option5}</button>
    <button class="btnresposta" id="opiniaobtn">${question.option6}</button>
    `)
    $("#piada").click(function(){
        perguntapiadaoption()
    });
    $("#algoint").click(function(){
        perguntafatooption()
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
    $("#text2speechbtn").click(function(){
        opcaotext2apeech()
    });
    $("#opiniaobtn").click(function(){
        opcaoopiniao()
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
    $("#resposta").html(`<input type="text" id="inputnome" placeholder="Digite aqui..." autofocus required><button id="inputok">>></button>`)
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
    $("#resposta").html(`<input type="password" id="inputpassword" placeholder="Digite sua senha..." autofocus required><button id="inputok">>></button>`)
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
    $("#resposta").html(`<input type="text" id="inputcpf" pattern="[0-9]{11}" placeholder="Insira seu CPF..." autofocus><button id="inputok">>></button>`)
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
function perguntapiadaoption(){
    var max = listapiadas.length
    var index = Math.floor(Math.random()*(max-0+1)+0);
    var nomechave = listapiadas.chave
    memoria[nomechave] = index
    encoderaudiopiadas(listapiadas[index])
    $("#question").text(listapiadas[index].piada)
    $("#resposta").html(`<button class="btnresposta" id="ok">Ok</button><button class="btnresposta" id="revelarresposta">Ver resposta</button><button class="btnresposta" id="outra">Outra piada</button>`)
    $("#ok").click(function(){
        $("#respostapiada").html(``)
        encoderaudio(questionario[5])
        seletor(questionario[5])
    });
    $("#revelarresposta").click(function(){
        $("#respostapiada").html(`R.: ${listapiadas[index].resposta}`)
        encoderaudiopiadaresposta(listapiadas[index])
    });
    $("#outra").click(function(){
        $("#respostapiada").html(``)
        perguntapiadaoption()
    });
}
function perguntafatooption(){
    var max = fatosinteressantes.length
    var index = Math.floor(Math.random()*(max-0+1)+0);
    memoria.num = index
    encoderaudiofatos(fatosinteressantes[index])
    $("#question").text(fatosinteressantes[index].fato)
    $("#resposta").html(`<button class="btnresposta" id="ok">Ok</button><button class="btnresposta" id="outro">Outro fato</button>`)
    $("#ok").click(function(){
        encoderaudio(questionario[5])
        seletor(questionario[5])
    });
    $("#outro").click(function(){
        perguntafatooption()
    });
}
function opcaotext2apeech(){
    $("#question").text(`Digite o que gostaria de escutar.`)
    $("#resposta").html(`<input type="text" id="inputnome" placeholder="Digite aqui..."><button id="inputok">>></button><button class="btnresposta" id="voltar">Voltar</button>`)
    encodertexto2audio($("#question").text())
    $("#audio").html(`<audio src="https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice" hidden="true" controls autoplay></audio>`)
    
    $("#inputok").click(function(){
        encodertexto2audio($("#inputnome").val())
        $("#audio").html(`<audio src="https://vaas108.cpqd.com.br/rest/v2/synthesize?text=${memoria.text2speech}&voice=adriana-highquality.voice" hidden="true" controls autoplay></audio>`)
    });
    $("#voltar").click(function(){
        encoderaudio(questionario[5])
        seletor(questionario[5])
    });
}
function opcaoopiniao(){
    // formar frases a partir de randon de array
    var parte1 = ['Porque ','Quando ','Sempre ', 'Eu e '];
    var parte2 = ['Jesus ','Hittler ','Moises ', 'Inês Brasil '];
    var parte3 = ['come ','mata ','ressucita ', 'abençoa '];
    var parte4 = ['Tiririca','Oprah','Obama', 'Xuxa'];
    var parte5 = ['.','!', '?','.'];
    
    const random = Math.floor(Math.random() * parte1.length)

    var frase = (parte1[random]+parte2[random]+parte3[random]+parte4[random]+parte5[random])

    $("#question").text(frase)
    $("#resposta").html(`<button class="btnresposta" id="ok">Ok</button><button class="btnresposta" id="outro">Outra</button>`)
    $("#ok").click(function(){
        encoderaudio(questionario[5])
        seletor(questionario[5])
    });
    $("#outro").click(function(){
        opcaoopiniao()
    });

    
}

// FUNÇÕES DE SELEÇÃO
function encoderaudiofatos(lista){
    var texto = `${lista.fato()}`
    var encoder = encodeURIComponent(texto);
    var audiochave = "text2speech"
    memoria[audiochave] = encoder
    $("#audio").html(`<audio src="${lista.audio()}" hidden="true" controls autoplay></audio>`)

}
function encoderaudiopiadaresposta(lista){
    var texto = `${lista.resposta}`
    var encoder = encodeURIComponent(texto);
    var audiochave = "text2speech"
    memoria[audiochave] = encoder
    $("#audio").html(`<audio src="${lista.audio()}" hidden="true" controls autoplay></audio>`)

}
function encoderaudiopiadas(lista){
    var texto = `${lista.piada()}`
    var encoder = encodeURIComponent(texto);
    var audiochave = "text2speech"
    memoria[audiochave] = encoder
    $("#audio").html(`<audio src="${lista.audio()}" hidden="true" controls autoplay></audio>`)

}
function encodertexto2audio(texto){
    var encoder = encodeURIComponent(texto);
    var audiochave = "text2speech"
    memoria[audiochave] = encoder
    $("#audio").html(`<audio src="${listapiadas.audio}" hidden="true" controls autoplay></audio>`)


}

function encoderaudio(question){
    var texto = `${question.pergunta()}`
    var encoder = encodeURIComponent(texto);
    var audiochave = "text2speech"
    memoria[audiochave] = encoder
    $("#audio").html(`<audio src="${question.audio()}" hidden="true" controls autoplay></audio>`)


}
// READY!  QUANDO A PAGINA ABRE RODA AS SEGUINTES FUNCOES NA ORDEM DADA.
$( document ).ready(function() {
    seletor(questionario[0])
    encoderaudio(questionario[0])
  });