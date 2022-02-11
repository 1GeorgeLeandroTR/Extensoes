import {gapi} from "gapi.js"
//document.getElementsByTagName('title')[0].innerText= "uuuuuoooooo";
//chrome.runtime.sendMessage(document.getElementsByTagName('title')[0].innerText) ;


//Listener em content não funciona
chrome.runtime.onMessage.addListener(
		//I added a callback function
		(response, sender,sendResponse) => {
			alert("Recebido mensagem genérica");
			if(response.action != null){
				alert("recebido mensagem especifica");
				//alert("id da extensão: "+chrome.runtime.id)
				document.body.style.backgroundColor= "#8E8E8E";
			}
		}
	);

//Acho que é possível fazer alterações através de callbacks 