
var Tienda_Super = require('./datos/Tienda_Super.js'),
	Operaciones = require('./datos/usuariosCRUD.js');
	OpArticulos = require('./datos/articulosCRUD.js');
	
Operaciones.eliminarUsuario((error, result) => {
	if(error) console.log(error);
	else{
		console.log(result);
		Operaciones.insertarUsuario((error, result) => {
			if(error) console.log(error);
			console.log(result);
		});
	}
});

OpArticulos.eliminarAllArticulos((error, result) => {
	if(error) console.log(error);
	else {
		console.log(result);
		var articulos = [
			{nombre: "Aguacate", img: "aguacate.jpg", precio: "2565.00", stock: "46"},
			{nombre: "Ajo", img: "ajo.jpg", precio: "1000.00", stock: "75"},
			{nombre: "Almendras", img: "almendras.jpg", precio: "2000.00", stock: "28"},
			{nombre: "Arándanos", img: "arandanos.jpg", precio: "4000.00", stock: "39"},
			{nombre: "Brócoli", img: "brocoli.png", precio: "3000.00", stock: "45"},
			{nombre: "Calabaza", img: "calabaza.jpg", precio: "2600.00", stock: "40"},
			{nombre: "Canela", img: "canela.jpg", precio: "2400.00", stock: "20"},
			{nombre: "Cebolla", img: "cebolla.jpg", precio: "4000.00", stock: "30"},
			{nombre: "Fresa", img: "fresa.jpg", precio: "2000.00", stock: "50"},
			{nombre: "Kiwi", img: "kiwi.jpg", precio: "3000.00", stock: "36"},
			{nombre: "Limón", img: "limon.jpg", precio: "1500.50", stock: "70"},
			{nombre: "Lychee", img: "lychee.jpg", precio: "5000.00", stock: "80"},
			{nombre: "Maiz", img: "maiz.jpg", precio: "2000.50", stock: "40"},
			{nombre: "Manzana", img: "manzana.jpg", precio: "3000.40", stock: "39"},
			{nombre: "Naranja", img: "naranja.jpg", precio: "3200.00", stock: "60"},
			{nombre: "Papa", img: "papa.jpg", precio: "3500.50", stock: "60"},
			{nombre: "Pasta", img: "pasta.jpg", precio: "2500.50", stock: "47"},
			{nombre: "Pimienta", img: "pimienta.jpg", precio: "35000.80", stock: "70"},
			{nombre: "Repollo", img: "repollo.jpg", precio: "4500.50", stock: "67"},
			{nombre: "Tomate", img: "tomate.jpg", precio: "2800.80", stock: "78"},
			{nombre: "Zanahoria", img: "zanahoria.jpg", precio: "2600.80", stock: "58"}
		]
		for (var i = 0; i < articulos.length ; i++) {
			var articulo = articulos[i];
			OpArticulos.insertarArticulo(articulo, (error, result) => {
				if(error) console.log(error);
				console.log(result);
			});
		}
	}
});