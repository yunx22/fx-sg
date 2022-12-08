var preLoad;
function loaderFunc() {
	preLoad = setTimeout(showPage, 2100);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("mainBlock").style.display = "block";
}