class Service{
    constructor(description,price){
        this.description=description;
        this.price=price
    }
}

let ServicesList = [];

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


$('#resgisterService').on('click',function(){
    if(!validateEmpty()){
        let description = $('#inputDescription').val()
        let price = $('#inputPrice').val()
        let service = new Service(description,price)
        ServicesList.push(service)
        //clearInpust()
        console.log(ServicesList)
    }
    else{
        alert('Fill the information')
    }
   

})
