let contacts = []

const generateCard = function (firstName, lastName, phone) {
  // ora potremmo subito creare la card e appenderla nel DOM, nella section "contacts-row"
  // <div class="col col-12 col-md-6 col-lg-4"">
  // qua metteremo una card di bootstrap
  // </div>
  const contactsRow = document.getElementById('contacts-row')
  //   invece che creare singolarmente i div, i p, i button etc. un approccio più "smart"
  // soprattutto quando avete diverse linee di HTML da collegare insieme è quello di manipolare
  // direttamente l'HTML del contenitore, aggiungendole l'elemento che mi interessa.
  // se poi la stringa HTML che aggiungo al contenitore la faccio come "template literal" (cioè
  // con i backticks ``) posso creare una stringa multi-riga tra l'altro facilmente interpolabile
  // con i dati del mio form utilizzando l'espressione ${ }
  contactsRow.innerHTML += `
    <div class="col col-12 col-md-6 col-lg-4">
        <div class="card">
            <img src="https://placebear.com/150/150" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <p class="card-text">${firstName}</p>
                <p class="card-text">${lastName}</p>
                <p class="card-text">${phone}</p>
            </div>
        </div>
    </div>
  `
}

// qui dovrei controllare se saved-contacts esiste nel localStorage (vorrebbe dire
// che ho già salvato precedentemente dei contatti); in caso affermativo, recupererò
// dal localStorage il valore collegato a quella chiave (NB: sarà una stringa), lo
// dovrò ritrasformare in array di oggetti (con JSON.parse() ) e rifarò partire il
// mio array contacts da quel punto salvato

if (localStorage.getItem('saved-contacts') !== null) {
  // vuol dire che ho contatti precedentemente salvati, li recuperiamo
  const savedContacts = localStorage.getItem('saved-contacts')
  // NB: savedContacts è UNA STRINGA, dobbiamo ri-convertirla in array di Contacts
  const arrayOfContacts = JSON.parse(savedContacts)
  console.log('CONTATTI PRECEDENTEMENTE SALVATI', arrayOfContacts)
  // riassegno i contatti di prima a contacts
  contacts = arrayOfContacts
  // ora devo solo ri-creare le card che prima erano presenti nel DOM
  // ho la funzione "generateCard" che è in grado di crearne una, quindi
  // la invoco tante volte quanti elementi compongono contacts
  contacts.forEach((c) => {
    // c è un oggetto Contact, con firstName, lastName, phone (e anche prefix)
    generateCard(c.firstName, c.lastName, c.phone)
  })
}

class Contact {
  constructor(_firstName, _lastName, _phone) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.phone = _phone
  }
  prefix = '+39'
}

// per prima cosa, vado a creare le card con i dati presi dal form e le appendo
// nel DOM nella sezione "contacts-row"

// per intercettare l'invio dei dati devo lavorare sull'evento SUBMIT del form
const form = document.getElementById('rubrica-form') // <form>
form.addEventListener('submit', function (e) {
  e.preventDefault() // stoppa il comportamento di default del form
  // recupero ora i 3 valori degli input
  const firstName = document.getElementById('firstName').value // es. 'Stefano'
  const lastName = document.getElementById('lastName').value // es. 'Casasola'
  const phone = document.getElementById('phone').value // 23423423432

  generateCard(firstName, lastName, phone)

  form.reset() // svuota tutti i campi del form

  // ora vorremmo integrare localStorage, salvando in memoria i contatti aggiunti
  // in un ARRAY; questo ci permetterà al ricaricamento successivo della pagina di recuperare
  // eventuali contatti precedentemente salvati e ricreare le card automaticamente

  const newContact = new Contact(firstName, lastName, phone)

  //   dobbiamo salvare questo newContact in un array: l'array è definito in cima al documento
  contacts.push(newContact)
  console.log(contacts)

  // ora lo dobbiamo salvare in localStorage:

  // attenzione: il localStorage può memorizzare solamente stringhe.
  // per salvare contacts dovremo prima convertirlo in una stringa JSON: lo possiamo fare
  // comodamente con un metodo che si chiama
  // JSON.stringify(contacts) // da array/oggetto -> string
  // JSON.parse() // da string -> array/oggetto

  localStorage.setItem('saved-contacts', JSON.stringify(contacts))
  // questo è il modo CORRETTO per memorizzare sotto forma di stringa JSON
  // una risorsa complessa (array, oggetto)
})
