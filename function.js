

function data_get(key){
    let get = localStorage.getItem(key);
    return JSON.parse(get) ? JSON.parse(get) : [];
}
function datasend(key,data){
   let json = JSON.stringify(data);
   return localStorage.setItem(key,json)
}