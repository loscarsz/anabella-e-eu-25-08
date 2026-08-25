/* ==================================================
   CARLOS & ANABELLA
   SCRIPT.JS
================================================== */


/* ==============================
   BOTÃO ENTRAR
============================== */

const botaoEntrar =
    document.getElementById("entrar");

if (botaoEntrar) {

    botaoEntrar.addEventListener(
        "click",
        () => {

            const destino =
                document.getElementById(
                    "nosso-amor"
                );

            if (destino) {

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}



/* ==============================
   CORAÇÕES FLUTUANTES
============================== */

const containerHearts =
    document.querySelector(".hearts");


function criarCoracao() {

    if (!containerHearts) return;


    const heart =
        document.createElement("div");


    heart.className =
        "heart";


    const simbolos = [
        "♥",
        "♡",
        "❤",
        "💕"
    ];


    heart.textContent =
        simbolos[
            Math.floor(
                Math.random() *
                simbolos.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (
            10 +
            Math.random() * 18
        ) + "px";


    heart.style.animationDuration =
        (
            6 +
            Math.random() * 6
        ) + "s";


    containerHearts.appendChild(
        heart
    );


    setTimeout(
        () => {
            heart.remove();
        },
        13000
    );

}


setInterval(
    criarCoracao,
    700
);



/* ==============================
   CONTADOR
   15/06/2026
============================== */

const dataInicio =
    new Date(
        2026,
        5,
        15,
        0,
        0,
        0
    );


function atualizarContador() {

    const agora =
        new Date();


    let diferenca =
        agora.getTime() -
        dataInicio.getTime();


    if (diferenca < 0) {

        diferenca = 0;

    }


    const segundo =
        1000;

    const minuto =
        segundo * 60;

    const hora =
        minuto * 60;

    const dia =
        hora * 24;


    const dias =
        Math.floor(
            diferenca / dia
        );


    const horas =
        Math.floor(
            (diferenca % dia) /
            hora
        );


    const minutos =
        Math.floor(
            (diferenca % hora) /
            minuto
        );


    const segundos =
        Math.floor(
            (diferenca % minuto) /
            segundo
        );


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
            String(horas)
                .padStart(2, "0");

    }


    if (elementoMinutos) {

        elementoMinutos.textContent =
            String(minutos)
                .padStart(2, "0");

    }


    if (elementoSegundos) {

        elementoSegundos.textContent =
            String(segundos)
                .padStart(2, "0");

    }

}


atualizarContador();


setInterval(
    atualizarContador,
    1000
);



/* ==============================
   ROLETA
============================== */

const roleta =
    document.getElementById(
        "roletaWheel"
    );


const botaoGirar =
    document.getElementById(
        "girar"
    );


const resultado =
    document.getElementById(
        "resultado"
    );


const premios = [

    "💋 voce ganhou uma declaração especial do henrique, use agora.",

    "🤗 parabéns vc agora tem direito a 2 pedidos",

    "🥰 Diga o porque voce me ama",

    "💌 qual o motive de você me amar?.",

    "🌹 ganhou um desejo especial",

    "📸 Escolha umdefeito que se tornou admiravel",

    "🎵 musica que sempre lembra nós 2 ",

    "😂 conte um sonho para nosso futuro",

    "👀 se ferrou feitiço virou contra vc, diga agora o porque vc ama o henrique",

    "💖 Diga 10 metas de vida comigo",

    "🔄 giro extra agora voce ganhou mais 2 giros",

    "🫶 Hoje você escolhe uma prenda para o henrique"

];


let girando =
    false;


let rotacao =
    0;


function esperar(tempo) {

    return new Promise(
        resolver =>
            setTimeout(
                resolver,
                tempo
            )
    );

}


function girarUmaVez(
    duracao = 4000
) {

    return new Promise(
        resolver => {

            const premio =
                Math.floor(
                    Math.random() *
                    premios.length
                );


            const segmento =
                360 /
                premios.length;


            const alvo =
                360 -
                (
                    premio *
                    segmento +
                    segmento / 2
                );


            const voltas =
                5 +
                Math.floor(
                    Math.random() * 3
                );


            rotacao +=
                voltas * 360 +
                alvo;


            roleta.style.transitionDuration =
                duracao + "ms";


            roleta.style.transform =
                `rotate(${rotacao}deg)`;


            setTimeout(
                () => {

                    resolver(premio);

                },
                duracao + 80
            );

        }
    );

}


if (botaoGirar) {

    botaoGirar.addEventListener(
        "click",
        async () => {

            if (girando) return;


            girando = true;


            botaoGirar.disabled =
                true;


            resultado.textContent =
                "A roleta está escolhendo um carinho para vocês... ❤️";


            const premio =
                await girarUmaVez();


            if (premio === 10) {

                resultado.textContent =
                    "😏 O destino mandou: GIRE 5 VEZES!";


                for (
                    let i = 5;
                    i >= 1;
                    i--
                ) {

                    await esperar(650);


                    resultado.textContent =
                        `🎡 Girando novamente... ${i} ${
                            i === 1
                                ? "última vez!"
                                : "vezes restantes!"
                        }`;


                    await girarUmaVez(
                        900
                    );

                }


                const finalPremio =
                    Math.floor(
                        Math.random() * 10
                    );


                resultado.textContent =
                    `❤️ Depois dos 5 giros: ${
                        premios[finalPremio]
                    }`;


            } else {

                resultado.textContent =
                    premios[premio];

            }


            botaoGirar.disabled =
                false;


            girando =
                false;

        }
    );

}



/* ==============================
   CALENDÁRIO
============================== */

const diasConhecidos =
    document.getElementById(
        "diasConhecidos"
    );


const mesAtual =
    document.getElementById(
        "mesAtual"
    );


const diasCalendario =
    document.getElementById(
        "diasCalendario"
    );


const mesAnterior =
    document.getElementById(
        "mesAnterior"
    );


const mesProximo =
    document.getElementById(
        "mesProximo"
    );


const dataConhecimento =
    new Date(
        2026,
        5,
        15
    );


const nomesMeses = [

    "janeiro",

    "fevereiro",

    "março",

    "abril",

    "maio",

    "junho",

    "julho",

    "agosto",

    "setembro",

    "outubro",

    "novembro",

    "dezembro"

];


let calendarioAno =
    new Date().getFullYear();


let calendarioMes =
    new Date().getMonth();



function atualizarDiasDaHistoria() {

    const hoje =
        new Date();


    const inicio =
        new Date(
            dataConhecimento
        );


    hoje.setHours(
        0,
        0,
        0,
        0
    );


    inicio.setHours(
        0,
        0,
        0,
        0
    );


    const diferenca =
        Math.max(
            0,
            hoje - inicio
        );


    const dias =
        Math.floor(
            diferenca /
            86400000
        );


    if (diasConhecidos) {

        diasConhecidos.textContent =
            dias;

    }

}



function renderizarCalendario() {

    if (
        !mesAtual ||
        !diasCalendario
    ) return;


    mesAtual.textContent =
        `${nomesMeses[calendarioMes]}
        ${calendarioAno}`;


    diasCalendario.innerHTML =
        "";


    const primeiroDia =
        new Date(
            calendarioAno,
            calendarioMes,
            1
        ).getDay();


    const quantidadeDias =
        new Date(
            calendarioAno,
            calendarioMes + 1,
            0
        ).getDate();


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


        diasCalendario.appendChild(
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

        const celula =
            document.createElement(
                "div"
            );


        celula.className =
            "calendar-day";


        celula.textContent =
            dia;


        if (

            calendarioAno ===
                dataConhecimento
                    .getFullYear()

            &&

            calendarioMes ===
                dataConhecimento
                    .getMonth()

            &&

            dia ===
                dataConhecimento
                    .getDate()

        ) {

            celula.classList.add(
                "love-day"
            );


            celula.title =
                "15 de junho — o dia em que nossa história começou ❤️";

        }


        if (

            calendarioAno ===
                hoje.getFullYear()

            &&

            calendarioMes ===
                hoje.getMonth()

            &&

            dia ===
                hoje.getDate()

        ) {

            celula.classList.add(
                "today"
            );

        }


        diasCalendario.appendChild(
            celula
        );

    }

}



if (mesAnterior) {

    mesAnterior.addEventListener(
        "click",
        () => {

            calendarioMes--;


            if (
                calendarioMes < 0
            ) {

                calendarioMes = 11;

                calendarioAno--;

            }


            renderizarCalendario();

        }
    );

}



if (mesProximo) {

    mesProximo.addEventListener(
        "click",
        () => {

            calendarioMes++;


            if (
                calendarioMes > 11
            ) {

                calendarioMes = 0;

                calendarioAno++;

            }


            renderizarCalendario();

        }
    );

}


atualizarDiasDaHistoria();

renderizarCalendario();



/* ==============================
   CARTINHAS
============================== */

const cartas =
    document.querySelectorAll(
        ".carta"
    );


const surprise =
    document.getElementById(
        "surprise"
    );


const surpriseTitle =
    document.getElementById(
        "surprise-title"
    );


const surpriseText =
    document.getElementById(
        "surprise-text"
    );


const closeSurprise =
    document.querySelector(
        ".close-surprise"
    );


const mensagens = [

    {

        titulo:
            "gesto pequeno de amor 💗",

        texto:
            "Meu amor, venho te lembrar que nunca vai estar sozinha, sempre estarei do seu lado, eu te amo com todo amor e carinho do mundo, você é minha velinha, sempre esteri ao seu lado em todos projetos,vc e meu amor"

    },


    {

        titulo:
            "declaração fofa 🥰",

        texto:
            "desde o primeiro dia que te conheci, meu coração chegou errar as batidas, você é o meu amor e sempre vais er somente você, seus problemas são nossos problemas e eu te amo muito, nunca se esqueça que to cntg sempre meu amor."

    },


    {

        titulo:
            "Para quando quiser sorrir 🌹",

        texto:
            "tinhamu, só espero que vc n peide igual o thor kakakakaka ❤️"

    }

];


cartas.forEach(
    carta => {

        carta.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        carta.dataset.index
                    );


                const mensagem =
                    mensagens[index];


                if (!mensagem) return;


                surpriseTitle.textContent =
                    mensagem.titulo;


                surpriseText.textContent =
                    mensagem.texto;


                surprise.classList.add(
                    "show"
                );


                surprise.setAttribute(
                    "aria-hidden",
                    "false"
                );

            }
        );

    }
);



/* ==============================
   FECHAR CARTINHA
============================== */

function fecharCartinha() {

    if (!surprise) return;


    surprise.classList.remove(
        "show"
    );


    surprise.setAttribute(
        "aria-hidden",
        "true"
    );

}


if (closeSurprise) {

    closeSurprise.addEventListener(
        "click",
        fecharCartinha
    );

}


if (surprise) {

    surprise.addEventListener(
        "click",
        evento => {

            if (
                evento.target ===
                surprise
            ) {

                fecharCartinha();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    evento => {

        if (
            evento.key === "Escape"
        ) {

            fecharCartinha();

        }

    }
);



/* ==============================
   CONSOLE
============================== */

console.log(
    "❤️ Carlos & Anabella ❤️"
);

console.log(
    "Desde 15/06/2026 — uma história sendo escrita..."
);