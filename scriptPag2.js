const penguin = document.getElementById('penguin');
const messageBubble = document.getElementById('message-bubble');
const backgroundMusic = document.getElementById("background-music");
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const newMessages = [
    "Amorcito hay mas mensajes jijij",
    "Amor te sere sincero",
    "A partir de esta semana, para mi",
    "Ya empezo a ser aburrido",
    "La semana pasada fue divertida sabes porque?",
    "Porque desde el martes que sali",
    "Y me dijistes de vernos",
    "Me senti muy feliz",
    "Y desde ese dia empece a arreglar toyo",
    "Tus regalitos y lo que te daria",
    "La verdad las flores,",
    "Yo queria que fueran naturales",
    "Se me hacia mas bonito",
    "Pero no te imaginas desde cuando las pedi",
    "Las pedi desde inicio de mes",
    "Y no sabia cuando nos ibamos a ver🥺",
    "Entonces mejor opte por las eternas",
    "Pense que seria mas lindo y",
    "Que durarian mas",
    "Pero despues para mi sorpresa",
    "Me di cuenta que sabias hacerlassss",
    "Y yo ya las tenia en la casita🥺",
    "Pero la verdad siempre queria dartelas",
    "Aunq sinceramente me daba pena amor",
    "Porque pz tu sabes hacerlas🥺",
    "Pero volviendo al tema amor",
    "Ya esta semana si ya fue mas aburrida",
    "La verdad tengo que hacer algo productivo🤭",
    "Y pues cuando me preguntastes que haria",
    "Ahora que ya sali amor",
    "Peydon si sentistes que te respondi feo",
    "Pero la verdad que no lo habia pensado amor",
    "Lo unico que habia pensado es hacer interciclo",
    "Pero no lo hare amor",
    "Y pues en esa semana, creeme que lo mas",
    "Importante para mi",
    "Era tener tus regalitos listos para el domingo🥺",
    "Amor te amo mucho🥺",
    "Y te extraño demasiadooo, demasiadoo🥺",
    "Por favor no dudes de mi amor hacia ti🥺",
    "Te pido peydon si ayer y hoy no le respondi seguido",
    "Peyo esq e estado haciendole esto amor",
    "Ayer y hoy🙈",
    "Espero te guste mi amor",
    "La verdad amor",
    "Quiero que sepas que te amo mucho",
    "Y que no te dejare solita",
    "Me encantaria que pudieras saber todo lo q te amo",
    "O mejor dicho, TI AMUU",
    "Me encantaria que pudieras saber..",
    "Que cuando te digo que me preocupo por ti",
    "Te lo digo super enserio",
    "Me preocupa demasiado",
    "Cuando no se de ti",
    "Me preocupo cuando no me respondes amor",
    "Y no me refiero a cuando estas trabajando",
    "Se que pasas ocupada amor",
    "Sino que cuando no se mucho de ti",
    "Creeeme que me encantaria",
    "Que pudieramos tomar 1 dia a la semana",
    "Solo 1 dia te pido amor",
    "Para poder hablar",
    "Sobre como a sido tu semana",
    "Sobre como te sientes",
    "Sobre como estas",
    "Te lo pido con todo mi corazon amor",
    "Solo 1 dia amor, el domingo por ejemplo",
    "Y que me puedas contar todo lo de la semana",
    "Te lo agradeceria mucho mi amor",
    "Tambien te agradeceria",
    "Que no me ocultes como te sientes",
    "Por Dios amor",
    "Creeme que muchas e llorado muchas veces",
    "Porque simplemente quiero hacerte feliz",
    "Solo quiero que te puedas sentir bien",
    "Y e llorado porque no se que mas hacer",
    "Porque me encantaria poder verte mas seguido",
    "Y estar aun mas presente en tu vida",
    "Y no seee, lloro porque",
    "Porque no se si lo que hago es suficiente",
    "Lloro porque solo quiero ser mejor",
    "Y poder demostrarte que no estas solita",
    "Sino que estoy contigo",
    "Solo te pido que no te aisles por favor",
    "Que te expreses conmigoo",
    "Que cuando puedas llamarme lo hagas",
    "Que cuando me necesites me lo digas amorr",
    "Yo estoy siempre al pendiente de ti",
    "Porque es una de las maneras de demostrarte",
    "Que te amo demasiado y que me importas mucho",
    "Porfis te lo pido mi amorcito  ",
    "Y ya estoy llorando",
    "Siempre que te hago cositas asi lloro amor jijij",
    "Y no se, la verdad nose",
    "Sabes amor",
    "Creeme que es muy complicado",
    "El hecho de expresarme contigo por aqui",
    "Y me refiero",
    "A que siento demasiadas cosas por ti",
    "Y cada vez que pienso en ti sonrio",
    "Y me siento muy feliz",
    "Y nose, es complicado",
    "Porque por mensaje puede que no me de a entender",
    "O que incluso por esto que te envio",
    "No sientas en si todo el amor que yo siento por ti",
    "Es complicado sabes porque amor?",
    "Porque estas cositas que te hago",
    "Son para poder expresarme contigo",
    "Porque cuando nos vemos disfruto el momento",
    "Y cuando nos vemos, hay cosas que ni siquiera te digo",
    "Osea, ahhh amor no te quiero confundir",
    "Pero lo que trato de darte a entender",
    "Es que si yo Cuando nos vemos",
    "Te dijera todo lo que siento",
    "Si yo te dijera todo lo que quiero",
    "No hariamos nada mas que eso ",
    "Pasaria hablando y hablando",
    "Y te lo compruebo de 2 maneras amor",
    "La primera, es esto amor",
    "El hecho de enviarte este detalle",
    "Que a pesar que es mucho texto",
    "Aun no logra decirte todo lo que siento",
    "Y eso que ya escribi bastante amor",
    "La segunda, essss",
    "Que si te soy sincero amor",
    "Me arrepiento de algo esta vez que nos vimos",
    "Y es, que no te tome ninguna foto con las flores🥺",
    "Y no te tome ninguna foto en general con tus regalitos",
    "Y nose, creeme que no se me ocurrio sabes porque?",
    "Porque no sale de mi mente tu sonrisa",
    "Amor por Dios, no sale de mi mente ese momento",
    "Creeme que fui el mas feliz",
    "Al ver tu carita feliz, me senti super bieen",
    "Y pues no te lo digo todo amor",
    "Porque cuando nos vemos, quiero saber de ti",
    "De como estas, de las cosas que me cuentas",
    "Cosas que no me dices por chat",
    "Siempre que nos vemos me cuentas algo",
    "Ya sea algo que vas a hacer",
    "O algo que a pasado amor",
    "O simplemente como te sientes",
    "Creeme que siempre te escucho ",
    "Amo escucharte y prestarte atencion",
    "Amo el hecho de poder verte en persona",
    "Poder ver lo linda que estas",
    "Lo bien que me haces sentir",
    "Y te confesare algo mas amor",
    "Ahhh la verdad quiero....",
    ".........",
    "Sabes que amor🤭",
    "Ya lo habia escrito y lo borre",
    "Sabes porque amor?",
    "Porque te lo dire en persona",
    "Sera mucho mas lindo",
    "Asi que te pido que recuerdes esto",
    "Que cuando tu y yo nos veamos",
    "Yo te tengo que decir algoo",
    "Asi que graba en tu mente amor",
    "'Cuando nos veamos el me tiene que decir algo'",
    "Y te prometo que te lo digo en persona mi princesa🤭",
    "Ahora prosigo con lo demas amor.......",
    "Quiero estar contigo, quiero formar una familia contigo",
    "Cuando te envio videos sobre familias o hijitos",
    "O cuando te digo que quiero una hija",
    "Que sea identica a ti",
    "No te lo digo solo porque sii",
    "Te lo digo porque en verdad lo deseo🥺",
    "Y es mi sueño, el tener una bonita familia",
    "Una familia unida y llena de mucho amor",
    "Quieres que formemos una bonita familia?",
    "Me ayudas a cumplir mi sueño juntos amor?🥺",
    "Amor sabes te extraño mucho",
    "No te imaginas cuanto amor🥺",
    "No se cuando pueda verte amor🥺",
    "Solo espero que si sea pronto",
    "La verdad es que te extraño mucho amor",
    "y te confesare algo amor jijij",
    "La verdad cuando te extraño",
    "Me pongo a ver los mensajes que me envias",
    "O cuando me has mandado audios, los escucho de nuevo",
    "Cuando te extraño demasiado, me pongo a ver tus fotos",
    "Y no se amor, la verdad aveces lloro cuando te extraño",
    "Son cosas que nunca te digo amor",
    "Pero me encanta cuando me tratas bonito",
    "Me encanta cuando me dices que me amas",
    "Me encanta cuando me preguntas como estoy",
    "O cuando me dices que soy wapo",
    "O cuando nos vemos y me besas",
    "Cuando nos vemos y me agarras las nachas🙈",
    "Mas que decirte que te amo",
    "Mas que me escuches decirte que te amo",
    "Quiero que sientas mi amor",
    "Y por eso hago esto mi amor",
    "Para poder recordartelo mi amor🥺",
    "Eres tan especial para mi",
    "No te imaginas cuanto",
    "Solo quiero que te sientas amada por mi",
    "Porque no sabes lo que haria por verte feliz amor",
    "Te amo con todo mi corazon mi niña",
    "Hay mas mensajitos amor",
    "Hay un boton mas",
];

let currentMessage = 0;

// Ajusta el volumen de la música de fondo al cargar la página
window.addEventListener('load', () => {
    backgroundMusic.volume = 0.3; // Ajusta el volumen predeterminado
});

// Función para mostrar mensaje y hacer saltar al pingüino
function deliverMessage() {
    if (currentMessage < newMessages.length) {
        // Mostrar el mensaje en el globo
        messageBubble.innerText = newMessages[currentMessage];
        messageBubble.style.display = "block";

        // Añadir la clase de salto
        penguin.classList.add("walk");

        // Eliminar la clase de salto después de un corto tiempo para reiniciar la animación
        setTimeout(() => {
            penguin.classList.remove("walk");
        }, 500); // Duración de un solo salto

        currentMessage++;
    } else {
        // Mostrar mensaje final y habilitar el botón "Siguiente"
        messageBubble.innerText = "Da click al boton amorcito ❤️";
        messageBubble.style.display = "block";
        nextBtn.style.display = "inline-block"; // Mostrar el botón "Siguiente"
    }
}

// Función para reiniciar el juego
function restartGame() {
    currentMessage = 0;
    messageBubble.style.display = "none";
    penguin.style.transform = "translateX(0)";
    nextBtn.style.display = "none";
}

// Función para mover el pingüino al botón "Siguiente" y cambiar de ventana
function goToNextPage() {
    penguin.classList.add("movingToButton");

    // Esperar hasta que termine la animación antes de cambiar
    penguin.addEventListener("animationend", () => {
        window.location.href = "Pag3.html"; // Cambia a la nueva página
    }, { once: true });
}

// Evento para activar la función al hacer clic en el pingüino
penguin.addEventListener("click", deliverMessage);

// Evento para reiniciar el juego al hacer clic en "Reiniciar"
restartBtn.addEventListener("click", restartGame);

// Evento para ir a la siguiente página al hacer clic en "Siguiente"
nextBtn.addEventListener("click", goToNextPage);
