function fetch (url,callbackRes){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const response = JSON.parse(xhr.responseText);
                callbackRes(response.result); 
            }
        }
    }
    xhr.open('GET' ,url);
    xhr.send();
}
