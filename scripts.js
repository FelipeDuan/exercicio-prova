const btn = document.querySelector(".btn");

const paragrafo = document.getElementById("paragrafo");

function handleClick(e) {
	e.preventDefault();
	paragrafo.style.color = "blue";
	paragrafo.style.textDecoration = "underline";
}

btn.addEventListener("click", handleClick);
