let toggle = false
document.getElementById("toggle").addEventListener("click", () => {
  toggle = !toggle
  console.log(toggle);
  if (toggle) {
    document.getElementById("icon").classList.remove("fa-bars")
    document.getElementById("icon").classList.add("fa-xmark")
    document.getElementById("slide").style.top = '65px'
  } else {
    document.getElementById("slide").style.top = '-1000px'
    document.getElementById("icon").classList.add("fa-bars")
    document.getElementById("icon").classList.remove("fa-xmark")
 }
})



document.getElementById("copyright").innerHTML = `&copy; Copyright Kitton ${new Date().getFullYear()}`