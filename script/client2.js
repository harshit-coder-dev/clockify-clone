window.addEventListener("load", () => {
    let clientArr = JSON.parse(localStorage.getItem("client")) || [];
    display(clientArr);
})



let add = document.getElementById("add");
add.addEventListener("click", () => {
    let clientArr = JSON.parse(localStorage.getItem("client")) || [];
    let value = document.getElementById("add-client").value;
    clientArr.unshift(value);
    localStorage.setItem("client", JSON.stringify(clientArr));
    display(clientArr);
})




let display = ( clientArr,) => {
    console.log(clientArr);
    let cont = document.getElementById("container");

    console.log(cont);
    cont.innerHTML = null;
    clientArr.forEach(el => {
        let div = document.createElement("div");
        div.setAttribute("class", "show-div");
        let client = document.createElement("p");

        client.innerText = el;
        let div2 = document.createElement("div");
         div2.setAttribute("class","right-div");
        let div3 = document.createElement("div");

        let div4 = document.createElement("div");

        let img1 = document.createElement("img");
        img1.src = "https://app.clockify.me/assets/ui-icons/edit.svg";
        div3.append(img1)
        let img2 = document.createElement("img");
        img2.src = "https://app.clockify.me/assets/ui-icons/menu-dots-vertical.svg";
        div4.append(img2)
        div2.append(div3, div4);
        div.append(client, div2);

        cont.append(div);
    });
}
