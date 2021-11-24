// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const array = [];

const numero1 = Math.floor((Math.random() * 100) + 1);
const numero2 = Math.floor((Math.random() * 100) + 1);
const numero3 = Math.floor((Math.random() * 100) + 1);
const numero4 = Math.floor((Math.random() * 100) + 1);
const numero5 = Math.floor((Math.random() * 100) + 1);

array.push(numero1, numero2, numero3, numero4, numero5);
// console.log(array);


const numeri = document.querySelector(".numeri");
numeri.innerHTML = `${numero1},${numero2},${numero3},${numero4},${numero5}`;

setTimeout(tempo, 2000);

function tempo(){
    const arraynumeri = [];

    const numeroInserito1 = parseInt(prompt("Inserisci i numeri"));
    const numeroInserito2 = parseInt(prompt("Inserisci i numeri"));
    const numeroInserito3 = parseInt(prompt("Inserisci i numeri"));
    const numeroInserito4 = parseInt(prompt("Inserisci i numeri"));
    const numeroInserito5 = parseInt(prompt("Inserisci i numeri"));
    
    arraynumeri.push(numeroInserito1, numeroInserito2, numeroInserito3, numeroInserito4, numeroInserito5);

    confronto(array, arraynumeri);

    function confronto(array1, array2){
        if (array1.length !== array2.length) return false;
        for (var i = 0, i = array1.length; i < len; i++){
            if (array1[i] !== array2[i]){
                return alert(" non hai vinto");
            }
        }
        return alert("hai vinto"); 
    }
}








