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

    iframe.id = "meu-frame";
    iframe.style.right = "0px";
    iframe.style.zIndex = "1000000000000000";
    /* end of settings */
    iframe.src = chrome.runtime.getURL("../templates/popup.html");
    document.body.appendChild(iframe);
};

function apaga(){
      var iframe = document.getElementById("meu-frame");
      iframe.style.visibility = "hidden";
      iframe.parentNode.removeChild(iframe);

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
