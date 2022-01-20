//Function to execute when the extension be installed
// chrome.runtime.onInstalled.addListener((reason) => {
//   if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({
//       url: 'onboarding.html'
//     });
//   }
// });



//waiting a message
chrome.runtime.onMessage.addListener(
	//I added a callback function
	(response, sender,sendResponse) => {
		//I only execute this part if I receive this object 
		if(response.rules !== null){
			alert('Eu disse "'+response.rules+'"');

			//Response that im sending 
			sendResponse({resposta:"Eu também quero"})
		}
	}
);

//response = o que recebemos