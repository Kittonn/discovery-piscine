const loadData = () => {
  if (Cookies.get()) {
    const data = Object.entries(Cookies.get())
    data.forEach(item => addListItem(item[0], item[1]))
  }

}

const addItem = () => {
  let input = prompt("Enter new todo?")
  if (input !== null && input !== "") {
    let date = new Date().getTime()
    Cookies.set(`obj${date}`, input)
    addListItem(`obj${date}`, input)
  }
}

const addListItem = (id, todo) => {
  let list = document.getElementById("todo")
  list.innerHTML += `<p onclick="deleteItem(\'${id}\')" id=${id}>${todo}`
}


const deleteItem = (id) => {
  $(`#${id}`).css("display", "none")

  if (confirm("confirm to delete?")) {
    Cookies.remove(id)
  }
}

