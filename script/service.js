class Service{
    constructor(description,price){
        this.description=description;
        this.price=price
    } 
}

let ServicesList = [];

function init(){
    $('.priceValidationMsg').hide();
    $('.descriptionValidationMsg').hide();
}
function clearInpust(){
    $('#inputDescription').val('')
    $('#inputPrice').val('')
}

function validateEmpty(){
    let response = false;
    let description = $('#inputDescription').val();
    let price = $('#inputPrice').val()
    if(description == '' || price == '' ){
        response = true;
    }

    return response
}

function isValidService(service){
    let validedDescription = true;
    let validedPrice = true;

    if(service.description == ''){
        validedDescription = false;
        $('.descriptionValidationMsg').css('color','red').show();
    }
    else{
        $('.descriptionValidationMsg').hide();
    }
    if(service.price == ''){
        validedPrice = false;
        $('.priceValidationMsg').css('color','red').show();
    }
    else{
        $('.priceValidationMsg').hide();
    }

    return validedPrice & validedDescription
}

$('#resgisterService').on('click',function(){
    if(!validateEmpty()){
        let description = $('#inputDescription').val()
        let price = $('#inputPrice').val()
        let service = new Service(description,price)
        if(isValidService(service)){
            saveService(service)
        }
            
        // ServicesList.push(service)
            //clearInpust()
        // console.log(ServicesList)
        
        
    }
    else{
        alert('Fill the information')
    }
})

window.onload = init;
