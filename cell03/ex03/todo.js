const loadData = () => {
  if (document.cookie) {
    const data = document.cookie.split("; ").map(item => item.split("="))
    data.forEach(item => addListItem(item[0], item[1]))
  }

}

const addItem = () => {
  let input = prompt("Enter new todo?")
  if (input !== null && input !== "") {
    let date = new Date().getTime()
    setCookie(`obj${date}`, encodeURIComponent(input))
    addListItem(`obj${date}`, input)
  }
}



const setCookie = (id, todo) => {
  let date = new Date();
  date.setMonth(date.getYear() + 1);
  document.cookie = `${id}=${escape(todo)}; expires=${date.toUTCString()}`;
}


const addListItem = (id, todo) => {
  let list = document.getElementById("todo")
  list.innerHTML += `<p onclick="deleteItem(\'${id}\')" id=${id}>${todo}`
}


const deleteItem = (id) => {
  document.getElementById(id).style.display = "none"
  unsetCookie(id)
}

const unsetCookie = (id) => {
  if (confirm("confirm to delete?")) {
    document.cookie = `${id}=; max-age=0`;
  }
}