//Chamo a api de integração com o google drive aqui
//Clique com botão direito

var scripto = document.createElement('script');
scripto.type = "text/javascript";
scripto.async = true;
scripto.defer = true;
scripto.src = "https://apis.google.com/js/platform.js?onload=init";


document.getElementsByTagName('head')[0].appendChild(scripto);
eval(scripto);

onload="this.onload=function(){};handleClientLoad()"
onreadystatechange="if (this.readyState === 'complete') this.onload()"
//-------------------
chrome.identity.getAuthToken({ interactive: true }, function (token) {
  try {
    debugger;
    onload="this.onload=function(){};handleClientLoad()"
    onreadystatechange="if (this.readyState === 'complete') this.onload()"
    init();

    alert(token);
    chrome.identity.getProfileUserInfo((userinfo) => {
      //debugger;
      //alert("userinfo", userinfo.email);
      email = userinfo.email;
      uniqueId = userinfo.id;
    });
    requestCurl(token);
  } catch (e) {
    alert(e.message);
  }
});

function init() {
  gapi.load('auth2', function() {
    /* Ready. Make a call to gapi.auth2.init or some other API */
    gapi.auth2.init("267660766780-bjg22pjtlln6doft4r5uqnd4bmu6jpgr.apps.googleusercontent.com");
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
      alert(xhr.status);
      alert(xhr.responseText);
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
