
let [seconds, minutes, hours] = [0, 0, 0];
let timerRef = document.querySelector('#timer>p');
let int = null;
let btn = document.getElementById('timer_start')
let c = 0;
btn.addEventListener('click', () => {
    c++;
    if (c % 2 == 1) {
        btn.innerText = "Stop";
        btn.style.background = "red";
        btn.style.color = "white";
        int = setInterval(displayTimer, 60);
        
    } else {
        btn.innerText = "Start";
        btn.style.background = "#5FBDF7";
        btn.style.color = "white";
        clearInterval(int);
    }

});

// btn.addEventListener('click', ()=>{

// });

// document.getElementById('resetTimer').addEventListener('click', ()=>{
//     clearInterval(int);
//     [milliseconds,seconds,minutes,hours] = [0,0,0,0];
//     timerRef.innerHTML = '00 : 00 : 00 : 000 ';
// });

function displayTimer() {
    seconds += 1;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    let x=` ${h} : ${m} : ${s}`
    localStorage.setItem("clock",JSON.stringify(x))
    timerRef.innerHTML = ` ${h} : ${m} : ${s}`;
}
let cont = document.querySelector(".modal")
let project = document.querySelector(".project");
project.addEventListener("click", () => {
    console.log("1")

    cont.style.display = "block"
});

let closeModal = document.querySelector(".cls-new-prj");
closeModal.addEventListener("click", () => {
  document.getElementById("week").style.display="block"
    cont.style.display = "none"
});

document.querySelector(".crt-new-prj").addEventListener("click", () => {
    showAppend()
});


function showAppend() {
  let timeData=JSON.parse(localStorage.getItem("clock"))
    let app = document.getElementById("append");
    let div=document.createElement("div");
    div.classList.add("div")
    let proName = document.querySelector("#project-name").value;
    let cliName = document.querySelector("#client-name").value;

    let div1 = document.createElement("div");
    div1.classList.add("div1");

    let inputDesc = document.createElement("input");
    inputDesc.setAttribute("type", "text");
    inputDesc.setAttribute("placeholder", "Add Description");

    let name = document.createElement("p");
    name.innerText = proName;

    let cli = document.createElement("p");
    cli.innerText = cliName;

    let div2 = document.createElement("div");
    div2.classList.add("div2")
    div2.innerHTML = `
    <div class="tagImg">
    <img
      src="https://app.clockify.me/assets/nav-icons/tags.svg"
      alt=""
    />
  </div>
  <div class="dol">
    <p>$</p>
  </div>
  <div class="tri"><p>${timeData}</p></div>
  <div class="sta">
  <img src="https://app.clockify.me/assets/ui-icons/play.svg" alt="">
  </div>
  <div class="two">
    <img
      src="https://app.clockify.me/assets/nav-icons/time-tracker.svg"
      alt=""
    />
    <br />
    <br />
    <img
      src="https://app.clockify.me/assets/ui-icons/list-blue.svg"
      alt=""
    />
  </div>
    `

    div1.append(inputDesc, name, cli)
    div.append(div1, div2);
    app.append(div)

}










