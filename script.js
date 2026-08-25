/* =========================================================
   CONFIGURAÇÕES
========================================================= */

// Dia em que a história começou
const dataInicio = new Date(
    2026,
    5,      // Junho = 5
    15,
    0,
    0,
    0
);


/* =========================================================
   BOTÃO "ENTRAR NO NOSSO MUNDO"
========================================================= */

const botaoEntrar =
    document.getElementById("entrar");

const nossoAmor =
    document.getElementById("nosso-amor");


if (botaoEntrar && nossoAmor) {

    botaoEntrar.addEventListener(
        "click",
        () => {

            nossoAmor.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   CORAÇÕES FLUTUANTES
========================================================= */

const hearts =
    document.querySelector(".hearts");


function criarCoracao() {

    if (!hearts) return;

    const coracao =
        document.createElement("div");

    coracao.className =
        "heart";


    const simbolos = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💓",
        "💞"
    ];


    coracao.textContent =
        simbolos[
            Math.floor(
                Math.random() *
                simbolos.length
            )
        ];


    coracao.style.left =
        Math.random() * 100 + "%";


    coracao.style.fontSize =
        (12 + Math.random() * 20) + "px";


    const duracao =
        5 + Math.random() * 5;


    coracao.style.animationDuration =
        duracao + "s";


    hearts.appendChild(
        coracao
    );


    setTimeout(
        () => {
            coracao.remove();
        },
        duracao * 1000
    );
}


setInterval(
    criarCoracao,
    800
);


/* =========================================================
   CONTADOR
========================================================= */

function atualizarContador() {

    const agora =
        new Date();


    let diferenca =
        agora.getTime() -
        dataInicio.getTime();


    // Evita números negativos
    if (diferenca < 0) {
        diferenca = 0;
    }


    const segundosTotais =
        Math.floor(
            diferenca / 1000
        );


    const dias =
        Math.floor(
            segundosTotais / 86400
        );


    const horas =
        Math.floor(
            (segundosTotais % 86400) /
            3600
        );


    const minutos =
        Math.floor(
            (segundosTotais % 3600) /
            60
        );


    const segundos =
        segundosTotais % 60;


    const elementoDias =
        document.getElementById(
            "dias"
        );

    const elementoHoras =
        document.getElementById(
            "horas"
        );

    const elementoMinutos =
        document.getElementById(
            "minutos"
        );

    const elementoSegundos =
        document.getElementById(
            "segundos"
        );


    if (elementoDias) {

        elementoDias.textContent =
            dias;

    }


    if (elementoHoras) {

        elementoHoras.textContent =
            String(horas).padStart(
                2,
                "0"
            );

    }


    if (elementoMinutos) {

        elementoMinutos.textContent =
            String(minutos).padStart(
                2,
                "0"
            );

    }


    if (elementoSegundos) {

        elementoSegundos.textContent =
            String(segundos).padStart(
                2,
                "0"
            );

    }


    const diasConhecidos =
        document.getElementById(
            "diasConhecidos"
        );


    if (diasConhecidos) {

        diasConhecidos.textContent =
            dias;

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

const calendarioGrid =
    document.getElementById(
        "diasCalendario"
    );

const tituloMes =
    document.getElementById(
        "mesAtual"
    );

const botaoMesAnterior =
    document.getElementById(
        "mesAnterior"
    );

const botaoMesProximo =
    document.getElementById(
        "mesProximo"
    );


let dataCalendario =
    new Date();


const meses = [
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


function criarCalendario() {

    if (
        !calendarioGrid ||
        !tituloMes
    ) {
        return;
    }


    calendarioGrid.innerHTML =
        "";


    const ano =
        dataCalendario.getFullYear();


    const mes =
        dataCalendario.getMonth();


    tituloMes.textContent =
        `${meses[mes]} ${ano}`;


    const primeiroDia =
        new Date(
            ano,
            mes,
            1
        ).getDay();


    const quantidadeDias =
        new Date(
            ano,
            mes + 1,
            0
        ).getDate();


    // Dias vazios antes do dia 1
    for (
        let i = 0;
        i < primeiroDia;
        i++
    ) {

        const vazio =
            document.createElement(
                "div"
            );

        vazio.className =
            "calendar-day empty";

        calendarioGrid.appendChild(
            vazio
        );

    }


    const hoje =
        new Date();


    for (
        let dia = 1;
        dia <= quantidadeDias;
        dia++
    ) {

        const elemento =
            document.createElement(
                "div"
            );


        elemento.className =
            "calendar-day";


        elemento.textContent =
            dia;


        // Dia em que começou
        if (
            dia === 15 &&
            mes === 5 &&
            ano === 2026
        ) {

            elemento.classList.add(
                "start"
            );

            elemento.title =
                "15 de junho de 2026 ❤️";

        }


        // Dia atual
        if (
            dia === hoje.getDate() &&
            mes === hoje.getMonth() &&
            ano === hoje.getFullYear()
        ) {

            elemento.classList.add(
                "today"
            );

            elemento.title =
                "Hoje ✨";

        }


        calendarioGrid.appendChild(
            elemento
        );

    }

}


if (botaoMesAnterior) {

    botaoMesAnterior.addEventListener(
        "click",
        () => {

            dataCalendario.setMonth(
                dataCalendario.getMonth() - 1
            );

            criarCalendario();

        }
    );

}


if (botaoMesProximo) {

    botaoMesProximo.addEventListener(
        "click",
        () => {

            dataCalendario.setMonth(
                dataCalendario.getMonth() + 1
            );

            criarCalendario();

        }
    );

}


criarCalendario();


/* =========================================================
   ROLETA
========================================================= */

const roleta =
    document.getElementById(
        "roletaWheel"
    );

const botaoRoleta =
    document.getElementById(
        "girar"
    );

const resultado =
    document.getElementById(
        "resultado"
    );


const resultadosRoleta = [

    "Me dá um beijo agora. 💋",

    "Me dá um abraço bem apertado. 🤗❤️",

    "Fala 3 coisas que você ama em mim. 🥰",

    "Escolhe uma música que lembre nós dois. 🎵",

    "Me manda um áudio dizendo que me ama. ❤️",

    "Hoje você escolhe o que vamos fazer juntos. 💕",

    "Me conta uma lembrança nossa que você nunca esqueceu. 🥹",

    "Faz uma declaração improvisada para mim. 💗",

    "Me manda uma foto sua fazendo carinha de brava. 😂",

    "Você ganhou carinho extra hoje. ❤️",

    "Me chama pelo apelido mais fofo que você conseguir. 🥰",

    "Me dá um beijo demorado. 💋",

    "Vamos criar uma memória nova hoje. ✨",

    "Queria te dedar igual vc põe o dedo nessa... 👀😂"

];


let rotacao =
    0;

let girando =
    false;


function girarRoleta() {

    if (
        !roleta ||
        !resultado ||
        girando
    ) {
        return;
    }


    girando = true;


    resultado.textContent =
        "Girando... ❤️";


    const voltas =
        5 +
        Math.floor(
            Math.random() * 4
        );


    const grau =
        Math.floor(
            Math.random() * 360
        );


    rotacao +=
        voltas * 360 +
        grau;


    roleta.style.transform =
        `rotate(${rotacao}deg)`;


    setTimeout(
        () => {

            const indice =
                Math.floor(
                    Math.random() *
                    resultadosRoleta.length
                );


            resultado.textContent =
                resultadosRoleta[
                    indice
                ];


            girando = false;

        },
        4100
    );

}


if (botaoRoleta) {

    botaoRoleta.addEventListener(
        "click",
        girarRoleta
    );

}


/* =========================================================
   CARTINHAS
========================================================= */

const cartas =
    document.querySelectorAll(
        ".carta"
    );


const modal =
    document.getElementById(
        "surprise"
    );


const tituloModal =
    document.getElementById(
        "surprise-title"
    );


const textoModal =
    document.getElementById(
        "surprise-text"
    );


const botaoFechar =
    document.querySelector(
        ".close-surprise"
    );


const mensagens = [

    {
        titulo:
            "Quando estiver triste... 💗",

        texto:
            "Meu amor, se você abriu essa carta porque está triste, lembra que você não precisa enfrentar tudo sozinha. Eu estou aqui para você, nos momentos bons e também nos difíceis. Respira, fica calma e lembra que eu te amo muito. ❤️"
    },

    {
        titulo:
            "Quando sentir saudade... 🥰",

        texto:
            "Se a saudade apertou, lembra de todos os nossos momentos. Das nossas conversas, das nossas brincadeiras, dos abraços e de tudo aquilo que ainda vamos viver. A saudade só existe porque existe alguém muito especial para sentir falta. Eu te amo, Bella. 💗"
    },

    {
        titulo:
            "Quando quiser sorrir... 💕",

        texto:
            "Se você abriu essa carta querendo sorrir, então lembra que existe um idiota aqui que provavelmente está pensando em alguma besteira para fazer você rir. 😂 Quero sempre ver esse seu sorriso lindo. Eu te amo muito. ❤️"
    }

];


function abrirCarta(indice) {

    if (
        !modal ||
        !tituloModal ||
        !textoModal
    ) {
        return;
    }


    const mensagem =
        mensagens[indice];


    if (!mensagem) {
        return;
    }


    tituloModal.textContent =
        mensagem.titulo;


    textoModal.textContent =
        mensagem.texto;


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


                abrirCarta(
                    indice
                );

            }
        );

    }
);


/* =========================================================
   FECHAR MODAL
========================================================= */

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


if (botaoFechar) {

    botaoFechar.addEventListener(
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
   ANIMAÇÃO DAS SEÇÕES
========================================================= */

const elementos =
    document.querySelectorAll(
        ".photo-card, .counter-box, .timeline-item, .letter, .calendar, .carta, .roulette-container"
    );


const observador =
    new IntersectionObserver(
        (entradas) => {

            entradas.forEach(
                (entrada) => {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target.classList.add(
                            "apareceu"
                        );

                        observador.unobserve(
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


elementos.forEach(
    (elemento) => {

        elemento.style.opacity =
            "0";

        elemento.style.transform =
            "translateY(30px)";

        elemento.style.transition =
            "opacity .7s ease, transform .7s ease";


        observador.observe(
            elemento
        );

    }
);


/* =========================================================
   CORRIGE A ANIMAÇÃO DOS ELEMENTOS
========================================================= */

const estiloAnimacao =
    document.createElement(
        "style"
    );


estiloAnimacao.textContent = `

    .apareceu {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

`;


document.head.appendChild(
    estiloAnimacao
);


/* =========================================================
   MENSAGEM NO CONSOLE
========================================================= */

console.log(
    "❤️ Henrique e Bella — site carregado!"
);
