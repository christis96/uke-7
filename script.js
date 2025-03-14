const app = document.getElementById('app');
let savedInput = '';
const filter = {
    shouldContain:["@", "."] ,
    shouldNotContain:[" "]
} 
    





updateVeiw();
function updateVeiw() {
    app.innerHTML = /*HTML*/`
    <input type="text" placeholder= "Epostadresse" onchange = "saveEmail(this.value)">
    <div>${checkIfEmail(savedInput) ?? ''}</div>
    `;
};





function saveEmail(inputText) {
    savedInput = inputText
    updateVeiw();
};


function checkIfEmail(inputText) {
    let index = 0;
    let atIndex = -1; //Dette er for å senere sjekke om denne verdien har endret seg, slik at vi vet om @ er i inputText
    for (char of inputText) {
        if (char == filter.shouldContain[0] && atIndex == -1) {  //den ekstra sjekken er for å passe på at vi kun setter atIndex en gang
            atIndex = index;
            console.log('Fant @ på index', atIndex)
           
        }
        if( char === filter.shouldNotContain[0]){
            return "Ingen Email!"
        }
        if (atIndex !== -1 && index === atIndex + 1 && char === filter.shouldContain[1]) { //sjekker om atIndex har endret seg, at vi er på index'en etter @, og om elementet er "."
            console.log("Punktum er rett etter alfakrøll!");
            return "Email!";
        }
        index++;
    
    }
    

    return "Ingen Email!"
    
};

