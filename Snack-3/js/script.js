// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

function arrayOrdinato (array, min, max) {
    // dichiaro nuovo array
    var newArray = [];
    // ciclo gli elementi dell'array in argomento, se la sua posizione in indice è compresa fra i valori inseriti, pusho l'elemento nel nuovo array
    for (var i=0; i<array.length; i++) {
        if(i >= min && i <= max) {
            newArray.push(array[i]);
        } 
    }
    return newArray;
}


var fiori = ["gelsomino","peonia","garofano","giglio","margherita","rosa","girasole"];
var nuovoArray = [];

nuovoArray = arrayOrdinato(fiori, 2,5);
console.log(nuovoArray);

