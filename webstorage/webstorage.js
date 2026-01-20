// quando si parla di "webstorage" si intendono le due "memorie" standardizzate presenti ormai
// in tutti i browser moderni:
// - localStorage
// - sessionStorage

// queste memorie nascono con l'introduzione di HTML5 al fine di fornire ai browser una
// sorta di "memoria locale" adatta a contenere piccoli frammenti di informazioni (entrambe
// hanno una capacità di 5MB) per migliorare le esperienze utente o memorizzare login e in
// generale informazioni NON cruciali. Sono una sorta di evoluzione rispetto alla precedente
// tecnologia per salvare piccole informazioni nei client, ovvero i "cookies"; la loro limitazione
// più importante è quella di non avere internamente il concetto di "sessione".

// localStorage e sessionStorage condividono le stesse metodologie di utilizzo via JS, e sono
// liberamente esplorabili anche da browser; la loro principale differenze è che mentre un
// dato memorizzato nel localStorage vive a tempo indeterminato, un'informazione salvata
// nel sessionStorage ha una durata prefissata: verrà eliminato alla prima chiusura del tab.

// dal punto di vista pratico, il loro utilizzo è semplice e "speculare": esistono
// metodi integrati in JS per la loro fruizione

// setItem è un metodo che SALVA un nuovo valore nel localStorage (o sovrascrive uno esistente)
localStorage.setItem('user', 'Stefano')
// sessionStorage.setItem('user', 'Stefano')

// getItem è un metodo che RECUPERA un valore esistente e lo restituisce in JS
const yourName = localStorage.getItem('user') // ottengo 'Stefano'

// removeItem è un metodo che ELIMINA una coppia chiave:valore dalla memoria
localStorage.removeItem('user')

// clear è un metodo che ELIMINA TUTTE LE COPPIE CHIAVE:VALORE da quella tabella
localStorage.clear()
