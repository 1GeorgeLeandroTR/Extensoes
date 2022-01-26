var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

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
    document.body.appendChild(iframe);
    //window.addEventListener("click",()=>{apaga()},false )
};


// detecta o clique em uma janela normal mas nao como extensao
function apaga(){
      alert("clicou");

};

function toggle_iframe() {
  if (iframe.style.width == "0px"){
    iframe.style.width="250px";
 
  } else {
    iframe.style.width="0px";
  }
}

chrome.runtime.onMessage.addListener(
    (response, sender,sendResponse) => {
        if (response.action == "mostra"){
          if(visibilidade == false){
            colocar();
            toggle_iframe();//Nem usa
          }
          else{
            chrome.runtime.sendMessage({action:"revelar"})
          }
          
        }
        if(response.action == "esconde"){
            visibilidade = true;
        }

    }
);
