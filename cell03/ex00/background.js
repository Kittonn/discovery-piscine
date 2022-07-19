const setBg = () =>{
  const randomColor = Math.floor(Math.random()*16777215).toString(16)
  document.getElementById("background").style.background = `#${randomColor}`
}

document.getElementById("btn").addEventListener("click",setBg)
