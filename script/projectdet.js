
let prj_data = JSON.parse(localStorage.getItem('project-details'));

let catchElem = (val) => {
    return document.querySelector(val);
};

let createElem = (val) => {
    return document.createElement(val);
};

let appendNames = () => {

    prj_data.forEach((e) => {
        catchElem('#component-1 > h1').textContent = e.project_name;
        catchElem('#component-1 > p').textContent = e.client_name;
    });
};
appendNames();

window.onload = () => {

    showTasks();
}

let component_tabs = catchElem('.component-tabs-data');

let showTasks = () => {

    component_tabs.innerHTML = '';

    let div_controls = createElem('div');
    div_controls.setAttribute('class', 'div-controls');

    let div_1 = createElem('div');

    let select_div = createElem('select');
    select_div.setAttribute('id', 'select_div');

    let opt1 = createElem('option');
    opt1.value = 'show-active';
    opt1.textContent = 'Show Active'

    let opt2 = createElem('option');
    opt2.value = 'show-done';
    opt2.textContent = 'Show Done'

    let opt3 = createElem('option');
    opt3.value = 'show-all';
    opt3.textContent = 'Show All'

    select_div.append(opt1, opt2, opt3);

    let serach_name = createElem('input');
    serach_name.type = 'text';
    serach_name.placeholder = 'Search by name';

    div_1.append(select_div, serach_name);

    let div_2 = createElem('div');

    let add_task = createElem('input');
    add_task.type = 'text';
    add_task.setAttribute('id', 'task_data');
    add_task.placeholder = 'Add new task';

    let add_btn = createElem('button');
    add_btn.textContent = 'ADD';
    add_btn.addEventListener('click', () => {
        AddNewTask();
    });

    div_2.append(add_task, add_btn);

    let div_3 = createElem('div');

    let header_div = createElem('div');
    header_div.textContent = 'Tasks';

    let task_table = createElem('table');

    let thead_tr = createElem('tr');

    let task_th1 = createElem('th');
    task_th1.textContent = 'NAME';

    let task_th2 = createElem('th');
    task_th2.textContent = 'ASSIGNEES';

    thead_tr.append(task_th1, task_th2);

    task_table.append(thead_tr);

    tasks_array.forEach((e) => {

        let tbody_tr = createElem('tr');

        let task_td1 = createElem('td');
        task_td1.textContent = e.task;

        let task_td2 = createElem('td');
        prj_data.forEach((e) => {
            task_td2.textContent = e.client_name;
        })

        let rem_btn = createElem('button');
        rem_btn.textContent = 'Delete';
        rem_btn.setAttribute('class', 'rem-task');
        rem_btn.addEventListener('click', () => {
            removeTask(e);
        });

        tbody_tr.append(task_td1, task_td2, rem_btn);

        task_table.append(tbody_tr);

    });

    div_3.append(header_div, task_table);

    div_controls.append(div_1, div_2);

    component_tabs.append(div_controls, div_3);

}

let task_data = catchElem('.component-tabs> button:nth-child(1)')
task_data.addEventListener('click', showTasks);

let tasks_array = JSON.parse(localStorage.getItem('tasks')) || [];

let AddNewTask = () => {

    let task_details = {
        task: catchElem('#task_data').value
    };

    tasks_array.push(task_details);

    localStorage.setItem('tasks', JSON.stringify(tasks_array));

    catchElem('#task_data').value = '';

    showTasks();
};

let removeTask = (e) => {

    tasks_array = tasks_array.filter((elem) => {
        return elem !== e;
    });

    localStorage.setItem('tasks', JSON.stringify(tasks_array));

    showTasks(tasks_array);
}

let showAccess = () => {

    component_tabs.innerHTML = '';

    let acc_div = createElem('div');
    acc_div.setAttribute('class', 'access-div');

    let acc_div_1 = createElem('div');

    let acc_text_h2 = createElem('h2');
    acc_text_h2.textContent = 'Visibility';

    let vis_who_1 = createElem('input');
    vis_who_1.type = 'radio';
    vis_who_1.value = 'private';
    vis_who_1.name = 'private';
    vis_who_1.checked = true;
    vis_who_1.setAttribute('id', 'acc-private');

    let vis_who_1_label = createElem('label');
    vis_who_1_label.setAttribute('for', 'acc-private');
    vis_who_1_label.textContent = 'Private';

    let vis_who_2 = createElem('input');
    vis_who_2.type = 'radio';
    vis_who_2.value = 'public';
    vis_who_2.name = 'public';
    vis_who_2.checked = false;
    vis_who_2.setAttribute('id', 'acc-public');

    let vis_who_2_label = createElem('label');
    vis_who_2_label.setAttribute('for', 'acc-public');
    vis_who_2_label.textContent = 'Public';

    let acc_text_p = createElem('p');
    acc_text_p.setAttribute('class', 'acc-p-text');
    acc_text_p.textContent = 'Only people you add to the project can track time on it';

    if (vis_who_2.checked === true) {
        vis_who_1.checked = false;
        acc_text_p.textContent = 'Everyone can track time on public projects.'
    }

    acc_div_1.append(acc_text_h2, acc_text_p, vis_who_1, vis_who_1_label, vis_who_2, vis_who_2_label);

    let acc_div_2 = createElem('div');

    let acc_div_2_p = createElem('p');
    acc_div_2_p.textContent = 'Users';

    acc_div_2.append(acc_div_2_p);

    let acc_u_table = createElem('table');

    let acc_tr = createElem('tr');
    let acc_th = createElem('th');
    acc_th.textContent = 'NAME';

    let acc_th2 = createElem('th');
    acc_th2.textContent = 'BILLABLE RATE'

    let acc_th3 = createElem('th');
    acc_th3.textContent = 'OWNER';

    acc_tr.append(acc_th, acc_th2, acc_th3);

    let acc_tb_tr = createElem('tr');

    let acc_td = createElem('td');

    prj_data.forEach((e) => {
        acc_td.textContent = e.client_name;
    })

    let acc_td2 = createElem('td');
    acc_td2.textContent = 'Change';

    let acc_td3 = createElem('td');
    acc_td3.textContent = 'Owner';

    acc_tb_tr.append(acc_td, acc_td2, acc_td3);

    acc_u_table.append(acc_tr, acc_tb_tr);

    acc_div.append(acc_div_1, acc_div_2, acc_u_table);

    component_tabs.append(acc_div);

};

catchElem('.component-tabs > button:nth-child(2)').addEventListener('click', showAccess);

let note_context = JSON.parse(localStorage.getItem('note'));

let showNote = () => {

    component_tabs.innerHTML = '';

    let note_div = createElem('div');
    note_div.setAttribute('class', 'note-div');

    let note_input = createElem('input');
    note_input.type = 'text';
    note_input.setAttribute('id', 'note-input');
    note_input.oninput = () => {

        localStorage.setItem('note', JSON.stringify(note_input.value));

    }

    let note_p = createElem('p');
    note_p.textContent = note_context;

    note_div.append(note_input, note_p);

    component_tabs.append(note_div);
}

catchElem('.component-tabs > button:nth-child(3)').addEventListener('click', showNote);

let getData = async () => {

    let res = await fetch('https://pacific-citadel-99633.herokuapp.com/api/clockify-projects');

    res = await res.json();

    console.log(res);
}

let showPrjSettings = () => {

    component_tabs.innerHTML = '';

    let pjs_div = createElem('div');
    pjs_div.setAttribute('class', 'prj-settings')

    let pj_name_div = createElem('div');

    let pj_name = createElem('h2');
    pj_name.textContent = 'Name';

    let pj_change = createElem('input');
    pj_change.type = 'text';
    pj_change.setAttribute('id', 'chagne-prj-name');

    pj_change.oninput = () => {
        let update_pjname = pj_change.value;

        for (let i in prj_data) {
            prj_data[i].project_name = update_pjname;
        }

        localStorage.setItem('project-details', JSON.stringify(prj_data));
    }

    pj_name_div.append(pj_name, pj_change);

    pjs_div.append(pj_name_div);

    let pj_client_div = createElem('div');

    let pj_cl_name = createElem('h2');
    pj_cl_name.textContent = 'Client';

    let pj_change_cl = createElem('input');
    pj_change_cl.type = 'text';
    pj_change_cl.setAttribute('id', 'chagne-prj-name');

    pj_change_cl.oninput = () => {
        let update_pjname_cl = pj_change_cl.value;

        for (let i in prj_data) {
            prj_data[i].client_name = update_pjname_cl;
        }

        localStorage.setItem('project-details', JSON.stringify(prj_data));

    }

    pj_client_div.append(pj_cl_name, pj_change_cl);

    let prj_div = createElem('div');

    let prj_h2 = createElem('h2');
    prj_h2.textContent = 'Project estimate'

    let prj_p = createElem('p');
    prj_p.textContent = 'Choose how you wish to track project progress (time or fixed fee budget).';

    let prj_sel = createElem('select');
    prj_sel.setAttribute('id', 'prj-sel');

    let prj_opt1 = createElem('option');
    prj_opt1.value = 'no-estimate';
    prj_opt1.textContent = 'No-estimate';

    let prj_opt2 = createElem('option');
    prj_opt2.value = 'time-estimate';
    prj_opt2.textContent = 'Time estimate'

    prj_sel.append(prj_opt1, prj_opt2);

    prj_div.append(prj_h2, prj_p, prj_sel);

    let pro_bud = createElem('div')

    let pro_div_1 = createElem('div');
    pro_div_1.textContent = 'PRO feature';

    let pro_div_2 = createElem('div');

    let pro_btn = createElem('button');
    pro_btn.textContent = 'Upgrade';
    pro_btn.addEventListener('click', () => {
        window.location.href = 'upgrad.html';
    });

    pro_div_2.append(pro_btn);

    pro_bud.append(pro_div_1, pro_div_2);

    pjs_div.append(pj_name_div, pj_client_div, prj_div, pro_bud);

    component_tabs.append(pjs_div);

};

showPrjSettings();

catchElem('.component-tabs > button:nth-child(4)').addEventListener('click', showPrjSettings);