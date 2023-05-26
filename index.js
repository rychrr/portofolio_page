const hamburgerIcon = document.getElementById('menubar');
const mobileMenu = document.querySelector('.mobile_menu_main');
const closeButton = document.getElementById('x_button');
//
// ".headline,.work_section,.about_us_main,.work_skills,.contact_form,.footer"
const hidePages = document.querySelectorAll('.top_header, .main, .footer');
const menuOptions = document.querySelectorAll('.mobile_menu_ul > li');

mobileMenu.style.display = 'none';

function toggleHideClass(listHides) {
  listHides.forEach((hidePage) => {
    hidePage.classList.toggle('hide');
  });
}

// Event listener for opening the mobile menu
hamburgerIcon.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  toggleHideClass(hidePages);
});

// Event listener for closing the mobile menu
closeButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

// Event listeners for menu options
menuOptions.forEach((menuOption) => {
  menuOption.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    toggleHideClass(hidePages);
  });
});
