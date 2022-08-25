let popupHtml=()=>{
    return`
    <div class="container">
    <div id="head"> 
        <h1>Edit client</h1>
        <i class="fa-solid fa-xmark"></i>
    </div>
   
    <hr>
    <div id="cen">
        <p>Client Name</p>
    <input id="input1" type="text">
    <br>
    <p>Client Address</p>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <br>
    <p>Client Note</p>
   <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
</div>`
}
export default popupHtml;