const plusSize = () => {
  balloon.style.width = `${parseInt(balloon.style.width) + 10}px`
  balloon.style.height = `${parseInt(balloon.style.height) + 10}px`
  console.log(balloon.style.width,balloon.style.height);
}

const defaultSize = () => {
  balloon.style.width = "200px"
  balloon.style.height = "200px"
}

const minusSize = () => {
  balloon.style.width = `${parseInt(balloon.style.width) - 5}px`
  balloon.style.height = `${parseInt(balloon.style.height) - 5}px`
  console.log(balloon.style.width,balloon.style.height);
}

const balloon = document.getElementById('balloon')
balloon.addEventListener("mouseleave", () => {

  if (balloon.style.background === 'red') {
    balloon.style.background = 'blue'
    if (parseInt(balloon.style.width) > 200 && parseInt(balloon.style.height) > 200) {
      minusSize()
    }
  } else if (balloon.style.background === "blue") {
    balloon.style.background = 'green'
    if (parseInt(balloon.style.width) > 200 && parseInt(balloon.style.height) > 200) {
      minusSize()
    }
  } else {
    balloon.style.background = 'red'
    if (parseInt(balloon.style.width) > 200 && parseInt(balloon.style.height) > 200) {
      minusSize()
    }
  }
})

// red => green => blue
// blue => green => red



balloon.addEventListener("click", () => {
  if (balloon.style.background === 'red') {
    balloon.style.background = 'green'
    if (parseInt(balloon.style.width) < 420 && parseInt(balloon.style.height) < 420) {
      plusSize()
    } else {
      defaultSize()
    }

  } else if (balloon.style.background === "green") {
    balloon.style.background = 'blue'
    if (parseInt(balloon.style.width) < 420 && parseInt(balloon.style.height) < 420) {
      plusSize()
    } else {
      defaultSize()
    }
  } else {
    balloon.style.background = 'red'
    if (parseInt(balloon.style.width) < 420 && parseInt(balloon.style.height) < 420) {
      plusSize()
    } else {
      defaultSize()
    }
  }
})