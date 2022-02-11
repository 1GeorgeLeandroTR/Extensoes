// Não tem jeito, vou ter que criar um server, conectar a API por ele e então pegar dados através de requisições
//direto no server
var CLIENT_ID = '267660766780-qc87vqg9qh7u7dsr09q1vlcf9tt2pmke.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBBAs4j9pDzDXzN59MieIuWUsaeyGHrxt4';

function init() {
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: '267660766780-qc87vqg9qh7u7dsr09q1vlcf9tt2pmke.apps.googleusercontent.com'
    })
  }); 
}

try{
	alert(gapi.auth2.BasicProfile.getId());
}
catch(e){
	alert(e.message)
}
      

