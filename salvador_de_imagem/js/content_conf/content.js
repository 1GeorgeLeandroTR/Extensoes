var visibilidade = false;
var executed = false;
var focado = null;

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
        if(response.action == "menu"){
           procuraImg();
        }

    }
);

//Função pra percorrer os elementos filhos de um elemento pai html quando achar um elemento img ele
// retorna o src da imagem
function procuraImg(){
    var child = document.activeElement;
    try{
        if (focado.tagName == "IMG") {
            console.log(focado.src);
            return;
        }
    }
    catch(e){
        while(child.tagName != 'IMG'){
            if(child.children[0].tagName == 'IMG'){
                console.log(child.children[0].src);
                break;
            }
            child = child.children[0];
        }
    }
}

//Possibilita o foco em todas as imagens da página
elements = document.getElementsByTagName("*");
for (let item of elements) {
    if(item.tagName == "IMG"){
        item.onmouseover = ()=>{ 
            item.focus();
            focado = item;
        }
    }
}