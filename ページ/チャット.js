const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    add();
});
let chat = input.value;
if (chat.length > 0)
function add() {
    const li = document.createElement("li");
    li.innerText = chat;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
}