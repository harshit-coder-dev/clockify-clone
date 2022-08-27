let planName = localStorage.getItem('planName');
let seats = document.getElementById('seats');
let price = +localStorage.getItem('price');
let planPrice = document.getElementById('planPrice');
let headPara = document.getElementById('planname');
let payinf = document.getElementById('payinf');
let invinf = document.getElementById('invinf');

let bottomBox = document.getElementById('bottomBox');
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

headPara.innerText = planName;
if (planName === 'Pro Upgrade') {
    headPara.style.color = "#eb5757";
}
if (planName === 'Basic Upgrade') {
    headPara.style.color = "#3d4853";
}
if (planName === 'Standard Upgrade') {
    headPara.style.color = "#2f80ed";
}
if (planName === 'Enterprise Upgrade') {
    headPara.style.color = "#9b51e0";
}

let paymentInfo = () => {
    return `<p id="bottomHeader">Payment information
    </p>
    <div id="cardDetails">
        <p class="label">Card number<p class="gray">(required)</p> </p>
    <input type="text" id="cardNumber" placeholder="1234 1234 1234 1234" maxlength="19" onkeypress="cardspace()"/>
    <div id="cardImg">
        <img src="https://app.clockify.me/assets/ui-icons/master-card.svg" alt="">
        <img src="https://app.clockify.me/assets/ui-icons/visa.svg" alt="">
        <img src="https://app.clockify.me/assets/ui-icons/american-express.svg" alt=""><img src="https://app.clockify.me/assets/ui-icons/union-pay.svg" alt=""><img src="https://app.clockify.me/assets/ui-icons/discover.svg" alt=""><img src="https://app.clockify.me/assets/ui-icons/jcb.svg" alt=""><img src="https://app.clockify.me/assets/ui-icons/diners-club.svg" alt="">
    </div>
    </div>
    <div id="expCvv">
        <div>
            <p class="label">Expiration date<p class="gray">(required)</p> </p>
    <input type="text" id="validtill" placeholder="MM/YYYY" maxlength="7" onkeypress="addSlash()">
        </div>
        <div>
            <p class="label">CVC<p class="gray">(required)</p> </p>
    <input type="password" id="cvv" placeholder="CVC" maxlength="3">
        </div>
    </div>
    <p class="label">Cardholder Name<p class="gray">(required)</p> </p>
    <input type="text" id="Name">
    <p class="label">Street<p class="gray">(required)</p> </p>
    <input type="text" id="Street">
    <p class="label">City<p class="gray">(required)</p> </p>
    <input type="text" id="City">
    <p class="label">ZIP / Postal code<p class="gray">(required)</p> </p>
    <input type="text" id="ZIP">
    <p class="label">State / Province<p class="gray">(required)</p> </p>
    <input type="text" id="State">
    <p class="label">Country<p class="gray">(required)</p> </p>
    <input type="text" id="Country">
    <div id="tnc">
        <div id="checkBox">
            <input type="checkbox" id="CheckTick" >
    <p class="label">I have read and agree to the <a href="https://clockify.me/terms" target="_blank">Terms of Use.</a></p>
    <p id="gray">There are no refunds. Your subscription will renew automatically, and you will be charged in advance. You may cancel at any time. The cancellation goes into effect at the start of your following billing cycle.</p>
        </div>
    <button id="finishPayment" onclick="finishPayment()">FINISH PAYMENT</button>
    </div>`;
}




seats.onchange = () => {
    totalamount();

}
let totalamount = () => {
    planPrice.innerText = `x $${price}`;
    seats.disabled = false;
    let totalprice = price * seats.value;
    totalPrice.innerText = `$${totalprice}`;
    totalAmount.innerText = `$${totalprice}`;
    let today = new Date();
    let date = `${monthNames[today.getMonth()]} ${today.getDate()} - ${monthNames[today.getMonth() + 1]} ${today.getDate()}, ${today.getFullYear()}`;
    planTime.innerText = date;
    monthlybtn.style.backgroundColor = "#e4eaee";
    yearlybtn.style.backgroundColor = "#ffffff";
}

let monthlybtn = document.getElementById('monthlybtn');
monthlybtn.onclick = () => {
    totalamount();
}


let yearlybtn = document.getElementById('yearlybtn');
yearlybtn.onclick = () => {
    totalamountYearly();
}
let yrPrice = (price * 80 / 100).toFixed(2) * 12;

totalamountYearly = () => {
    planPrice.innerText = `x $${yrPrice}`;
    seats.value = 1;
    seats.disabled = true;
    let totalprice = yrPrice;

    totalPrice.innerText = `$${totalprice}`;
    totalAmount.innerText = `$${totalprice}`;
    let today = new Date();
    let date = `${monthNames[today.getMonth()]} ${today.getDate()} - ${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear() + 1}`;
    planTime.innerText = date;
    monthlybtn.style.backgroundColor = "#ffffff";
    yearlybtn.style.backgroundColor = "#e4eaee";
}

let compNam = localStorage.getItem('system');
let companyName = document.getElementById("companyName");
companyName.value = compNam;

confirmPayment.onclick = () => {
    
    if (companyName.value == "") {
        alert("Company Name is mandatory");
    }
    else {
        payinf.style.borderBottom = "1px solid black";
        invinf.style.borderBottom = "1px solid #C6D2D9";
        bottomBox.innerHTML = null;
        bottomBox.innerHTML = paymentInfo();
    }
}

let checkCvv = (value) => {
    if (value == 123) return true;
}
let processpopup = document.getElementById("processpopup");
let donepopup = document.getElementById("donepopup");
let failedpopup = document.getElementById("failedpopup");

let finishPayment = () => {
    let Name = document.getElementById('Name').value;
    let Street = document.getElementById('Street').value;
    let City = document.getElementById('City').value;
    let Zip = document.getElementById('ZIP').value;
    let State = document.getElementById('State').value;
    let Country = document.getElementById('Country').value;
    let CheckTick = document.getElementById('CheckTick');

    if (Name == "" && Street == "" && City == "" && Zip == "" && State == "" && Country == "" && CheckTick.checked == false) {
        alert("Name and street and city and zip are mandatory things. Please fill up!");
    }
    else if (CheckTick.checked) {
        document.getElementById("finishPayment").style.backgroundcolor = "#04628e";
        let cvv = +(document.getElementById("cvv").value);
        processpopup.classList.add("open-popup");
        if (checkCvv(cvv)) {
            setTimeout(() => {
                processpopup.classList.remove("open-popup");
                donepopup.classList.add("open-popup");
            }, 2000);
        }
        else {
            setTimeout(() => {
                failedBtn.style.backgroundColor = "red";
                processpopup.classList.remove("open-popup");

                failedpopup.classList.add("open-popup");
            }, 2000);
        }
    }
}
donebtn.onclick = () => {
    donepopup.style.transition = "0.4s";
    donepopup.classList.remove("open-popup");
    window.location.href = "project.html";
}
failedBtn.onclick = () => {
    failedpopup.style.transition = "0.4s";
    failedpopup.classList.remove("open-popup");

}
let cardspace = () => {
    let cardDigit = document.getElementById("cardNumber").value;
    if (cardDigit.length == 4 || cardDigit.length == 9 || cardDigit.length == 14) {
        document.getElementById("cardNumber").value = cardDigit + ' ';
        document.getElementById("cardNumber").max = 1;
    }

}
let addSlash = () => {
    let cardDigit = document.getElementById("validtill").value;
    if (cardDigit.length == 2) {
        document.getElementById("validtill").value = cardDigit + '/';
        document.getElementById("validtill").max = 1;
    }

}

window.onload = totalamount();