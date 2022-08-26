let mbt=document.getElementById("monthlybtn");
let ybt = document.getElementById("yearlybtn");
let bprice = 4.99,sprice = 6.99,pprice = 9.99,eprice =14.99;
mbt.onclick =()=>{
    monthlyPrice();
}

let monthlyPrice = ()=>{
    mbt.style.backgroundColor = "#e4eaee";
    ybt.style.backgroundColor = "#ffffff";
    bp.innerText = `$ ${bprice}`;
    sp.innerText = `$ ${sprice}`;
    pp.innerText = `$ ${pprice}`;
    ep.innerText = `$ ${eprice}`;
}

ybt.onclick =()=>{
    ybt.style.backgroundColor = "#e4eaee";
    mbt.style.backgroundColor = "#ffffff";
    bp.innerText = `$ ${(bprice*80/100).toFixed(2)}`;
    sp.innerText = `$ ${(sprice*80/100).toFixed(2)}`;
    pp.innerText = `$ ${(pprice*80/100).toFixed(2)}`;
    ep.innerText = `$ ${(eprice*80/100).toFixed(2)}`;
}


    bpupgradeBtn.onclick = ()=>{
        localStorage.setItem('price',bprice);
        localStorage.setItem('planName',"Basic Upgrade");
        window.location.href = 'payment.html';
    }
    spupgradeBtn.onclick = ()=>{
        localStorage.setItem('price',sprice);
        localStorage.setItem('planName',"Standard Upgrade");
        window.location.href = 'payment.html';
    }
    ppupgradeBtn.onclick = ()=>{
        localStorage.setItem('price',pprice);
        localStorage.setItem('planName',"Pro Upgrade");
        window.location.href = 'payment.html';
    }
    epupgradeBtn.onclick = ()=>{
        localStorage.setItem('price',eprice);
        localStorage.setItem('planName',"Enterprise Upgrade");
        window.location.href = 'payment.html';
    }


window.onload = monthlyPrice();