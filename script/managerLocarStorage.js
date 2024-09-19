function SaveServiceList(serverList){
    localStorage.setItem('servicesList', JSON.stringify(serverList));
}

function GetServicesList(){
    return JSON.parse(localStorage.getItem('servicesList'));
} 



function saveService(service){
    let servicesList = read();

    servicesList.push(service)

    localStorage.setItem('servicesList', JSON.stringify(servicesList));
}

function read(){
    let data = localStorage.getItem('servicesList');
    if(!data){
        return [];
    }else{
        let list = JSON.parse(data);
        return list;
    }
}