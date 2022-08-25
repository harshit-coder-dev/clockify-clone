let app=()=>{
    return`  <div id="main">
    <div id="head">
        <h2>Clients</h2>
    </div>



    <div id="search">
        <div id="search-left">
            <div id="show-active">Show active</div>
            <div><input type="text" placeholder="Search by name"></div>
        </div>

        <div id="search-right">
            <div><input  id="add-client" type="text" placeholder="Add new client"></div>
            <div id="add">ADD</div>
        </div>
    </div>

    <div id="name">
        <p>Name</p>
        <p>Address</p>
    </div>

   <div id="container">

   </div>

</div>

`
}
export default app;