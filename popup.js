$(document).ready(function() {
	chrome.runtime.sendMessage({onClicked: true}, responseCallback);
	$(document).keypress(function(e) { 
		if (e.keyCode == 13)
			displayMap();
	});
	$("#directionsButton").click(displayMap);
});

function responseCallback(response) {
	if (response.origin) {
		$("#origin-input")[0].value = response.origin;
	}
	if (response.destination) {
		$("#destination-input")[0].value = response.destination;
	}
}

function displayMap() {
	var mapDiv = $("#map")[0];
	mapDiv.setAttribute("height", "500");
	mapDiv.setAttribute("width", "500");
	var srcAttribute = document.createAttribute("src");
	srcAttribute.value = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyDemdTKRlYMUKo29J4fNqnAmkgmEiK_AnA&origin=Lincoln+Park+Zoo,+North+Clark+Street,+Chicago,+IL&destination=Willis+Tower,+South+Wacker+Drive,+Chicago,+IL";
	mapDiv.setAttributeNode(srcAttribute);
}