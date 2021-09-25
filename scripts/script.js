var questionario = [
    {
        pergunta: "Oi Humano, Tudo bem? Qual é o seu nome?",
        audio: "https://vaas108.cpqd.com.br/rest/v2/synthesize?text=Oi%20Humano!%20Tudo%20bem%3F%20Qual%20%C3%A9%20o%20seu%20nome%3F&voice=carlos-highquality.voice",
        option1: "Pedro",
        option2: "Pedro, eu sei que é você!",
        nextquestion1: 1,
        nextquestion2: 1,
    },
    {
        pergunta: "Tudo bem, pedro?",
        audio: "https://vaas108.cpqd.com.br/rest/v2/synthesize?text=Oi%20Pedro!%20Tudo%20bem%3F&voice=carlos-highquality.voice",
        option1: "Sim",
        option2: "Não",
        option3: "Talvez",
        nextquestion1: 3,
        nextquestion2: 2,
        nextquestion3: 4,
    },
    {
        pergunta: "Vai ficar tudo bem! Eu prometo!",
        audio: "https://vaas108.cpqd.com.br/rest/v2/synthesize?text=Vai%20ficar%20tudo%20bem!%20Eu%20prometo!&voice=carlos-highquality.voice",
        option1: "Vai sim",
        option2: "Acho que não!",
        nextquestion1: 6,
        nextquestion2: 4,
    },
    {
        pergunta: "Legal! Voce quer rir?",
        audio: "https://vaas108.cpqd.com.br/rest/v2/synthesize?text=Legal!%20Voc%C3%AA%20qué%20rir%3F&voice=carlos-highquality.voice",
        option1: "Sim. quero.",
        option2: "Não tô afim!",
        nextquestion1: 6,
        nextquestion2: 5,
    },
    {
        pergunta: "Vai melhorar Pedrão! Quer rir?",
        audio: "https://vaas108.cpqd.com.br/rest/v2/synthesize?text=Vai%20melhorar%2C%20Pedr%C3%A3o!%0Aqu%C3%A9%20rir%3F%3F&voice=carlos-highquality.voice",
        option1: "Sim. quero.",
        option2: "Não tô afim!",
        nextquestion1: 6,
        nextquestion2: 5,
    },
    {
        pergunta: "hey cadê meu guerreiro? Deixa eu te conta uma piada?",
        audio: "https://vaas108.cpqd.com.br/rest/v2/synthesize?text=%3Cprosody%20rate%3D%2280%25%22%3E%3Cprosody%20pitch%3D%22%2B40%25%22%3E%20Hey!%20%3C%2Fprosody%3E%3C%2Fprosody%3E%20aonde%20ta%20meu%20guerreiro%3F%3Cbreak%20time%3D%222s%22%2F%3E%20Deixa%20eu%20te%20contar%20uma%20piada!%0A&voice=carlos-highquality.voice",
        option1: "Pode ser",
        option2: "Quero não!",
        nextquestion1: 7,
        nextquestion2: 2,
    },
    {
        pergunta: "Qual é o parente que nunca recusa um convite?",
        audio: "https://vaas108.cpqd.com.br/rest/v2/synthesize?text=Qual%20%C3%A9%20o%20parente%20que%20nunca%2C%20recusa%20um%20convite.%0A%3Cbreak%20time%3D%225s%22%2F%3E%0AO%20V%C3%B4.%0A%3Cbreak%20time%3D%222s%22%2F%3E%0A%3Ceffect%20id%3D%22riso_3%22%2F%3E%3Cbreak%20time%3D%22400ms%22%2F%3E%C3%89%20boa%20essa%20piada%2C%20n%C3%A9%3F&voice=carlos-highquality.voice",
        option1: "Outra",
        option2: "Péssima",
        nextquestion1: 6,
        nextquestion2: 5,
    },
    {
        pergunta: "Voce quer ouvir uma piada ou um fato interessante?",
        audio: "https://vaas108.cpqd.com.br/rest/v2/synthesize?text=Voce%20quer%20ouvir%20uma%20piada%2C%20ou%20um%20fato%20interessante.&voice=carlos-highquality.voice",
        option1: "Piada",
        option2: "Fato interessante",
        nextquestion1: 6,
        nextquestion2: 8,
    },
    {
        pergunta: "Não sei! Vou cantar!",
        audio: "https://vaas108.cpqd.com.br/rest/v2/synthesize?text=N%C3%A3o%20sei!Vou%20cantar!%3Ceffect%20id%3D%22limpar_garganta_1%22%2F%3E%3Ceffect%20id%3D%22limpar_garganta_2%22%2F%3E%20calma%2C%3Ceffect%20id%3D%22limpar_garganta_3%22%2F%3E%20%3Ceffect%20id%3D%22canto_1%22%2F%3E%20%3Cbreak%20time%3D%22300ms%22%2F%3E%20%3Ceffect%20id%3D%22riso_3%22%2F%3ECanto%20muito%20mal!&voice=carlos-highquality.voice",
        option1: "Início",
        option2: "Tchau",
        nextquestion1: 0,
        nextquestion2: 0,
    },
// dever de casa
    {
        pergunta:"Torce pra que time?",
        options: [
            {
                texto:"Flamengo",
                next: 1,

            },
            {
                texto:"Vasco",
                next: 2,

            },
            {
                texto:"Fluminense",
                next: 0,

            },
            {
                texto:"São Paulo",
                next: 3,

            }
        ]
    },
]

function exibirpergunta(question){
    $("#question").text(`${question.pergunta}`)
    $("#resposta").html(`<button class="btnresposta" id="sim">${question.option1}</button><button class="btnresposta" id="nao">${question.option2}</button><audio hidden=True controls="" autoplay="" name="media"><source src="${question.audio}" type="audio/x-wav"></audio>`)
    $("#sim").click(function(){
        var idnext = question.nextquestion1
        exibirpergunta(questionario[idnext])
    });
    $("#nao").click(function(){
        var idnext = question.nextquestion2
        exibirpergunta(questionario[idnext])
    });
}

$( document ).ready(function() {
    exibirpergunta(questionario[0])
  });