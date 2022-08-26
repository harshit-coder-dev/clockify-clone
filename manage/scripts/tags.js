
let catchElem = (val) => {
    return document.querySelector(val);
};

let createElem = (val) => {
    return document.createElement(val);
};

window.onload = () => {
    getTags()
};

let tags = JSON.parse(localStorage.getItem('tags')) || [];

let AddTags = () => {

    let new_tag = {
        tag: catchElem('#new-tag').value
    }

    tags.push(new_tag);

    localStorage.setItem('tags', JSON.stringify(tags));

    catchElem('#new-tag').value = '';
};

let getTags = () =>{
    console.log(tags);
}

catchElem('.add-tag').addEventListener('click', AddTags);

let content_data = catchElem('.content-data');

let showTagks = () => {

    content_data.innerHTML = '';

    let cont_div = createElem('div');








    content_data.append(cont_div);

}