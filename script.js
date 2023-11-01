document.getElementById("search").addEventListener ("click", () => {
    displayCharacter(); 
});

async function displayCharacter (){
    const characterName = document.getElementById("character").value;
    const character = await getCharacter(characterName);       
    addCharacterUI(character);
}

async function getCharacter (name) {
    try {
        const response = await fetch (`https://rickandmortyapi.com/api/character/${name}`);
        if (response.status ===404)  {        
            messageUI(`Character #${name} Doesn't Exist`);                                      
            return;
        }         
        return await response.json();
        } catch (e) {            
            messageUI("Bad Connection! Try Again");        
        }
}

function addCharacterUI (character) {    
    const characterList = document.getElementById('character-container');
    const element = document.createElement("div");
    element.innerHTML = `
    <strong> id: </strong> ${character.id}
    <br>
    <strong> name: </strong> ${character.name}  
    <br>
    <strong> status: </strong> ${character.status}
    <br>
    <strong> species: </strong> ${character.species}   
    <br>
    <strong> gender: </strong> ${character.gender}
    <br>
    <br>    
    `;
    characterList.appendChild(element);
} 

  function messageUI(message) {
    const mes = document.getElementById('character-container');
    const element = document.createElement("div");    
    element.innerHTML = `<h2> ${message} </h2>`; 
    mes.appendChild(element);    
  }