import app from "../component/client1.js"
import display from "../component/client2.js"
import popupHtml from "../component/popup.js"

let sidebar = document.getElementById("sidebar");
var menu = document.getElementById("menu-icon");
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

})




const manoj = document.getElementById("user-name");
const drop = document.querySelector(".dropdown");
manoj.addEventListener("click", () => {
    if (drop.style.display === "none") {
        drop.style.display = "block";
    }
    else {
        drop.style.display = "none";
    }
})
const ques = document.getElementById("question");
const drop2 = document.querySelector(".dropdown2");
ques.addEventListener("click", () => {
    if (drop2.style.display === "none") {
        drop2.style.display = "block";
    }
    else {
        drop2.style.display = "none";
    }
})
const noti = document.getElementById("notification");
const drop3 = document.querySelector(".dropdown3");
noti.addEventListener("click", () => {
    if (drop3.style.display === "none") {
        drop3.style.display = "block";
    }
    else {
        drop3.style.display = "none";
    }
})
const user = document.getElementById("name-short");
const drop4 = document.querySelector(".dropdown4");
user.addEventListener("click", () => {
    if (drop4.style.display === "none") {
        drop4.style.display = "block";
    }
    else {
        drop4.style.display = "none";
    }
})

const check = document.getElementById("check");
check.addEventListener("change", () => {
    document.body.classList.toggle("darkTheme");

})


// ---------------client render------------>

let body=document.querySelector("#main-content");
body.innerHTML=popupHtml();


let clt = document.getElementById("clt");
clt.addEventListener("click", () => {

    let maincontent = document.getElementById("main-content");
    maincontent.innerHTML = app();
    let cont = document.getElementById("container");
    let clientArr = JSON.parse(localStorage.getItem("client")) || [];
    display(clientArr,cont);

    let add = document.getElementById("add");
    // console.log(add);
    add.addEventListener("click", () => {
        let clientArr = JSON.parse(localStorage.getItem("client")) || [];
        let value = document.getElementById("add-client").value;
        
        clientArr.unshift(value);
        localStorage.setItem("client", JSON.stringify(clientArr));
        display(clientArr,cont);

        document.getElementById("add-client").value="";
    })

})

let xmark= document.querySelector(".fa-xmark");
// console.log(xmark);

