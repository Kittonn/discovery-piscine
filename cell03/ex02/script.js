const setNull = () => {
  document.getElementById("right-input").value = ""
  document.getElementById("left-input").value = ""
}

const log = () => {
  let rightValue = Number(document.getElementById("right-input").value)
  let leftValue = Number(document.getElementById("left-input").value)
  let select = document.getElementById("operation")
  let selectValue = select.options[select.selectedIndex].value
  let right = document.getElementById("right-input").value
  let left = document.getElementById("left-input").value
  if ((rightValue < 0 || leftValue < 0) || !right || !left || isNaN(rightValue) || isNaN(leftValue)) {
    alert("Error :(")
    console.log("Error :(");
    setNull()
  } else if ((selectValue === "divide" || selectValue === "mod") && rightValue === 0) {
    alert("It's over 9000!")
    console.log("Infinity");
    setNull()
  } else {
    switch (selectValue) {
      case "plus":
        alert(leftValue + rightValue)
        console.log(leftValue + rightValue);
        setNull()
        break;
      case "minus":
        alert(leftValue - rightValue)
        console.log(leftValue - rightValue);
        setNull()
        break;
      case "multiphy":
        alert(leftValue * rightValue)
        console.log(leftValue * rightValue);
        setNull()
        break;
      case "divide":
        alert(leftValue / rightValue)
        console.log(leftValue / rightValue);
        setNull()
        break;
      case "mod":
        alert(leftValue % rightValue)
        console.log(leftValue % rightValue);
        setNull()
        break;

    }
  }
}

document.getElementById("btn").addEventListener('click',log)

setInterval(() => {
  alert("Please, use me...")
}, 30000);