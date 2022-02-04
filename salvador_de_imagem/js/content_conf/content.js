//Só funciona na aba em que foi envocada 
    //Possivel solução é injetar variavel 
    //talvez deixar tudo dentro da mesma função (){tudo}()\
//Não consigo fazer o drag and drop de extensão aparentemente por causa da politica de cross origin

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
    //Se for usar div ao invés de iframe
    // var request = makeHttpObject();
    // request.open("GET", chrome.runtime.getURL("../templates/popup.html"), true);
    // request.send(null);
    // request.onreadystatechange = function() {
    //   if (request.readyState == 4)
    //     iframe.innerHTML = '<object type="text/html" data="'+chrome.runtime.getURL("../templates/popup.html")+'" ></object>';
    // };
    document.body.appendChild(iframe);
    executed = true;
    }
};


function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}

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
           // dropIt(); 
          }
          else{
            colocar();
           // dropIt();
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

//Farei aqui uma função pra percorrer os elementos filhos de um elemento pai html
    //Quando achar um elemento img ele retorna o src da imagem
function procuraImg(){

    var child = document.activeElement;
    try{
        if (focado.tagName == "IMG") {
            console.log("é uma img")
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

//função de drag and drop que por enquanto não dá pra usar
function dropIt(){
    const caixa = document.getElementById("caixa");
    const drop = document.getElementById("box-image");
    caixa.addEventListener('dragstart', ()=>{console.log("arrastando")});
    drop.addEventListener('dragover', event=>{
        event.preventDefault(); // previne o comportamento padrão
    });
    drop.addEventListener('drop', ()=>{console.log("dropado")});
}


elements = document.getElementsByTagName("*");
for (let item of elements) {
    if(item.tagName == "IMG"){
        item.onmouseover = ()=>{ 
            item.focus();
            console.log(item);
            focado = item;
            console.log("O ITEM:"+focado.tagName)

        }
    }
}