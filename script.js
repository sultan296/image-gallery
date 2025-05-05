let container = document.getElementById("cont")
let nxt = document.getElementById("next")
let bck = document.getElementById("back")

nxt.addEventListener("click", ()=>{
    container.style.scrollBehavior = "smooth";
    container.scrollLeft += 900;
})

bck.addEventListener("click",()=>{
    container.style.scrollBehavior = "smooth";
    container.scrollLeft -= 900;
})
