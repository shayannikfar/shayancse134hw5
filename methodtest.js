window.addEventListener(`DOMContentLoaded`, init);
function init(){
    document.getElementById("get").addEventListener("click",Getfunction);
    document.getElementById("post").addEventListener("click",Postfunction);
    document.getElementById("put").addEventListener("click",Putfunction);
    document.getElementById("delete").addEventListener("click",Deletefunction);
    console.log(`Initialized at ${new Date()}`);


}

export function Getfunction(){
    console.log(`get function started`);
    const xhr = new XMLHttpRequest(); 
    var resp = document.getElementById("response");
    xhr.onload = function(){
        resp.innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 4);
    }
    xhr.open(`GET`, `https://httpbin.org/get`);
    xhr.send(new FormData(document.getElementById("act")));
    
}

export function Postfunction(){
    console.log(`post function started`);
    const xhr = new XMLHttpRequest(); 
    var resp = document.getElementById("response");
    xhr.onload = function(){
        resp.innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 4);
    }
    xhr.open(`POST`, `https://httpbin.org/post`);
    xhr.send(new FormData(document.getElementById("act")));
    

}

export function Putfunction(){
    console.log(`put function started`);
    const xhr = new XMLHttpRequest(); 
    var resp = document.getElementById("response");
    xhr.onload = function(){
        resp.innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 4);
    }
    xhr.open(`PUT`, `https://httpbin.org/put`);
    xhr.send(new FormData(document.getElementById("act")));
}
export function Deletefunction(){
    console.log(`delete function started`);
    const xhr = new XMLHttpRequest(); 
    var resp = document.getElementById("response");
    xhr.onload = function(){
       resp.innerHTML = JSON.stringify(JSON.parse(xhr.responseText), null, 4);
    }
    xhr.open(`DELETE`, `https://httpbin.org/delete`);
    xhr.send(new FormData(document.getElementById("act")));
}