const name = prompt('Nome?');
const surname = prompt('Cognome?');
const color = prompt('Colore preferito?');

let somma = name + surname + color;

document.getElementById('my_id').innerHTML = somma + 21;