var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
main.addEventListener("mousemove",function(dets){
    crsr.style.left =dets.x+"px"
    crsr.style.top =dets.y+"px"
})

const menu_icon = document.querySelector(".menu_icon")
menu_icon.addEventListener("click",()=>{
    const menu = menu_icon.querySelector(".menu_items")
    menu.style.display = "flex"
    console.log("flex")
})