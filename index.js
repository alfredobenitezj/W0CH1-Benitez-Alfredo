//El objetivo del juego es adivinar si la siguiente carta en el mazo es mayor o menor que la carta actual. Se utiliza un mazo de cartas francesas que consta de 52 cartas, divididas en 4 palos: ♠️ (espadas), ♣️ (tréboles), ♦️ (diamantes) y ♥️ (corazones). Cada palo tiene 13 cartas con los siguientes valores: 2, 3, 4, 5, 6, 7, 8, 9, 10, J (jota), Q (reina), K (rey) y A (as).

/*El juego consta de las siguientes funcionalidades:

1. Generación de cartas: Las cartas se generan combinando los valores y palos disponibles en el mazo de cartas francesas.

2. Obtención de una carta aleatoria: Se implementa una función para obtener una carta aleatoria del array de cartas generado previamente.

3. Inicio de un nuevo juego: Se inicia un nuevo juego generando un nuevo array de cartas y barajándolas. Se muestra la carta inicial en la consola, incluyendo su valor. Se solicita al jugador que elija si la siguiente carta será mayor o menor ingresando "mayor" o “menor”  para menor. (No puede ser case sensitive). 

4. Verificación de la respuesta del jugador: Cuando el jugador ingresa su elección, se genera una nueva carta y se compara con la carta actual. Si la respuesta del jugador es correcta, se muestra un mensaje indicando que acertó y se actualiza la puntuación. Si la respuesta es incorrecta, se muestra un mensaje indicando que falló y se muestra la carta actual y la nueva carta en la consola. El jugador puede reiniciar un nuevo juego después de cada respuesta.

5. Fin del juego: Tras cada partida se le pregunta al jugador si quiere terminar la partida y de ser así, se le muestra la puntuación final con las rondas.
*/
const cards = [
  {
    card: "2",
    value: 1,
    type: "Picas",
  },
  {
    card: "3",
    value: 2,
    type: "picas",
  },
  {
    card: "4",
    value: 3,
    type: "Picas",
  },
  {
    card: "5",
    value: 4,
    type: "Picas",
  },
  {
    card: "6",
    value: 5,
    type: "Picas",
  },
  {
    card: "7",
    value: 6,
    type: "Picas",
  },
  {
    card: "8",
    value: 7,
    type: "Picas",
  },
  {
    card: "9",
    value: 8,
    type: "Picas",
  },
  {
    card: "10",
    value: 9,
    type: "Picas",
  },
  {
    card: "Jack",
    value: 10,
    type: "Picas",
  },
  {
    card: "Queen",
    value: 11,
    type: "Picas",
  },
  {
    card: "King",
    value: 12,
    type: "Picas",
  },
  {
    card: "Ace",
    value: 13,
    type: "Picas",
  },

  {
    card: "2",
    value: 1,
    type: "diamonds",
  },
  {
    card: "3",
    value: 2,
    type: "diamonds",
  },
  {
    card: "4",
    value: 3,
    type: "diamonds",
  },
  {
    card: "5",
    value: 4,
    type: "diamonds",
  },
  {
    card: "6",
    value: 5,
    type: "diamonds",
  },
  {
    card: "7",
    value: 6,
    type: "diamonds",
  },
  {
    card: "8",
    value: 7,
    type: "diamonds",
  },
  {
    card: "9",
    value: 8,
    type: "diamonds",
  },
  {
    card: "10",
    value: 9,
    type: "diamonds",
  },
  {
    card: "Jack",
    value: 10,
    type: "diamonds",
  },
  {
    card: "Queen",
    value: 11,
    type: "diamonds",
  },
  {
    card: "King",
    value: 12,
    type: "diamonds",
  },
  {
    card: "Ace",
    value: 13,
    type: "diamonds",
  },

  { card: "2", value: 1, type: "hearts" },
  { card: "3", value: 2, type: "hearts" },
  { card: "4", value: 3, type: "hearts" },
  { card: "5", value: 4, type: "hearts" },
  { card: "6", value: 5, type: "hearts" },
  { card: "7", value: 6, type: "hearts" },
  { card: "8", value: 7, type: "hearts" },
  { card: "9", value: 8, type: "hearts" },
  { card: "10", value: 9, type: "hearts" },
  { card: "Jack", value: 10, type: "hearts" },
  { card: "Queen", value: 11, type: "hearts" },
  { card: "King", value: 12, type: "hearts" },
  { card: "Ace", value: 13, type: "hearts" },

  { card: "2", value: 1, type: "clubs" },
  { card: "3", value: 2, type: "clubs" },
  { card: "4", value: 3, type: "clubs" },
  { card: "5", value: 4, type: "clubs" },
  { card: "6", value: 5, type: "clubs" },
  { card: "7", value: 6, type: "clubs" },
  { card: "8", value: 7, type: "clubs" },
  { card: "9", value: 8, type: "clubs" },
  { card: "10", value: 9, type: "clubs" },
  { card: "Jack", value: 10, type: "clubs" },
  { card: "Queen", value: 11, type: "clubs" },
  { card: "King", value: 12, type: "clubs" },
  { card: "Ace", value: 13, type: "clubs" },

  { card: "2", value: 1, type: "trebol" },
  { card: "3", value: 2, type: "trebol" },
  { card: "4", value: 3, type: "trebol" },
  { card: "5", value: 4, type: "trebol" },
  { card: "6", value: 5, type: "trebol" },
  { card: "7", value: 6, type: "trebol" },
  { card: "8", value: 7, type: "trebol" },
  { card: "9", value: 8, type: "trebol" },
  { card: "10", value: 9, type: "trebol" },
  { card: "Jack", value: 10, type: "trebol" },
  { card: "Queen", value: 11, type: "trebol" },
  { card: "King", value: 12, type: "trebol" },
  { card: "Ace", value: 13, type: "trebol" },
];
let PreviusCard;
let NextCard;
let Score = 0;
let tocontinue = true;

const GetrandomCardpreviusly = () => {
  PreviusCard = cards[Math.floor(Math.random() * cards.length)];
  return console.log(`tu carta es ${PreviusCard.card} de ${PreviusCard.type}`);
};

const GetrandomCardnext = () => {
  NextCard = cards[Math.floor(Math.random() * cards.length)];
  return console.log(`tu carta es ${NextCard.card} de ${NextCard.type}`);
};

function high() {
  let morehigh = document.querySelector(".up");
  if ((morehigh = "mayor")) {
    GetrandomCardnext();
    if (PreviusCard <= NextCard) {
      return `tu carta es ${NextCard.card} de ${NextCard.type} Has perdido`;
    } else {
      return `tu carta es ${NextCard.card}de ${NextCard.type} Has ganado `;
      Score++;
    }
  }
}
function less() {
  let moreless = document.querySelector(".down");
  if ((moreless = "menor")) {
    GetrandomCardnext();
    if (PreviusCard <= NextCard) {
      return `tu carta es ${NextCard.card} de ${NextCard.type} Has perdido`;
    } else {
      return `tu carta es ${NextCard.card}de ${NextCard.type} Has ganado `;
    }
    Score++;
  }
}
function tobecontinue() {
  tocontinue = confirm("Quieres jugar otra vez");
  if (tocontinue) {
    Game();
  } else {
    `gracias por jugar ha terminado con ${score++}`;
  }
}
function Game() {
  GetrandomCardpreviusly();
  GetrandomCardnext();
  high();
  less();
  tobecontinue();
}
Game();
