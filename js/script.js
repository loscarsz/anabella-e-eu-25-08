/* =========================================================
   CONFIGURAÇÕES
========================================================= */

// Data oficial do início da história
// 15 de junho de 2026
const dataInicio = new Date(2026, 5, 15, 0, 0, 0);


/* =========================================================
   ENTRAR NO NOSSO MUNDO
========================================================= */

const botaoEntrar = document.getElementById("entrar");
const nossoAmor = document.getElementById("nosso-amor");

if (botaoEntrar && nossoAmor) {
    botaoEntrar.addEventListener("click", () => {
        nossoAmor.scrollIntoView({
            behavior: "smooth"
        });
    });
}


/* =========================================================
   CORAÇÕES FLUTUANTES
========================================================= */

const heartsContainer = document.querySelector(".hearts");

function criarCoracao() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    const simbolos = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💓",
        "💞"
    ];

    heart.innerHTML =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    const duracao =
        6 + Math.random() * 7;

    heart.style.animationDuration =
        duracao + "s";

    heart.style.animationDelay =
        Math.random() * 2 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, (duracao + 3) * 1000);
}

setInterval(criarCoracao, 900);


/* =========================================================
   CONTADOR DO AMOR
========================================================= */

function atualizarContador() {

    const agora = new Date();

    let diferenca =
        agora.getTime() - dataInicio.getTime();

    if (diferenca < 0) {
        diferenca = 0;
    }

    const totalSegundos =
        Math.floor(diferenca / 1000);

    const dias =
        Math.floor(totalSegundos / 86400);

    const horas =
        Math.floor(
            (totalSegundos % 86400) / 3600
        );

    const minutos =
        Math.floor(
            (totalSegundos % 3600) / 60
        );

    const segundos =
        totalSegundos % 60;


    const elementoDias =
        document.getElementById("dias");

    const elementoHoras =
        document.getElementById("horas");

    const elementoMinutos =
        document.getElementById("minutos");

    const elementoSegundos =
        document.getElementById("segundos");


    if (elementoDias) {
        elementoDias.textContent = dias;
    }

    if (elementoHoras) {
        elementoHoras.textContent =
            String(horas).padStart(2, "0");
    }

    if (elementoMinutos) {
        elementoMinutos.textContent =
            String(minutos).padStart(2, "0");
    }

    if (elementoSegundos) {
        elementoSegundos.textContent =
            String(segundos).padStart(2, "0");
    }


    const diasConhecidos =
        document.getElementById("diasConhecidos");

    if (diasConhecidos) {
        diasConhecidos.textContent = dias;
    }
}

atualizarContador();

setInterval(
    atualizarContador,
    1000
);


/* =========================================================
   CALENDÁRIO
========================================================= */

const mesAnterior =
    document.getElementById("mesAnterior");

const mesProximo =
    document.getElementById("mesProximo");

const mesAtual =
    document.getElementById("mesAtual");

const diasCalendario =
    document.getElementById("diasCalendario");


let calendarioData =
    new Date();


const nomesMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];


function renderizarCalendario() {

    if (!diasCalendario || !mesAtual) {
        return;
    }

    diasCalendario.innerHTML = "";


    const ano =
        calendarioData.getFullYear();

    const mes =
        calendarioData.getMonth();


    mesAtual.textContent =
        `${nomesMeses[mes]} ${ano}`;


    const primeiroDia =
        new Date(
            ano,
            mes,
            1
        ).getDay();


    const ultimoDia =
        new Date(
            ano,
            mes + 1,
            0
        ).getDate();


    // Espaços antes do primeiro dia
    for (
        let i = 0;
        i < primeiroDia;
        i++
    ) {

        const vazio =
            document.createElement("div");

        vazio.className =
            "calendar-day empty";

        diasCalendario.appendChild(vazio);
    }


    const hoje =
        new Date();


    for (
        let dia = 1;
        dia <= ultimoDia;
        dia++
    ) {

        const elemento =
            document.createElement("div");

        elemento.className =
            "calendar-day";

        elemento.textContent =
            dia;


        // Data de início
        if (
            dia === 15 &&
            mes === 5 &&
            ano === 2026
        ) {

            elemento.classList.add("start");

            elemento.title =
                "O dia em que nossa história começou ❤️";
        }


        // Hoje
        if (
            dia === hoje.getDate() &&
            mes === hoje.getMonth() &&
            ano === hoje.getFullYear()
        ) {

            elemento.classList.add("today");

            elemento.title =
                "Hoje ✨";
        }


        diasCalendario.appendChild(
            elemento
        );
    }
}


if (mesAnterior) {

    mesAnterior.addEventListener(
        "click",
        () => {

            calendarioData.setMonth(
                calendarioData.getMonth() - 1
            );

            renderizarCalendario();
        }
    );
}


if (mesProximo) {

    mesProximo.addEventListener(
        "click",
        () => {

            calendarioData.setMonth(
                calendarioData.getMonth() + 1
            );

            renderizarCalendario();
        }
    );
}


renderizarCalendario();


/* =========================================================
   ROLETA DO AMOR
========================================================= */

const roleta =
    document.getElementById("roletaWheel");

const botaoGirar =
    document.getElementById("girar");

const resultado =
    document.getElementById("resultado");


const premios = [

    "Me dá um beijo agora. 💋",

    "Me manda uma foto sua fazendo carinha de brava. 😠❤️",

    "Fala 3 coisas que você ama em mim. 🥰",

    "Me dá um abraço bem apertado. 🤗",

    "Escolhe uma música que lembre nós dois. 🎵",

    "Me manda um áudio dizendo que me ama. ❤️",

    "Hoje você escolhe o que vamos fazer juntos. 💕",

    "Me dá um beijo demorado. 💋",

    "Conta uma lembrança nossa que você nunca esqueceu. 🥹",

    "Faz uma declaração improvisada para mim. 💗",

    "Me chama pelo apelido mais fofo que você conseguir. 🥰",

    "Você ganhou carinho extra hoje. ❤️",

    "Me manda 'eu te amo' sem usar nenhuma palavra. 👀❤️",

    "Vamos criar uma memória nova hoje. ✨",

    "Queria te dedar igual vc põe o dedo nessa... 👀😂"

];


let girando =
    false;

let rotacaoAtual =
    0;


function girarRoleta() {

    if (!roleta || !resultado || girando) {
        return;
    }

    girando = true;

    resultado.textContent =
        "Girando... ❤️";


    const voltas =
        5 + Math.floor(
            Math.random() * 4
        );


    const grauExtra =
        Math.floor(
            Math.random() * 360
        );


    rotacaoAtual +=
        voltas * 360 +
        grauExtra;


    roleta.style.transform =
        `rotate(${rotacaoAtual}deg)`;


    setTimeout(() => {

        const indice =
            Math.floor(
                Math.random() *
                premios.length
            );

        resultado.textContent =
            premios[indice];

        girando = false;

    }, 4100);
}


if (botaoGirar) {

    botaoGirar.addEventListener(
        "click",
        girarRoleta
    );
}


/* =========================================================
   CARTINHAS
========================================================= */

const cartas =
    document.querySelectorAll(".carta");

const modal =
    document.getElementById("surprise");

const tituloSurpresa =
    document.getElementById("surprise-title");

const textoSurpresa =
    document.getElementById("surprise-text");

const fecharSurpresa =
    document.querySelector(".close-surprise");


const mensagens = [

    {
        titulo: "Quando estiver triste... 💗",

        texto:
            "Meu amor, se você abriu isso porque está triste, lembra de uma coisa: você não precisa passar por tudo sozinha. Eu estou aqui. Mesmo quando eu não puder estar do seu lado fisicamente, quero que você lembre que existe alguém torcendo por você, pensando em você e querendo ver seu sorriso novamente. Respira, calma... vai ficar tudo bem. Eu te amo. ❤️"
    },

    {
        titulo: "Quando sentir saudade... 🥰",

        texto:
            "Se a saudade apertou, fecha os olhos por alguns segundos e lembra dos nossos momentos. Lembra das nossas conversas, das nossas brincadeiras e de tudo que ainda vamos viver. A distância pode fazer sentir saudade, mas nunca muda o que existe entre nós. Em breve teremos novos momentos para guardar. Eu te amo, Bella. 💗"
    },

    {
        titulo: "Quando quiser sorrir... 💕",

        texto:
            "Se você abriu isso querendo sorrir, então saiba que provavelmente eu já estou imaginando alguma besteira para fazer você rir. 😂 Você é uma das pessoas que eu mais quero ver feliz. Então abre esse sorriso lindo e lembra: existe um idiota aqui que te ama muito e que escolheria você de novo. Sempre. ❤️"
    }

];


function abrirCarta(indice) {

    if (
        !modal ||
        !tituloSurpresa ||
        !textoSurpresa
    ) {
        return;
    }


    const carta =
        mensagens[indice];

    if (!carta) {
        return;
    }


    tituloSurpresa.textContent =
        carta.titulo;

    textoSurpresa.textContent =
        carta.texto;


    modal.classList.add(
        "active"
    );

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";
}


cartas.forEach(
    (carta) => {

        carta.addEventListener(
            "click",
            () => {

                const indice =
                    Number(
                        carta.dataset.index
                    );

                abrirCarta(indice);
            }
        );
    }
);


function fecharModal() {

    if (!modal) {
        return;
    }

    modal.classList.remove(
        "active"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";
}


if (fecharSurpresa) {

    fecharSurpresa.addEventListener(
        "click",
        fecharModal
    );
}


if (modal) {

    modal.addEventListener(
        "click",
        (evento) => {

            if (
                evento.target === modal
            ) {

                fecharModal();
            }
        }
    );
}


document.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key === "Escape"
        ) {

            fecharModal();
        }
    }
);


/* =========================================================
   ANIMAÇÃO AO ENTRAR NA TELA
========================================================= */

const elementosAnimados =
    document.querySelectorAll(
        ".photo-card, .counter-box, .timeline-item, .letter, .carta, .calendar, .roulette-container"
    );


const observer =
    new IntersectionObserver(
        (entradas) => {

            entradas.forEach(
                (entrada) => {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target.style.opacity = "1";
                        entrada.target.style.transform = "translateY(0)";

                        observer.unobserve(
                            entrada.target
                        );
                    }
                }
            );

        },
        {
            threshold: 0.12
        }
    );


elementosAnimados.forEach(
    (elemento) => {

        elemento.style.opacity = "0";
        elemento.style.transform =
            "translateY(30px)";
        elemento.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(
            elemento
        );
    }
);


/* =========================================================
   EFEITO DE CLIQUE NOS BOTÕES
========================================================= */

document.querySelectorAll(
    "button"
).forEach(
    (botao) => {

        botao.addEventListener(
            "mousedown",
            () => {

                botao.style.transform =
                    "scale(0.96)";
            }
        );

        botao.addEventListener(
            "mouseup",
            () => {

                botao.style.transform =
                    "";
            }
        );

        botao.addEventListener(
            "mouseleave",
            () => {

                botao.style.transform =
                    "";
            }
        );
    }
);


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "❤️ Site do amor carregado com sucesso."
);

console.log(
    "Carlos & Anabella — para sempre. ♾️"
);
