const penguin = document.getElementById('penguin');
const messageBubble = document.getElementById('message-bubble');
const backgroundMusic = document.getElementById("background-music");
const restartBtn = document.getElementById('restart-btn');

const newMessages = [
    "Amorcito ya casi llegamos al final de los mensajes 😘",
    "Sabes amor, no sabia si escribirte esto o ño🤭",
    "Porque son cosas hot🙈",
    "Pero no queria dejar pasar la oportunidad",
    "Y la verdad amor",
    "Es que me encanta mucho decirte cosas lindas",
    "Pero tambien...",
    "Me encanta decirte",
    "las cosas que te quiero hacer🙈",
    "Y ahh no cheee", 
    "la verdad me emociono mi amor🙈",
    "Sabes porqueee?", 
    "porque me encanta cuando estamos solos🙈",
    "Porque estas bien rica🤤",
    "Me encanta tu cuerpo amorrr🙈",
    "Creeme que te deseo🤤",
    "Y te confieso quee..",
    "Me quede con ganas🙈",
    "Porque la verdad fue un rapidin🥺",
    "Y la verdad",
    "Te queria hacer muchas cosas mas🙈",
    "Pero no teniamos mucho tiempo amor🥺",
    "Y no chee amor, te la quiero chupar🙈",
    "Estas ahhhhh tan deliciosa🙈",
    "A mi tu cuerpo me reencanta🙈",
    "Me encantan tus Nalgotas🙈",
    "Me encantan tus chichisss🙈",
    "Tus chichis son mis niñas amor🙈",
    "Me encantan DEMASIADOO🙈🤤",
    "Me encanta tu linda pancita🤤",
    "Amor, podrias chuparmela?🥺",
    "Sabes amor, algo que me encantaria🙈",
    "Me encantaria que me la jales tu🙈",
    "Porque tu manita es mas pequeña amor y" ,
    "ahh no che🙈",
    "La verdad me emociono mi amor🙈",
    "Amor estoy feliz tambien ",
    "porque te bese el piecito🙈",
    "Me encanto besar tu patita🥺🙈",
    "Me encantan tus pies amor, no como fetiche",
    "Sino que son pequeños y muy lindos🥺",
    "Me encanta cada parte de tu cuerpo mi amor",
    "Y te lo voy a besuquiar todo🙈🙈🤤🤤",
    "Amor te quiero comerrrr🙈🙈🙈🙈",
    "Y eso es toyo mi amorr🥺",
    "Me atraes demasiado mi amor",
    "Romanticamente hablando",
    "Y sexualmente tambien🙈",
    "Quiero desde lo mas lindo",
    "Hasta lo mas sucio y riko",
    "Contigo mi amor🥺",
    "Adoro tu cuerpo, me exita, me encanta",
    "No lo olvides siiii???",
    "O te muerdo una nacha🤤",
    "Y ahora si eso es todo mi amor🙈",
];

const noMessages = [
    "Prueba dar que no",
    "Amor queee, enserio le distes que no?, aver dale otra vez que no",
    "Quee, hey ya deje de darle que no amor, te reto, dale una vez mas",
    "Ok, con esas vamos amor, veamos quien gana, aver si puedes decirme que noooo"
];

let currentMessage = 0;
let noClickCount = 1;

// Ajusta el volumen de la música de fondo al cargar la página
window.addEventListener('load', () => {
    backgroundMusic.volume = 0.3;
    backgroundMusic.play();
    deliverMessage();
});

// Función para mostrar mensaje y hacer saltar al pingüino
function deliverMessage() {
    if (currentMessage < newMessages.length) {
        messageBubble.innerText = newMessages[currentMessage];
        messageBubble.style.display = "block";

        // Verificamos si el mensaje es demasiado largo
        if (messageBubble.scrollHeight > messageBubble.clientHeight) {
            document.getElementById('penguin-container').classList.add("move-down");
        } else {
            document.getElementById('penguin-container').classList.remove("move-down");
        }

        // Solo mover al pingüino, no al texto
        penguin.classList.add("walk");

        setTimeout(() => {
            penguin.classList.remove("walk");
        }, 500);

        currentMessage++;
    } else {
        triggerProposal();
    }
}

// Función para mostrar la propuesta y los botones
function triggerProposal() {
    messageBubble.style.display = "none";
    document.querySelector('.instructions').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    restartBtn.style.display = 'none';

    // Crear la pregunta de propuesta
    const proposalText = document.createElement('div');
    proposalText.innerText = "¿Te quieres casar conmigo?";
    proposalText.className = "proposal-text";
    document.body.appendChild(proposalText);

    // Crear los textos de respuesta debajo de la propuesta
    const responseText = document.createElement('div');
    responseText.className = "response-text";
    responseText.innerText = noMessages[0];
    document.body.appendChild(responseText);

    // Crear los botones "Sí" y "No"
    const yesButton = document.createElement('button');
    yesButton.innerText = "Sí";
    yesButton.className = "proposal-btn";
    yesButton.id = "yes-btn";
    document.body.appendChild(yesButton);

    const noButton = document.createElement('button');
    noButton.innerText = "No";
    noButton.className = "proposal-btn";
    noButton.id = "no-btn";
    document.body.appendChild(noButton);

    yesButton.addEventListener("click", () => {
        proposalText.innerText = "Sabía que ibas a decir que sí, mi amor 💖";
        penguin.classList.add("jump");
        yesButton.classList.add("grow");
    });

    noButton.addEventListener("click", () => {
        // Mueve el botón 'No' aleatoriamente
        const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;

        // Incrementa el tamaño del botón 'Sí' con cada clic en 'No'
        yesButton.style.transform = `scale(${1 + (noClickCount * 0.1)})`;

        // Actualiza el mensaje del botón "No" según el contador
        if (noClickCount < noMessages.length) {
            responseText.innerText = noMessages[noClickCount];
            noClickCount++;
        } else {
            responseText.innerText = "Ok, con esas vamos amor, veamos quien gana, aver si puedes decirme que noooo";
        }
    });
}

penguin.addEventListener("click", deliverMessage);