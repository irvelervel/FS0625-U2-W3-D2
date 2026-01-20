const LOCALSTORAGE_KEY = 'saved-text'

const saveFunction = function () {
  // come salvo il contenuto della textarea nel localStorage?
  // trovo un riferimento alla textarea
  const textArea = document.getElementById('text-box') // riferimento alla <textarea>
  const currentText = textArea.value
  console.log(currentText)
  // funziona! a questo punto salviamo il currentText nel localStorage
  localStorage.setItem(LOCALSTORAGE_KEY, currentText) // salvo il currentText nel localStorage
  // sotto una chiave nominata "saved-text"
  // facciamo comparire il save-toast per 3s
  const toast = document.getElementById('save-toast')
  // gli assegno la classe "show" -> comparirà
  toast.classList.add('show')
  // e, dopo 3s, la tolgo
  setTimeout(function () {
    // gli tolgo la classe "show" -> scomparirà
    toast.classList.remove('show')
  }, 3000)
}

const loadFunction = function () {
  // farà l'inverso della saveFunction
  // recupero il valore precedentemente salvato (se c'è)
  const savedValue = localStorage.getItem(LOCALSTORAGE_KEY) // recupero il contenuto salvato
  if (savedValue !== null) {
    // se il valore salvato effettivamente esiste...
    // recuperiamo un riferimento alla textarea
    const textArea = document.getElementById('text-box') // riferimento alla <textarea>
    // riempiamo la sua proprietà "value"
    textArea.value = savedValue
    // carichiamo il toast per notificare l'utente
    const toast = document.getElementById('load-toast')
    // gli assegno la classe "show" -> comparirà
    toast.classList.add('show')
    // e, dopo 3s, la tolgo
    setTimeout(function () {
      // gli tolgo la classe "show" -> scomparirà
      toast.classList.remove('show')
    }, 3000)
  } else {
    console.log('MANCA CONTENUTO')
    // accendo l'error toast
    const toast = document.getElementById('error-toast')
    // gli assegno la classe "show" -> comparirà
    toast.classList.add('show')
    // e, dopo 3s, la tolgo
    setTimeout(function () {
      // gli tolgo la classe "show" -> scomparirà
      toast.classList.remove('show')
    }, 3000)
  }
}

const resetFunction = function () {
  // svuota la textarea
  const textArea = document.getElementById('text-box')
  textArea.value = ''
  // cancello la memoria nel localStorage
  localStorage.removeItem(LOCALSTORAGE_KEY)
  const toast = document.getElementById('delete-toast')
  // gli assegno la classe "show" -> comparirà
  toast.classList.add('show')
  // e, dopo 3s, la tolgo
  setTimeout(function () {
    // gli tolgo la classe "show" -> scomparirà
    toast.classList.remove('show')
  }, 3000)
}

// ricerco il pulsante SALVA dal DOM e gli assegno l'esecuzione di una funzione al click
const saveButton = document.getElementById('save') // riferimento al button con id "save"
saveButton.addEventListener('click', saveFunction)

// ricerco il pulsante CARICA dal DOM e gli assegno l'esecuzione di una funzione al click
const loadButton = document.getElementById('load') // riferimento al button con id "load"
loadButton.addEventListener('click', loadFunction)

// ricerco il pulsante CARICA dal DOM e gli assegno l'esecuzione di una funzione al click
const resetButton = document.getElementById('reset') // riferimento al button con id "load"
resetButton.addEventListener('click', resetFunction)
