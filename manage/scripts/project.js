
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

    let client_input1 = createElem('input');
    client_input1.setAttribute('id', 'select-all');
    client_input1.type = 'checkbox';

    let select_all_label1 = createElem('label');
    select_all_label1.setAttribute('for', 'select-all');
    select_all_label1.textContent = 'Select  All';

    let client_input2 = createElem('input');
    client_input2.setAttribute('id', 'without-client');
    client_input2.type = 'checkbox';

    let select_all_label2 = createElem('label');
    select_all_label2.setAttribute('for', 'without-client');
    select_all_label2.textContent = 'Without Client';

    let client_input3 = createElem('input');
    client_input3.setAttribute('id', 'abc');
    client_input3.type = 'checkbox';

    let select_all_label3 = createElem('label');
    select_all_label3.setAttribute('for', 'abc');
    select_all_label3.textContent = 'abc.com';

    status_select.append(opt1, opt2, opt3);

    status_div.append(show_project_status, status_select);

    div.append(search, status_div, client_input1, select_all_label1, client_input2, select_all_label2, client_input3, select_all_label3);
    catchElem('.cl-1').append(div);
};

catchElem('.client-list').addEventListener('click', displayClientDropDown);

let access_list = catchElem('.access-user');

let displayAcceessUsers = () => {

    catchElem('.cl-2').innerHTML = '';

    let div = createElem('div');
    let search = createElem('input');
    search.placeholder = 'Find Member or group';

    let user_div = createElem('div');

    let show_user_status = createElem('p');
    show_user_status.textContent = 'SHOW';

    let user_select = createElem('select');
    let opt1 = createElem('option');
    opt1.value = 'active';
    opt1.textContent = 'Active';

    let opt2 = createElem('option');
    opt2.value = 'archived';
    opt2.textContent = 'Inactive';

    let opt3 = createElem('option');
    opt3.value = 'all';
    opt3.textContent = 'All';

    let user_input1 = createElem('input');
    user_input1.setAttribute('id', 'select-all_user');
    user_input1.type = 'checkbox';

    let select_all_u_label1 = createElem('label');
    select_all_u_label1.setAttribute('for', 'select-all_user');
    select_all_u_label1.textContent = 'Select  All';

    let show_users = createElem('p');
    show_users.textContent = 'USERS';

    user_select.append(opt1, opt2, opt3);
    user_div.append(show_user_status, user_select);
    div.append(search, user_div, user_select);
    catchElem('.cl-2').append(div);
};

catchElem('.access-user').addEventListener('click', displayAcceessUsers);

let displayBillingDiv = () => {

    catchElem('.cl-3').innerHTML = '';

    let div = createElem('div');

    let b_input = createElem('input');
    b_input.setAttribute('id', 'billable');
    b_input.type = 'checkbox';

    let b_label = createElem('label');
    b_label.setAttribute('for', 'billable');
    b_label.textContent = 'Billable';

    let non_b_input = createElem('input');
    non_b_input.setAttribute('id', 'nonbillable');
    non_b_input.type = 'checkbox';

    let non_b_label = createElem('label');
    non_b_label.setAttribute('for', 'nonbillable');
    non_b_label.textContent = 'Non - Billable';

    div.append(b_input, b_label, non_b_input, non_b_label);

    catchElem('.cl-3').append(div);

};

catchElem('.billing').addEventListener('click', displayBillingDiv);