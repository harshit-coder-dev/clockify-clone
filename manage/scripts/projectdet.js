
let prj_data = JSON.parse(localStorage.getItem('project-details'));

let catchElem = (val) => {
    return document.querySelector(val);
};

let createElem = (val) => {
    return document.createElement(val);
};

for (let i of prj_data) {
    catchElem('#component-1 > h1').textContent = i.project_name;
    catchElem('#component-1 > p').textContent = i.client_name;
}

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



catchElem('.component-tabs > button:nth-child(3)').addEventListener('click', showNote);