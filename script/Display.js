function displaycards(){
    const CARDS = document.getElementById('displayCardsPet')
    CARDS.innerHTML = '';
    for(let i=0;i<pets.length;i++){
        
        CARDS.innerHTML += `
        <div class="pet-container">
            <label>Name: </label><p>${pets[i].name}</p>
            <label>Age: </label><p>${pets[i].age}</p>
        </div>`
    }
}