//Chamo a api de integração com o google drive aqui
//Clique com botão direito
chrome.identity.getAuthToken({ interactive: true }, function (token) {
  try {
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

chrome.identity.getAuthToken({ interactive: true }, function (token) {
  // Use the token.
});

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
