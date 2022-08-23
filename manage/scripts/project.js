
let catchElem = (val) => {
    return document.querySelector(val);
};

let createElem = (val) => {
    return document.createElement(val);
};

let client_list = catchElem('.client-list');

let displayClientDropDown = () => {

    catchElem('.cl-1').innerHTML = '';

    let div = createElem('div');
    let search = createElem('input');
    search.placeholder = 'Search';

    let status_div = createElem('div');
    let show_project_status = createElem('p');
    show_project_status.textContent = 'SHOW';

    let status_select = createElem('select');
    let opt1 = createElem('option');
    opt1.value = 'active';
    opt1.textContent = 'Active';

    let opt2 = createElem('option');
    opt2.value = 'archived';
    opt2.textContent = 'Archived';

    let opt3 = createElem('option');
    opt3.value = 'all';
    opt3.textContent = 'All';

    let client_input = createElem('input');
    client_input.setAttribute('id', 'select-all');
    client_input.type = 'checkbox';

    let select_all_label = createElem('label');
    let x = 'Select All';
    catchElem('#select-all').htmlFor = x;
    select_all_label.textContent = x;

    status_select.append(opt1, opt2, opt3);

    status_div.append(show_project_status, status_select);

    div.append(search, status_div, client_input);
    catchElem('.cl-1').append(div);
};

catchElem('.client-list').addEventListener('click', displayClientDropDown);