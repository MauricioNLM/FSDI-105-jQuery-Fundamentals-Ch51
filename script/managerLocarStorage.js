function SaveServiceList(serverList){
    localStorage.setItem('servicesList', JSON.stringify(serverList));
}

function GetServicesList(){
    return JSON.parse(localStorage.getItem('servicesList'));
}