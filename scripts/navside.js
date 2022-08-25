import { Navbar, Sidebar } from "../components/navbar.js";

document.getElementById('navbar').innerHTML = Navbar();
document.getElementById("sidebar").innerHTML = Sidebar();



let sidebar = document.getElementById("sidebar");
let menu = document.getElementById("menu-icon");
menu.onclick = () => {
    myFunction();
}
function myFunction() {
    let x = document.getElementsByClassName("hide-show");
    for (let i = 0; i < x.length; i++) {

        if (x[i].style.display === "none") {
            x[i].style.display = "block";
            sidebar.style.width = "200px";

        }
        else {
            x[i].style.display = "none";
            sidebar.style.width = "50px";

        }
    }
}

const one = document.querySelector("#one");

one.addEventListener("click", () => {
    let show = document.getElementById("show");
    const hide = document.querySelector("#more")
    hide.classList.toggle("hide1");
    // console.log(show.innerText);
    if (show.innerText == "Show More") {
        show.innerText = "Show Less"
        one.classList.toggle("rotate");

    }
    else {
        show.innerText = "Show More";
        one.classList.toggle("rotate");
    }

});

let flex1 = document.getElementById("flex1")
console.log(flex1)
flex1.addEventListener("click", () => {
    if (flex1.style.display === "none") {
        flex1.style.display = "block"
    } else { flex1.style.display = "none" }

})