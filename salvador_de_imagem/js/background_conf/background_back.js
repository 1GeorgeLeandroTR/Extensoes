//Chamo a api de integração com o google drive aqui


//Clique com botão direito
var menuItem = {
    "id": "image_saver",
    "title": 'Salvar Imagem',
    "contexts": ["all"], 
    "type": "normal"
  };

var menuLocal = {
    "id": "local",
    "title": "Local",
    "parentId":"image_saver",
    "contexts": ["all"], 
    "type": "normal"
  };

chrome.contextMenus.onClicked.addListener(
	function(){
    //vai mandar mensagem para a aba
 		chrome.tabs.query(
      {active: true, currentWindow: true},
      function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,
         { action: "menu" },
         function(response) {});}
    )
 	}
);

chrome.contextMenus.create(menuItem);
chrome.contextMenus.create(menuLocal);