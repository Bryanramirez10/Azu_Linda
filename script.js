const penguin = document.getElementById('penguin');
const messageBubble = document.getElementById('message-bubble');
const backgroundMusic = document.getElementById("background-music");
const nextBtn = document.getElementById("next-btn");

const messages = [
    "Hola mi amorcito",
    "Que tal estas mi amor?",
    "Amor con la ayuda del pingüino🤭",
    "Quiero recordarte que......",
    "Estas muy hermosa mi amor😍",
    "Me encantas mucho🥺",
    "Te extraño demasiado amorr",
    "Te lo digo super enserio",
    "Se que te vi el domingo",
    "Pero creeme que te extraño demasiado",
    "Te queyo ver🥺",
    "Ahora que ya sali de la U amor",
    "Te paso extrañando aun mass🥺,",
    "Amor no se como a sido tu semana amor",
    "Creeme que me encantaria saber",
    "Siempre me encanta saber sobre ti",
    "Yo siempre quiero que me cuentes toyo",
    "Se que pasas ocupada durante el dia",
    "Y tambien se que en la noche",
    "Llegas cansada amor",
    "Y que lo que mas quieres es mimir",
    "Y creeme que te entiendo mi amor,",
    "El dia que nos vimos,",
    "Te ibas durmiendo🤭",
    "Porque estabas cansada🥺",
    "Yo siempre te entiendo amor",
    "Y es mas, cuando tu llegas a casita",
    "Yo te digo que cenes y que nos mimamos",
    "Porque se que llegas cansada",
    "No te pido jamas que nos desvelemos",
    "Porque eso seria una groseria amor",
    "Lo unico que te pido",
    "Es que a medida que puedas",
    "Puedas contarme de ti",
    "De como fue tu dia amor",
    "De como te sientes",
    "De como estas",
    "O simplemente que me cuentes",
    "Si a llegado alguna vijita picara a comprar🤭",
    "Me interesa saber hasta lo mas minimo amor",
    "O que me cuentes cuando haras algo ",
    "Porque me preocupo mucho por ti",
    "Pero cuando me dices que haras algo",
    "O que estaras ocupada",
    "No me preocupo tanto amor",
    "Sino que ya se que estas ocupada",
    "Asi como el miercoles amor",
    "Que tu ya me habias dicho que estarias ocupada",
    "Y yo ya sabia que harias amor🤭",
    "Yo siempre me recuerdo de todo",
    "De todo lo que me dices amor",
    "No creas que se me olvida ehhhh",
    "Por ejemplo con lo de la U",
    "No creas que se me a olvidado ehhh",
    "No se si la otra semana si tendra tiempo amor",
    "Para poder ir a ver lo de la U",
    "En el caso que vayas sola",
    "Pues puedo ir contigo si quieres🥺",
    "Te puedo hacer barra mi amor🙈,",
    "Y pues asi amor",
    "Siempre que vayas a hacer algo",
    "Cuentame porfis, sii?",
    "No necesitas darme tantos detalles amor",
    "Con que me cuentes poquito,",
    "Y ya despues siiii",
    "Me cuentes a detalle🙈",
    "Amor quiero que sepas que....",
    "Te amo mucho💕",
    "Con todo mi corazon",
    "Y me encanta enserio",
    "Me encanta mucho amarte",
    "Y demostrarte todo lo lindo, ",
    "Que siento por ti,",
    "Solo quiero que sepas..",
    "Que no estas sola",
    "Te amo demasiado",
    "Y no quiero que te sientas asi",
    "Eres especial para mi Amor",
    "Sinceramente no hay palabras",
    "Para poder decirte todo",
    "Lo que yo siento por ti",
    "Pero creo que este pinguino me ayudara🤭",
    "Hay mas cosas que quiero que sepas amor",
    "No se si tienes tiempo ahorita",
    "Sino, guarda el enlace sii??",
    "Y asi puedes volver a verlo",
    "Todo lo que te envio lo puedes ver de nuevo",
    "Absolutamente toyoo amor",
    "Porque estan subidos en internet🤭",
    "En cuanto te aparesca el boton",
    "Lo tocas amor, sii?",
    "Cuando tengas tiempo princesa❤️",  

];

let currentMessage = 0;

window.addEventListener('load', () => {
    backgroundMusic.volume = 0.3;
});

// Función para mostrar mensaje y mover el pingüino
function deliverMessage() {
    if (currentMessage < messages.length) {
        messageBubble.innerText = messages[currentMessage];
        messageBubble.style.display = "block";

        penguin.classList.add("moving", "walk");
        penguin.style.transform = `translateX(${150 * currentMessage}px)`;

        currentMessage++;

        setTimeout(() => {
            penguin.classList.remove("moving");
        }, 2000);

    } else {
        messageBubble.innerText = "Da click al boton amor ❤️";
        nextBtn.style.display = "inline-block";  // Mostrar el botón "Siguiente"
    }
}

// Función para reiniciar el juego
function restartGame() {
    currentMessage = 0;
    messageBubble.style.display = "none";
    nextBtn.style.display = "none";
    penguin.style.transform = "translateX(0)";
}

// Función para mover el pingüino al botón "Siguiente" y cambiar de ventana
function goToNextPage() {
    penguin.classList.add("moving");
    penguin.style.animation = "moveToButton 2s forwards";  // Iniciar la animación hacia el botón

    setTimeout(() => {
        window.location.href = "Pag2.html"; // Cambiar de página después de la animación
    }, 2000);  // Espera hasta que termine la animación
}

penguin.addEventListener("click", deliverMessage);