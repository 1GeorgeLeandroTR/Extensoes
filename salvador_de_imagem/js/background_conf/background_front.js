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

//Executa ao carregar a página, no caso, o iframe
window.onload = function () {
    //Ao receber um clique, ele executa essa função
    document.getElementById("sair").onclick = ()=>{
      //Aqui está mandando mensagem para a aba
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, { action: "esconde" },function(response) {});
      }) 
    };
}

