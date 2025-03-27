// richiamo gli elementi da selezionare

const immagine = document.getElementById("lampadaBianca")
const bottone =document.getElementById("button")
// creo la funzione che mi permette di inseire la lampada gialla al push del tasto accendi

bottone.addEventListener(`click`, function(){
    immagine.src="./img/yellow_lamp.png"

})
