## ESERCIZIO

Dato un array contenente una lista di cinque immagini, creare un carosello.


**MILESTONE 1**
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.

Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

**MILESTONE 2**

Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

**BONUS:**

Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.


### SOLUZIONE

#### Raccolta Dati

1. Creare un array contenente le immaggini
2. Inserire le immagini in modo dinamico all'interno del file HTML

#### Iterazione

1. Creo un ciclo for
2. A ogni iterazione creare elemento immagine
3. Chiusura ciclo for

#### Visualizzazione

1. Mostrare immagine di partenza con classe "active"
2. Impostare variabile Immagine Corrente

#### Event Listener

1. Al click della freccia sotto: 

    
    SE indice immagine corrente < lunghezza array - 1 

            Togliere la classe "active" da elemento corrente 
            Incremento i
            Aggiungere classe "active" al nuovo elemento

    ALTRIMENTI SE indice immagine corrente === lunghezza array - 1 

            Togliere la classe "active" da elemento corrente
            Imposto indice = 0
            Aggiungere classe "active" al nuovo elemento


2. AL click della freccia sopra:


    SE indice immagine corrente > 0 

            Togliere la classe "active" da elemento corrente
            Decremento i 
            Aggiungo  classe "active" al nuovo elemento
    
    ALTRIMENTI SE  immagine corrente === 0

            Togliere la classe "active" da elemento corrente
            Imposto indice = lunghezza array - 1
            Aggiungo  classe "active" al nuovo elemento 