
function ignore(){
	const caixa = document.getElementById("caixa");
	const drop = document.getElementById("box-image");
	caixa.addEventListener('dragstart', ()=>{console.log("arrastando")});
	drop.addEventListener('dragover', event=>{
		event.preventDefault(); // previne o comportamento padrão
	});
	drop.addEventListener('drop', ()=>{console.log("dropado")});
}



//Por padrão o navegador já tem um comportamento default pra quando é dropado um elemento
//suponhamos que você arraste uma imagem pro browser, o navegador por padrão vai mostrar 
//a img e não colocar no html 

//Para isso nós podemos cancelar o comportamento, então nós iremos configurar um outro evento dentro do
//nosso drop, iremos configurar o dragover(quando um elemento passa sobre nossa área)
