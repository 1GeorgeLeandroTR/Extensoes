//Chamo a api de integração com o google drive aqui
//Clique com botão direito
//    <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://platform.linkedin.com ">
var scripto = document.createElement('script');
scripto.type = "text/javascript";
scripto.async = true;
scripto.defer = true;
//scripto.src = "https://apis.google.com/js/platform.js?onload=init";

// var equiv = document.createElement('meta');
// equiv.httpEquiv = "Content-Security-Policy";
// equiv.content = "default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com/js/platform.js "


//const java = fetch("https://apis.google.com/js/platform.js?onload=init");


document.getElementsByTagName('head')[0].appendChild(scripto);
//document.getElementsByTagName('head')[0].appendChild(equiv);



//eval(java);
//onload="this.onload=function(){};handleClientLoad()"
//onreadystatechange="if (this.readyState === 'complete') this.onload()"


chrome.identity.getAuthToken({ interactive: true }, function (token) {
  try {
     debugger;
    foo();

    console.log("rodou");
    onload="this.onload=function(){};handleClientLoad()"
    onreadystatechange="if (this.readyState === 'complete') this.onload()"
    // init();

    console.log(token);
    chrome.identity.getProfileUserInfo((userinfo) => {
      //debugger;
      //console.log("userinfo", userinfo.email);
      email = userinfo.email;
      uniqueId = userinfo.id;
    });
    requestCurl(token);
  } catch (e) {
    console.log(e.message);
  }
});
//Em teoria, devia funcionar assim
function init() {
  gapi.load('auth2', function() {
    /* Ready. Make a call to gapi.auth2.init or some other API */
    try{
    gapi.auth2.init({ client_id: "267660766780-bjg22pjtlln6doft4r5uqnd4bmu6jpgr.apps.googleusercontent.com", cookie_policy: window.location.origin});
    }
    catch(err){
      console.log("ERRO NO INIT: "+err.stack)
    }
    //var instancia = gapi.auth2.getAuthInstance();
    console.log("VALOR DA INSTANCIA: "+gapi.auth2.getAuthInstance())
  });
}

//Fazendo requisição na api baseado no curl
function requestCurl(token) {
  var url =
    "https://www.googleapis.com/drive/v3/files?key=AIzaSyBBAs4j9pDzDXzN59MieIuWUsaeyGHrxt4";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.setRequestHeader("Authorization", "Bearer " + token);
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  };

  xhr.send();
}

var menuItem = {
  id: "image_saver",
  title: "Salvar Imagem",
  contexts: ["all"],
  type: "normal",
};

var menuLocal = {
  id: "local",
  title: "Local",
  parentId: "image_saver",
  contexts: ["all"],
  type: "normal",
};

try {
  chrome.contextMenus.onClicked.addListener(function () {
    //vai mandar mensagem para a aba
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "menu" },
        function (response) {
          alert("resposta recebida:" + response.endereco);
        }
      );
    });
  });

  chrome.contextMenus.create(menuItem);
  chrome.contextMenus.create(menuLocal);
} catch (e) {}


async function foo() { 
 
  reuq = fetch("https://apis.google.com/js/platform.js").then(response => {
        console.log("STATUS AQUI: "+ response.statusText);
        return response.text();
    })
  
  scripto.textContent = await reuq;
  eval(scripto);
  init(); 


  //var kk = await reuq;
  //console.log("VALOR ASYNC: "+Object.getOwnPropertyNames(kk))
}

var opa = "vazio"