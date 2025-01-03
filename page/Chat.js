const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const chats = JSON.parse(localStorage.getItem("chats"))
;

if (chats) {
    chats.forEach(chat => {
        add(chat);
    })
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    add();
});

function add(chat) {
    let chatText = input.value;

    if (chat) {
        chatText = chat;
    }

    if (chatText.length > 0){
        const li = document.createElement("li");
        li.innerText = chatText;
        li.classList.add("list-group-item");
        ul.appendChild(li);
        input.value = "";
        saveData
    }
}

function saveData() {
    const lists = document.querySelectorAll("li")
    let chats = [];
    lists.forEach(list => {
        chats.push(list.innerText)
    });
    localStorage.setItem("chats", JSON.stringify(chats))
}