// chrome.runtime.onInstalled.addListener((reason) => {
//   if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({
//       url: 'onboarding.html'
//     });
//   }
// });

chrome.runtime.onMessage.addListener(function(response, sender,sendResponse){
	alert(response);
});

//response = o que recebemos