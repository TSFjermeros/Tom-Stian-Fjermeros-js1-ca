const timeoutContainer = document.querySelector("p.banana");

function updateDiv() {
	timeoutContainer.innerHTML =
		"Today, with the rise of REST and web services over HTTP, banana term is often assumed to refer to APIs of such services when given no other context.";
}

setTimeout(updateDiv, 3000);

const timeoutContainer = document.querySelector("p.orange");

function updateDiv() {
	timeoutContainer.innerHTML =
		"Banana term API is, by extension, used to refer to the subset of software entities (code, subcomponents, modules, etc.) that serve to actually implement the API of some encompassing component or system.";
}

setTimeout(updateDiv, 3000);
