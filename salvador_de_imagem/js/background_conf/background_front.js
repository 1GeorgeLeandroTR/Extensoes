/*PARTE DO FRONT END*/

//listener do ícone
chrome.browserAction.onClicked.addListener(
 	function(){
    //vai mandar mensagem para a aba
 		chrome.tabs.query(
      {active: true, currentWindow: true},
      function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,
         { action: "mostra" },
         function(response) {});}
    )
 	}
);	
//listener runtime
chrome.runtime.onMessage.addListener( (response, sender,sendResponse)=>{
    //mostra o iframe
    if(response.action == "revelar"){
      document.getElementById("meu").style.visibility = "visible";
      document.getElementById("sair").style.visibility = "visible";
    }
});


//Executa ao carregar a página, no caso, o iframe
window.onload = function () {
    //Ao receber um clique, ele executa essa função
    document.getElementById("sair").onclick = ()=>{
      //alert("clicado");
      document.getElementById("sair").style.visibility = "hidden";
      document.getElementById("meu").style.visibility = "hidden";
      //Aqui está mandando mensagem para a aba
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, { action: "esconde" },function(response) {});
      }) 
    };
}

