//Só funciona na aba em que foi envocada 
    //Possivel solução é injetar variavel 
    //talvez deixar tudo dentro da mesma função (){tudo}()\

var visibilidade = false;

function colocar(){
    var iframe = document.createElement('iframe');
    iframe.style.width = "16.25rem";
    iframe.style.background = "#eee";
    iframe.style.height = "17.5rem";
    iframe.style.position = "fixed";
    iframe.style.top = "0px";
    iframe.frameBorder= 1;
    iframe.id = "meu-frame";
    iframe.style.right = "0px";
    iframe.style.zIndex = "1000000000000000";
    iframe.frameBorder = "solid";
    /* end of settings */
    iframe.src = chrome.runtime.getURL("../templates/popup.html");
    //iframe.body.addEventListener('mouseup', Handler);
    document.body.appendChild(iframe);
    //window.addEventListener("click",()=>{apaga()},false )
};

function apaga(){
      var iframe = document.getElementById("meu-frame");
      iframe.style.visibility = "hidden";

};

function mostra(){
  var iframe = document.getElementById("meu-frame");
  iframe.style.visibility = "visible";
}

chrome.runtime.onMessage.addListener(
    (response, sender,sendResponse) => {
        if (response.action == "mostra"){
          if(visibilidade == false){
            colocar();
          }
          else{
            mostra();
          }
        }
        if(response.action == "esconde"){
            visibilidade = true;
            apaga();
        }
    }
);
