const precioEnvio1 = 1.05
const precioEnvio2 = 1.10
let compraTotal = parseFloat(prompt("Ingresar el valor total de la compra"))
function calcularEnvio(compraTotal, envio){
	return compraTotal * envio
}
if (compraTotal < 25000){
	console.log("Envios disponibles solo en compras mayores de 25.000")
}
else if(compraTotal <= 50000){	
	console.log(compraTotal * precioEnvio1)	
}
else if(compraTotal > 50001){
	console.log(compraTotal * precioEnvio2)
}





