//Só funciona na aba em que foi envocada 
    //Possivel solução é injetar variavel 
    //talvez deixar tudo dentro da mesma função (){tudo}()\

var visibilidade = false;
var executed = false;
function colocar(){
    if(executed == false){
    var iframe = document.createElement('iframe');
    iframe.style.width = "16.25rem";
    iframe.style.background = "#eee";
    iframe.style.height = "17.5rem";
    iframe.style.position = "fixed";
    iframe.style.top = "0px";
    iframe.style.border = "none";
    iframe.style.right = "0px";
    iframe.style.zIndex = "99999999999999999";    
    iframe.id = "meu-frame";
    iframe.src = chrome.runtime.getURL("../templates/popup.html");
    document.body.appendChild(iframe);
    executed = true;
    }
};

const apaga = ()=>{
      var iframe = document.getElementById("meu-frame");
      iframe.style.visibility = "hidden";
      iframe.parentNode.removeChild(iframe);
      executed = false;
};

function mostra(){
  var iframe = document.createElement("iframe");
  iframe.style.visibility = "visible";
}

chrome.runtime.onMessage.addListener(
    (response, sender,sendResponse) => {
        if (response.action == "mostra"){
          if(visibilidade == false){
            colocar();
          }
          else{
            colocar();
          }
        }
        if(response.action == "esconde"){
            visibilidade = true;
            apaga();
        }
    }
);
