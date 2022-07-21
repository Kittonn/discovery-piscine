setInterval(() => {
  alert("Please, use me...")
}, 30000);

const setNull = () => {
  $("#right-input").val("")
  $('#left-input').val("")
}

const calc = () => {
  let rightValue = Number($("#right-input").val())
  let leftValue = Number($("#left-input").val())
  let selectValue = $("#operation option:selected").val()
  let right = $("#right-input").val()
  let left = $("#left-input").val()
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

$("#btn").click(calc)

