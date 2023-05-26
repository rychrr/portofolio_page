// eslint-disable-next-line max-len, no-unused-vars
function createPopUpMenu(titleText, closeIconSrc, listItems, imageSrc, descriptionText, liveBtnText, liveBtnImgSrc, sourceBtnText, sourceBtnImgSrc) {
    var section = document.createElement('section');
    section.classList.add('pop_up_menu');

    var headerDiv = document.createElement('div');
    headerDiv.classList.add('pop_menu_header');

    var title = document.createElement('p');
    title.classList.add('pop_menu_title');
    title.textContent = titleText;
    headerDiv.appendChild(title);

    var closeIcon = document.createElement('img');
    closeIcon.classList.add('pop_menu_cls_icon');
    closeIcon.src = closeIconSrc;
    closeIcon.alt = 'cancel or close icon';
    headerDiv.appendChild(closeIcon);

    section.appendChild(headerDiv);

    var list = document.createElement('ul');
    list.classList.add('pop_menu_list');

    listItems.forEach(function (itemText) {
        var listItem = document.createElement('li');
        listItem.textContent = itemText;
        list.appendChild(listItem);
    });

    section.appendChild(list);

    var contentDiv = document.createElement('div');
    contentDiv.classList.add('pop_menu_content');

    var image = document.createElement('img');
    image.classList.add('pop_menu_img');
    image.src = imageSrc;
    image.alt = 'work section pop ups';
    contentDiv.appendChild(image);

    var content1Div = document.createElement('div');
    content1Div.classList.add('pop_menu_content_1');

    var description = document.createElement('p');
    description.classList.add('pop_menu_descr');
    description.textContent = descriptionText;
    content1Div.appendChild(description);

    var buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('pop_menu_buttons');

    var button1 = document.createElement('button');
    button1.classList.add('pop_menu_btn');
    var span1 = document.createElement('span');
    span1.textContent = liveBtnText;
    var img1 = document.createElement('img');
    img1.src = liveBtnImgSrc;
    img1.alt = 'See Live';
    button1.appendChild(span1);
    button1.appendChild(img1);
    buttonsDiv.appendChild(button1);

    var button2 = document.createElement('button');
    button2.classList.add('pop_menu_btn');
    var span2 = document.createElement('span');
    span2.textContent = sourceBtnText;
    var img2 = document.createElement('img');
    img2.src = sourceBtnImgSrc;
    img2.alt = 'github logo';
    button2.appendChild(span2);
    button2.appendChild(img2);
    buttonsDiv.appendChild(button2);

    content1Div.appendChild(buttonsDiv);
    contentDiv.appendChild(content1Div);
    section.appendChild(contentDiv);

    return section;
}
