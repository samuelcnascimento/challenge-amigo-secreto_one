//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listName = [];

function getInputValue() {
  const friendName = document.getElementById("amigo").value;
  console.log(friendName);
  return friendName;
}

function addFriendName() {
  const name = getInputValue();
  if (name) {
    listName.push(name);
    document.getElementById("amigo").value = "";
    console.log(listName);
    updateList();
  }
}

function updateList() {
  const list = document.getElementById("listaAmigos");
  list.innerHTML = "";
  listName.forEach((names) => {
    const li = document.createElement("li");
    li.textContent = names;
    list.appendChild(li);
  });
}

function chooseRandomly() {
  if (listName.length > 0) {
    const selectIndex = Math.floor(Math.random() * listName.length);
    const selectName = listName[selectIndex];
    document.getElementById(
      "resultado"
    ).textContent = `O amigo secreto sorteado é: ${selectName}`;
  }
}
