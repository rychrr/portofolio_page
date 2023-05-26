// createPopUpMenu (
//     nameText,
//     skills,
//     featuredImage,
//     descriptionText
//     linkSource
//     liveVersion

// )

// Build function to receive
function createPopUpMenu(
  titleText,
  listItems,
  imageSrc,
  descriptionText,
) {
  const section = document.createElement('section');
  section.classList.add('pop_up_menu');

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('pop_menu_header');

  const title = document.createElement('p');
  title.classList.add('pop_menu_title');
  title.textContent = titleText;
  headerDiv.appendChild(title);

  const closeIcon = document.createElement('img');
  closeIcon.classList.add('pop_menu_cls_icon');
  closeIcon.alt = 'cancel or close icon';
  headerDiv.appendChild(closeIcon);

  section.appendChild(headerDiv);

  const list = document.createElement('ul');
  list.classList.add('pop_menu_list');

  listItems.forEach((itemText) => {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
  });

  section.appendChild(list);

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('pop_menu_content');

  const image = document.createElement('img');
  image.classList.add('pop_menu_img');
  image.src = imageSrc;
  image.alt = 'work section pop ups';
  contentDiv.appendChild(image);

  const content1Div = document.createElement('div');
  content1Div.classList.add('pop_menu_content_1');

  const description = document.createElement('p');
  description.classList.add('pop_menu_descr');
  description.textContent = descriptionText;
  content1Div.appendChild(description);

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('pop_menu_buttons');

  const button1 = document.createElement('button');
  button1.classList.add('pop_menu_btn');
  const span1 = document.createElement('span');

  const img1 = document.createElement('img');
  img1.alt = 'See Live';
  button1.appendChild(span1);
  button1.appendChild(img1);
  buttonsDiv.appendChild(button1);

  const button2 = document.createElement('button');
  button2.classList.add('pop_menu_btn');
  const span2 = document.createElement('span');
  const img2 = document.createElement('img');
  img2.alt = 'github logo';
  button2.appendChild(span2);
  button2.appendChild(img2);
  buttonsDiv.appendChild(button2);

  content1Div.appendChild(buttonsDiv);
  contentDiv.appendChild(content1Div);
  section.appendChild(contentDiv);

  return section;
}

const workLinkArr = ['./img/grid_img_1.png',
  './img/grid_img_2.png',
  './img/grid_img_3.png',
  './img/grid_img_4.png',
  './img/grid_img_5.png',
  './img/grid_img_6.png'];

//   Search  for rec_works_setions class in  the html
const sections = document.querySelectorAll('.rec_works_section');
const extractedData = [];

sections.forEach((section) => {
  const data = {};
  const name = section.querySelector('.rec_works_header');
  const description = section.querySelector('.recent_work_desc');
  const technologies = section.querySelectorAll('.rec_skills_list li');

  // Extract details within the tag and store in the object
  data.nameText = name.textContent;
  data.descriptionText = description.textContent;
  data.skills = [];
  technologies.forEach((skill) => {
    data.skills.push(skill.textContent);
  });
  data.liveVersion = 'https://rychrr.github.io/';
  data.linkSource = 'https://github.com/rychrr/portofolio_page';

  // Push the object into the array
  extractedData.push(data);
});

extractedData.forEach((item, index) => {
  const workLinkIndex = index % workLinkArr.length;
  item.featuredImage = workLinkArr[workLinkIndex];
});

console.log(extractedData);