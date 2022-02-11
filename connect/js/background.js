

//Function to execute when the extension be installed
// chrome.runtime.onInstalled.addListener((reason) => {
//   if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({
//       url: 'onboarding.html'
//     });
//   }
// });

//The chrome.tabs variant sends messages to content scripts, 
//whereas the chrome.extension function sends messages to all other extension components.



//waiting a message
chrome.runtime.onMessage.addListener(
	//I added a callback function
	(response, sender,sendResponse) => {
		//I only execute this part if I receive this object 
		if(response.rules != null){
			alert('Eu disse "'+response.rules+'"');
			//Response that im sending 
			sendResponse({resposta:"Eu também quero"})
		}

		if(response.mudaCor != null){
			//A way to send messages to content
			chrome.tabs.query(
				//Object that im sending
				{active: true, currentWindow: true},
				//Callback function 
				 function(tabs){
				 	chrome.tabs.sendMessage(
				 		//Tab id
				 		tabs[0].id, 
				 		//Message
				 		{action: "open_dialog_box"}, 
				 		//Callback function
				 		function(response) {});
				 		//We could send optional objects too  
			});
			
		}
	}
);

//response = its what we receive