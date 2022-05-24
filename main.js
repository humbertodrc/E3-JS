
const nombrePizza = document.querySelector("#nombrePizza");
const precioPizza = document.querySelector("#precioPizza");
const formulario = document.querySelector("#formulario");
const idPizza = document.querySelector("#idPizza");

const pizzas = [
	{
		id: 1,
		nombre: "Pepperoni",
		ingredientes: ["pepperoni", "queso", "tomate", "pimenton", "harina"],
		precio: 800,
	},
	{
		id: 2,
		nombre: "Hawaiana",
		ingredientes: ["queso", "tomate", "cebolla", "pimenton", "piña", "harina"],
		precio: 900,
	},
	{
		id: 3,
		nombre: "Vegetariana",
		ingredientes: ["tomate", "cebolla", "rucula", "pimenton", "harina"],
		precio: 700,
	},
	{
		id: 4,
		nombre: "Napolitana",
		ingredientes: ["queso", "tomate", "cebolla", "pimenton", "jamon", "harina"],
		precio: 1000,
	},
	{
		id: 5,
		nombre: "4 quesos",
		ingredientes: ["mozzarella", "parmesano", "cheddar", "provolone", "harina"],
		precio: 1200,
	},
	{
		id: 6,
		nombre: "Mozzarella",
		ingredientes: ["mozzarella", "tomate", "harina"],
		precio: 500,
	},
];


formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	const idPizzaBuscar = parseInt(idPizza.value);
	const pizzaEncontrada = pizzas.filter((pizza) => pizza.id === idPizzaBuscar);
	if (pizzaEncontrada.length > 0) {
		nombrePizza.textContent = pizzaEncontrada[0].nombre;
    precioPizza.textContent = pizzaEncontrada[0].precio;
    nombrePizza.style.color = "#fff";
	} else {
    nombrePizza.textContent = "No se encontro la pizza";
    nombrePizza.style.color = "#ff0000";
		precioPizza.textContent = "";
	}
});