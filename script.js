const main = document.querySelector("#maindiv");
const cursor = document.querySelector(".cursor");
main.addEventListener("mouseover",function(dets){
    cursor.style.left = dets.x + "px";
    cursor.style.top =dets.y + "px";
})