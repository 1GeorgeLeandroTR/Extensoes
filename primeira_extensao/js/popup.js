$(function(){
	$("#name").keyup(function(){
		$("#greet").text("Hello "+ $("#name").val());
		if($("#name").val() == "George"){
			chrome.runtime.sendMessage("Faraó");
		}
		//alert("clicou");
	});
})