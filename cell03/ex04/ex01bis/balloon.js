const plusSize = () => {
  $("#balloon").css("width", `${parseInt($("#balloon").css('width')) + 10}px`)
  $("#balloon").css("height", `${parseInt($("#balloon").css('height')) + 10}px`)
  console.log($("#balloon").css("width"), $("#balloon").css("height"));
}

const defaultSize = () => {
  $("#balloon").css("width", "200px")
  $("#balloon").css("height", "200px")
  console.log($("#balloon").css("width"), $("#balloon").css("height"));
}

const minusSize = () => {
  $("#balloon").css("width", `${parseInt($("#balloon").css('width')) - 5}px`)
  $("#balloon").css("height", `${parseInt($("#balloon").css('height')) - 5}px`)
  console.log(balloon.style.width, balloon.style.height);
}

$("#balloon").mouseleave(()=> {
  if ($("#balloon").css('background-color') === 'rgb(255, 0, 0)') {
    $("#balloon").css('background-color', 'blue')
    if (parseInt($("#balloon").css('width')) > 200 && parseInt($("#balloon").css('height')) > 200) {
      minusSize()
    }
  } else if ($("#balloon").css('background-color') === 'rgb(0, 128, 0)') {
    $("#balloon").css('background-color', 'red')
    if (parseInt($("#balloon").css('width')) > 200 && parseInt($("#balloon").css('height')) > 200) {
      minusSize()
    }
  } else {
    $("#balloon").css('background-color', 'green')
    if (parseInt($("#balloon").css('width')) > 200 && parseInt($("#balloon").css('height')) > 200) {
      minusSize()
    }
  }
})

$("#balloon").click(() => {
  if ($("#balloon").css('background-color') === 'rgb(255, 0, 0)') {
    $("#balloon").css('background-color', 'green')
    if (parseInt($("#balloon").css('width')) < 420 && parseInt($("#balloon").css('height')) < 420) {
      plusSize()
    } else {
      defaultSize()
    }
  } else if ($("#balloon").css('background-color') === 'rgb(0, 128, 0)') {
    $("#balloon").css('background-color', 'blue')
    if (parseInt($("#balloon").css('width')) < 420 && parseInt($("#balloon").css('height')) < 420) {
      plusSize()
    } else {
      defaultSize()
    }
  } else {
    $("#balloon").css('background-color', 'red')
    if (parseInt($("#balloon").css('width')) < 420 && parseInt($("#balloon").css('height')) < 420) {
      plusSize()
    } else {
      defaultSize()
    }
  }
})