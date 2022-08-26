
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

    status_select.append(opt1, opt2, opt3);

    status_div.append(show_project_status, status_select);

    div.append(search, status_div, client_input1, select_all_label1, client_input2, select_all_label2);
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

    div.append(search, user_div, user_input1, select_all_u_label1);
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

let modal = catchElem('.modal');

let openModal = () => {

    modal.innerHTML = '';
    modal.style.display = 'block';

    let modal_cont = createElem('div');
    modal_cont.setAttribute('class', 'modal-content');

    let detail_div = createElem('div');
    detail_div.setAttribute('class', 'crt-1')

    let new_prj = createElem('p');
    new_prj.textContent = 'Create New Project';

    let close_btn = createElem('p');
    close_btn.textContent = 'X';
    close_btn.setAttribute('class', 'close-modal')
    close_btn.style.cursor = 'pointer';
    close_btn.addEventListener('click', () => {
        closeModal();
    });

    detail_div.append(new_prj, close_btn);

    let new_div = createElem('div');

    let pro_name = createElem('input');
    pro_name.type = 'text';
    pro_name.setAttribute('id', 'project-name');
    pro_name.placeholder = 'Enter Project Name';

    let client_name = createElem('input');
    client_name.type = 'text';
    client_name.setAttribute('id', 'client-name');
    client_name.placeholder = 'Enter Client Name';

    new_div.append(pro_name, client_name);

    let submit_div = createElem('div');
    submit_div.setAttribute('class', 'submit-div');

    let create_btn = createElem('button');
    create_btn.setAttribute('class', 'crt-new-prj');
    create_btn.textContent = 'CREATE';
    create_btn.addEventListener('click', () => {
        addNewProject();
    });

    let close_p_btn = createElem('button');
    close_p_btn.setAttribute('class', 'cls-new-prj');
    close_p_btn.textContent = 'CLOSE';
    close_p_btn.addEventListener('click', () => {
        closeModal();
    })

    submit_div.append(close_p_btn, create_btn);

    modal_cont.append(detail_div, new_div, submit_div);

    modal.append(modal_cont);

};

catchElem('#content-project > div:nth-child(1) > button').addEventListener('click', openModal);

let closeModal = () => {
    modal.style.display = 'none';
}

let addNewProject = async () => {

    let project_data =
    {
        project_name: catchElem('#project-name').value,
        client_name: catchElem('#client-name').value,
        project_id: Date.now()
    };

    let res = await fetch('https://pacific-citadel-99633.herokuapp.com/api/clockify-projects',
        {
            method: 'POST',
            body: JSON.stringify(project_data),
            headers:
            {
                'Content-Type': 'application/json'
            }
        });

    res = await res.json();
    console.log(res);

    catchElem('#project-name').value = '';
    catchElem('#client-name').value = '';
    getProjectData()
};

let prj_content = catchElem('#project-details > div:nth-child(2) > table > tbody');

window.addEventListener('load', () => {
    getProjectData();
})

let getProjectData = async () => {

    let res = await fetch('https://pacific-citadel-99633.herokuapp.com/api/clockify-projects');

    res = await res.json();
    console.log(res);
    DisplayProjcetList(res);
}

let DisplayProjcetList = (data) => {

    console.log(data);

    prj_content.innerHTML = '';

    data.forEach((e) => {

        let tr_elem = createElem('tr');
        tr_elem.onclick = () => {
            saveProjData(e);
        }

        let p_name = createElem('td');
        p_name.textContent = e.project_name;

        let c_name = createElem('td');
        c_name.textContent = e.client_name;

        let track_name = createElem('td');
        track_name.textContent = '0.0h';

        let amt_name = createElem('td');
        amt_name.textContent = '0.0USD';

        let prog_name = createElem('td');
        prog_name.textContent = '-';

        let access_name = createElem('td');
        access_name.textContent = 'Public';

        tr_elem.append(p_name, c_name, track_name, amt_name, prog_name, access_name);
        prj_content.append(tr_elem);

    });
};

let saveProjData = (e) => {
    let data = [];
    data.push(e);
    localStorage.setItem('project-details', JSON.stringify(data));
    window.location.href = 'projectdet.html';
}



