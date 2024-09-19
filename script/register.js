
class Pet {
    age;
    gender;
    breed;
    service;
    constructor(name, type = 'Basic') {
        this.name = name;
        this.type = type;
    }
}


console.log("Helo Word")

let pets = [];

function initregister(){
    
    displayRows()
    getServices()
}

// let cat = {
//     name:"Michi",
//     age:"5",
//     gender:"M",
//     breed:"siames"
// } 

// let dog = {
//     name:"Black",
//     age:"8",
//     gender:"M",
//     breed:"pastor "
// } 

// document.write(cat.name)
// document.write(dog.name)

// pets.push(cat,dog)

let cat = new Pet('michi');
cat.age=5;
cat.gender='M';
cat.service='Grooming';

let dog = new Pet('black');
dog.age = 9;
dog.gender='F';
dog.service='Nails';

pets.push(cat,dog)

function displayPets(array)
{
    console.log("Total pets = "+array.length);
    for(let i=0;i<array.length;i++){
        console.log(array[i].name)
    }
    document.getElementById('totalPets').innerHTML = array.length;
}





displayPets(pets)

function Restister(){
    let name = document.getElementById('namePet').value
    let pet = new Pet(name);

    pet.age = document.getElementById('agePet').value
    pet.gender = document.getElementById('genderPet').value
    pet.breed = document.getElementById('breedPet').value
    pet.service = document.getElementById('servicePet').value
    pet.type = document.getElementById('typeSer').value



    if(validationNotNull(pet)){
        pets.push(pet)
        //displaycards()
        displayRows()
        displayPets(pets)
    }
    else{
        alert("Fill the information")
    }
    
}

function deletePet(petId){
    debugger
    document.getElementById(petId).remove()
    console.log("Delete the pet "+petId.split('-')[1])
    pets.splice(petId.split('-')[0],1)
    displayPets(pets)
}

function validationNotNull(pet){
    let response = true;

    if(pet.name == "" || pet.age == "" ){
        response = false;
    }

    return response;
}

function displayRows(){
    const table = document.getElementById('tablePets');
    table.innerHTML='';

    for(let i=0;i<pets.length;i++){
        table.innerHTML += `
        <tr id="${i}-${pets[i].name}">
            <td>${pets[i].name}</td>
            <td>${pets[i].age}</td>
            <td>${pets[i].gender}</td>
            <td>${pets[i].service}</td>
            <td><button class="btn btn-success" onclick="deletePet('${i}-${pets[i].name}')">Delte</button></td>
        </tr>
        `
    }
}

function search(){
    nameSearch = document.getElementById('inpSearch').value
    let petSerch = null;
    let id = null;
    for(let i=0;i<pets.length;i++){
        debugger
        if(pets[i].name.toLowerCase() == nameSearch.toLowerCase()){
            petSerch =   pets[i];
            id = i;
            break;   
        }
    }


    if(petSerch){
        displayRows();
        document.getElementById(`${id}-${petSerch.name}`).classList.add('lookup')
    }
    
}

function getServices(){
    let services = read();
    let option;
    debugger
    // servicesSelect.innerHTML = '';
    for(let i =0;i<services.length;i++){
        option +=`<option value="${services[i].description}">${services[i].description}</option>`
    }

    $('#servicePet').append(option)
}

window.onload = initregister