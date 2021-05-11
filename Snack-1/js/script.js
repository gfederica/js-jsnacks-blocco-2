// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.


var pesoBiciclette = [];

var biciclette = [
    {
        nome: "bicicletta_1",
        peso: 24,
    },
    {
        nome: "bicicletta_2",
        peso: 10,
    },
    {
        nome: "bicicletta_3",
        peso: 14,
    },
    {
        nome: "bicicletta_4",
        peso: 8,
    },
    {
        nome: "bicicletta_5",
        peso: 30,
    }
]

for (var i = 0; i<biciclette.length; i++) {
    var bicicletta = biciclette[i];
    var pesoUnita = bicicletta.peso;
    pesoBiciclette.push(bicicletta.peso);    
}

console.log(Math.min(...pesoBiciclette));