$(function(){
	var x= 0;
	$("#name").keyup(function(){
		//Incrementing to chang the color
		x = x +225;
		var color = x.toString(16);
		color = color.padStart(6, "0");
		//Changing CSS
		$("#meu").css("background-color", "#"+color);

		//Changing HTML text
		$("#greet").text("Hello "+ $("#name").val());

		//Checking HTML element value
		if($("#name").val() == "George"){

			//Sending message to Background
			chrome.runtime.sendMessage(
				//extension id
				chrome.runtime.id,
				//Im sending this message
				{rules:"Quero biscoito"},

				//I want to execute this function if I receive a response(callback function)
				function(response){
					alert('E você respondeu: "'+response.resposta);
					//alert(x);
					//alert(color);
			});
		}		
	});

	if($("#cor").click(() => {
				//Sending message to background
				chrome.runtime.sendMessage({mudaCor:"red"});
				//Changing popups background-color
				$("body").css("background-color", "pink");
			}
		));
})

