var $ = function(id) {
	return document.getElementById(id);
};

var total = 0.0;

window.onload = function() {

	//add onclick event handler for each image
	var espImg = $('espresso');
	var cappImg = $('cappuccino');

	espImg.setAttribute('onclick', "addToOrder('espresso')");
	cappImg.setAttribute('onclick', "addToOrder('cappuccino')");
		
}; // end onload

// for click event add item to order and update total
function addToOrder(item) {
	let orderText = ''
	
	if (item === "espresso") {
		total += 1.95;
		orderText = '$1.95 - Espresso - Delicious espresso. Wanna try it?'
	} else if (item === "cappuccino") {
		total += 3.45;
		orderText = '$3.45 - Cappuccino - Delicious Cappuccino!'
	}

	const order = $('order');
	const paragraph = document.createElement('p');

	const text = document.createTextNode(orderText);
	paragraph.appendChild(text);

	order.appendChild(paragraph)

	const totalField = $('total')
	totalField.innerHTML = "<em>&nbsp;Total: $" + total.toFixed(2) + "</em>"

}