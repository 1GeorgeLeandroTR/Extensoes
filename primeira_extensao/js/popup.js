$(function(){
	var x= 0;
	$("#name").keyup(function(){
		//Incrementing to chang the color
		x = x +100;
		var color = x.toString(16);
		color = color.padStart(6, "0");
		

		//Changing CSS
		$("#meu").css("background-color", "#"+color);

		//Changing HTML text
		$("#greet").text("Hello "+ $("#name").val());


		//Checking HTML element value
		if($("#name").val() == "George"){
			//Sending message
			chrome.runtime.sendMessage(
				//Im sending this object
				{rules:"Quero biscoito"},

				//I want to execute this function if I receive a response
				function(response){
					alert('E você respondeu: "'+response.resposta);
					//alert(x);
					//alert(color);
			});
		}
		
	});
})

