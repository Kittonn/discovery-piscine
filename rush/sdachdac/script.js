let open = false
document.getElementById("toggle").addEventListener('click', () => {

  open = !open
  if (open) {
    document.getElementById("menu-slide").style.top = "65px"
    document.getElementById("toggle").classList.remove("fa-bars")
    document.getElementById("toggle").classList.add("fa-xmark")
  } else {
    document.getElementById("menu-slide").style.top = "-1000px";
    document.getElementById("toggle").classList.add("fa-bars")
    document.getElementById("toggle").classList.remove("fa-xmark")  
  }
})


document.getElementById("footer").innerHTML = `&copy; Copyright Sdachdac ${new Date().getFullYear()}`