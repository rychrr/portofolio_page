// Build function to receive
function createPopUpMenu(
  titleText,
  listItems,
  imageSrc,
  descriptionText,
  linkSource,
  liveVersion,
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
  closeIcon.setAttribute('src', './img/cancel_Icon.png');
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

  const button1 = document.createElement('a');
  button1.classList.add('pop_menu_btn');
  button1.setAttribute('href', liveVersion);
  const span1 = document.createElement('span');
  span1.textContent = 'See Live';
  const img1 = document.createElement('img');
  img1.alt = 'See Live';
  img1.src = './img/see_live_icon.png';
  button1.appendChild(span1);
  button1.appendChild(img1);
  buttonsDiv.appendChild(button1);

  const button2 = document.createElement('a');
  button2.classList.add('pop_menu_btn');
  button2.setAttribute('href', linkSource);
  const span2 = document.createElement('span');
  span2.textContent = 'See source';

  const img2 = document.createElement('img');
  img2.alt = 'github logo';
  img2.src = './img/social_media_logo/github.png';
  button2.appendChild(span2);
  button2.appendChild(img2);
  buttonsDiv.appendChild(button2);

  content1Div.appendChild(buttonsDiv);
  contentDiv.appendChild(content1Div);
  section.appendChild(contentDiv);

  return section;
}

function extractDataFromSections() {
  // images to use in building the pop up
  const workLinkArr = [
    './img/grid_img_1.png',
    './img/grid_img_2.png',
    './img/grid_img_3.png',
    './img/grid_img_4.png',
    './img/grid_img_5.png',
    './img/grid_img_6.png',
  ];

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

  return extractedData;
}

// Get Array  of List
const projDetails = {
  nameText: 'Keeping track of hundreds  of components website',
  descriptionText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,

  skills: ['HTML', 'Boostrap', 'Ruby on Rails'],
  liveVersion: 'https://rychrr.github.io/',
  linkSource: 'https://github.com/rychrr/portofolio_page',
  featuredImage: './img/works_popup.png',
};

const extractedData = extractDataFromSections();
extractedData.unshift(projDetails);
const popUpMenus = [];

extractedData.forEach((item) => {
  const popUpMenu = createPopUpMenu(
    item.nameText,
    item.skills,
    item.featuredImage,
    item.descriptionText,
    item.linkSource,
    item.liveVersion,
  );

  popUpMenus.push(popUpMenu);
});

function removePopup(popupElement) {
  if (popupElement) {
    popupElement.remove();
  }
}

// Intereact with DOM and Apply event listeners on the work section
const workSection1 = document.querySelector('.rec_works_section.proj_1');
const workSection2 = document.querySelector('.rec_works_section.proj_2');
const workSection3 = document.querySelector('.rec_works_section.proj_3');
const workSection4 = document.querySelector('.rec_works_section.proj_4');
const workSection5 = document.querySelector('.rec_works_section.proj_5');
const workSection6 = document.querySelector('.rec_works_section.proj_6');
const parentTarget = document.getElementById('portfolio');
const firstChildTarget = document.querySelector('.rec_works_section_main');

let isPopupOpen = false;

firstChildTarget.addEventListener('click', () => {
  if (!isPopupOpen) {
    parentTarget.insertBefore(popUpMenus[0], firstChildTarget.nextElementSibling);
    const menuPopUp = document.querySelector('.pop_up_menu');
    menuPopUp.scrollIntoView({ behavior: 'smooth' });
    const closePopUp = document.querySelector('.pop_menu_cls_icon');
    closePopUp.addEventListener('click', () => {
      removePopup(menuPopUp);
      firstChildTarget.scrollIntoView({ behavior: 'smooth' });
      isPopupOpen = false; // Update the state of the pop-up menu
    });
    isPopupOpen = true; // Update the state of the pop-up menu
  }
});


workSection1.addEventListener('click', () => {
  if (!isPopupOpen) {
    parentTarget.insertBefore(popUpMenus[1], firstChildTarget.nextElementSibling);
    const menuPopUp = document.querySelector('.pop_up_menu');
    menuPopUp.scrollIntoView({ behavior: 'smooth' });
    const closePopUp = document.querySelector('.pop_menu_cls_icon');
    closePopUp.addEventListener('click', () => {
      removePopup(menuPopUp);
      workSection1.scrollIntoView({ behavior: 'smooth' });
      isPopupOpen = false; // Update the state of the pop-up menu
    });
    isPopupOpen = true; // Update the state of the pop-up menu
  }
});

workSection2.addEventListener('click', () => {
  if (!isPopupOpen) {
    parentTarget.insertBefore(popUpMenus[2], firstChildTarget.nextElementSibling);
    const menuPopUp = document.querySelector('.pop_up_menu');
    menuPopUp.scrollIntoView({ behavior: 'smooth' });
    const closePopUp = document.querySelector('.pop_menu_cls_icon');
    closePopUp.addEventListener('click', () => {
      removePopup(menuPopUp);
      workSection1.scrollIntoView({ behavior: 'smooth' });
      isPopupOpen = false; // Update the state of the pop-up menu
    });
    isPopupOpen = true; // Update the state of the pop-up menu
  }
});

workSection3.addEventListener('click', () => {
  if (!isPopupOpen) {
    parentTarget.insertBefore(popUpMenus[3], firstChildTarget.nextElementSibling);
    const menuPopUp = document.querySelector('.pop_up_menu');
    menuPopUp.scrollIntoView({ behavior: 'smooth' });
    const closePopUp = document.querySelector('.pop_menu_cls_icon');
    closePopUp.addEventListener('click', () => {
      removePopup(menuPopUp);
      workSection1.scrollIntoView({ behavior: 'smooth' });
      isPopupOpen = false; // Update the state of the pop-up menu
    });
    isPopupOpen = true; // Update the state of the pop-up menu
  }
});

workSection4.addEventListener('click', () => {
  if (!isPopupOpen) {
    parentTarget.insertBefore(popUpMenus[4], firstChildTarget.nextElementSibling);
    const menuPopUp = document.querySelector('.pop_up_menu');
    menuPopUp.scrollIntoView({ behavior: 'smooth' });
    const closePopUp = document.querySelector('.pop_menu_cls_icon');
    closePopUp.addEventListener('click', () => {
      removePopup(menuPopUp);
      workSection1.scrollIntoView({ behavior: 'smooth' });
      isPopupOpen = false; // Update the state of the pop-up menu
    });
    isPopupOpen = true; // Update the state of the pop-up menu
  }
});

workSection5.addEventListener('click', () => {
  if (!isPopupOpen) {
    parentTarget.insertBefore(popUpMenus[5], firstChildTarget.nextElementSibling);
    const menuPopUp = document.querySelector('.pop_up_menu');
    menuPopUp.scrollIntoView({ behavior: 'smooth' });
    const closePopUp = document.querySelector('.pop_menu_cls_icon');
    closePopUp.addEventListener('click', () => {
      removePopup(menuPopUp);
      workSection1.scrollIntoView({ behavior: 'smooth' });
      isPopupOpen = false; // Update the state of the pop-up menu
    });
    isPopupOpen = true; // Update the state of the pop-up menu
  }
});

workSection6.addEventListener('click', () => {
  if (!isPopupOpen) {
    parentTarget.insertBefore(popUpMenus[6], firstChildTarget.nextElementSibling);
    const menuPopUp = document.querySelector('.pop_up_menu');
    menuPopUp.scrollIntoView({ behavior: 'smooth' });
    const closePopUp = document.querySelector('.pop_menu_cls_icon');
    closePopUp.addEventListener('click', () => {
      removePopup(menuPopUp);
      workSection1.scrollIntoView({ behavior: 'smooth' });
      isPopupOpen = false; // Update the state of the pop-up menu
    });
    isPopupOpen = true; // Update the state of the pop-up menu
  }
});
