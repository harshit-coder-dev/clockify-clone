
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
    getTags();
};

let getTags = () => {
    showTags();
}

catchElem('.add-tag').addEventListener('click', AddTags);

let content_data = catchElem('.content-data > div:nth-child(2)');

let showTags = () => {

    content_data.innerHTML = '';

    let cont_div = createElem('div');

    tags.forEach((e) => {

        let tag_d = createElem('div');
        tag_d.setAttribute('class', 'tag-d');

        let tag_div = createElem('div');

        let tag_div_p = createElem('p');
        tag_div_p.textContent = e.tag;

        tag_div.append(tag_div_p);

        let tag_ctrl = createElem('div');

        let rem_btn = createElem('button');
        rem_btn.textContent = 'x';
        rem_btn.addEventListener('click', () => {
            removeTags(e);
        });

        let edit_btn = createElem('button');
        edit_btn.textContent = '⁞';
        edit_btn.addEventListener('click', () => {
            EditTags(e);
        });

        tag_ctrl.append(edit_btn, rem_btn);

        tag_d.append(tag_div, tag_ctrl);

        cont_div.append(tag_d);

    });
    content_data.append(cont_div);
};

let removeTags = (e) => {
    tags = tags.filter((ele) => {
        return ele !== e;
    });
    localStorage.setItem('tags', JSON.stringify(tags));
    getTags();
};

let EditTags = (e) => {
    openEditModal(e);
}

let modal = catchElem('.modal');

let openEditModal = (e) => {

    modal.innerHTML = '';
    modal.style.display = 'block';

    let modal_cont = createElem('div');
    modal_cont.setAttribute('class', 'modal-content');

    let detail_div = createElem('div');
    detail_div.setAttribute('class', 'tag-1')

    let edit_tag = createElem('p');
    edit_tag.textContent = 'Edit Tag';

    detail_div.append(edit_tag);

    let edit_opt = createElem('div');

    let edit_opt_1 = createElem('p');
    edit_opt_1.textContent = 'Change Name';

    let edit_opt_2 = createElem('input');
    edit_opt_2.type = 'text';
    edit_opt_2.setAttribute('id', 'edit-tag');

    edit_opt.append(edit_opt_1, edit_opt_2);

    let edit_ctrl = createElem('div');

    let edit_cls = createElem('button');
    edit_cls.textContent = 'Close';
    edit_cls.addEventListener('click', () => {
        closeEditModal();
    })

    let edit_cls_2 = createElem('button');
    edit_cls_2.textContent = 'Save';
    edit_cls_2.addEventListener('click', () => {

        // EditandSaveTag(e);
        console.log(e);

        tags.forEach((elem) => {

            for (let key in e) {

                if (elem.tag === e[key]) {

                    let updated_tag = catchElem('#edit-tag').value;

                    e[key] = updated_tag;

                    localStorage.setItem('tags', JSON.stringify(tags));
                }
            }
        })
        getTags();
    });

    edit_ctrl.append(edit_cls, edit_cls_2);

    modal_cont.append(detail_div, edit_opt, edit_ctrl);

    modal.append(modal_cont);

}

let closeEditModal = () => {
    modal.style.display = 'none';
}

openEditModal();

closeEditModal();


