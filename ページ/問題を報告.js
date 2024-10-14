const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    this.addEventListener();
    add();
});

function add() {
    const li = document.createElement("li");
    li.innerText = input.value;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
}