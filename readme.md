 CONSEGNA
Creare una mini applicazione Vue che ci permetta di visualizzare una semplice ToDo List.
:roccia: 

MILESTONE 0
Create una lista di cose da fare (array di stringhe) e stampatela in pagina, creando un elemento HTML (es. <li>) per ogni elemento dell'array.
:roccia: MILESTONE 1
Aggiungete un <input> il cui value sia collegato ad un data (ricordate come si fa?).
Aggiungete un pulsante che al click stampi quel data in console, poi lo aggiunga all'array precedente.
Come risultato dovreste aver guadagnato la possibilità di aggiungere elementi alla lista visualizzata in pagina.

Ora riuscite a svuotare l'input? :faccia_pensosa:
:roccia: MILESTONE 2
Accanto al testo del ToDo aggiungete una "X", ad esempio con FontAwesome.
Al click su questo elemento il ToDo corrispondente viene rimosso dalla lista.
:regalo: BONUS
Ora provate a gestire invece che delle semplici stringhe degli oggetti con due proprietà: una stringa e un booleano.
{ titolo: "qui scrivo la stringa con il testo", done: true }
Il booleano ci serve a tenere traccia delle attività segnate come "completate".
Attenzione dovrete rivedere anche le varie funzioni scritte fin qui (aggiunta e rimozione todo).
Quando tutto funzionerà nuovamente potete pensare di usare quel booleano "done" per decidere il colore del testo: rosso per i ToDo in corso e verde per quelli completati.
:regalo: BONUS #2
Se avete già svolto il bonus precedente, potete gestire il click sui singoli ToDo. Al click invertirete il booleano, passando il ToDo da svolto a pendente.