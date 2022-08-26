
let [seconds,minutes,hours] = [0,0,0];
let timerRef = document.querySelector('#timer>p');
let int = null;
let btn=document.getElementById('timer_start')
let c=0;
btn.addEventListener('click', ()=>{
    c++;
    if(c%2==1){
        btn.innerText="Stop";
        btn.style.background="red";
        btn.style.color="white";
        int = setInterval(displayTimer,60);
    }else{
        btn.innerText="Start";
        btn.style.background="#5FBDF7";
        btn.style.color="white";
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

function displayTimer(){
    seconds+=1;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;


 timerRef.innerHTML = ` ${h} : ${m} : ${s}`;
}




let Close=document.querySelector(".cls-new-prj")
let Create=document.querySelector(".crt-new-prj");

let modal=document.getElementById("modal");
let pro=document.querySelector(".project");
pro.addEventListener("click",()=>{
    openModal()
})




