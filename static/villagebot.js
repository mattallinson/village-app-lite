//prints an array of names as a list
function print_list(array){
		let text = "";
		let al = array.length;
		for (let i = 0; i < al; i++) {
			text = "<li>" + array[i] + "</li>" + text;
		}
		document.getElementById("output").insertAdjacentHTML(
			'afterbegin',text);
	}

//take names from the list for a given temperature
function generateNames(){
	var user_temp = document.getElementById("temp").value
	let filename = "../lists/json/temp"+user_temp+".json"
	fetch(filename)
	.then(data=>data.json())
	.then(x=>_.sample(x,5))
	.then(y=>print_list(y))
}

//tooltips
var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(
	function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})