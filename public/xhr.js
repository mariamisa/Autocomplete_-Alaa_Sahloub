const { handleError } = require("../src/handler");

function fetch (url,cb){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const response = JSON.parse(xhr.responseText);
                cb(null,response); 
            }
            else{
                cb(xhr.responseText)
            }
        }
    }
    xhr.open('GET' ,url);
    xhr.send();
}
