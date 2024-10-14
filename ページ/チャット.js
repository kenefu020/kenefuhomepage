const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    add();
});

function add() {
let chatText = input.value;
if (chatText.length > 0)
    const li = document.createElement("li");
    li.innerText = chatText;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
}