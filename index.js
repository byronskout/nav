const sectionsContainer = document.querySelector('.page-sections');
const sections = document.querySelectorAll('.page-section');
const nav = document.querySelector('.nav-sections');
const menu = nav.querySelector('.menu');
const links = nav.querySelectorAll('.menu-item-link');
const activeLine = nav.querySelector('.active-line');
const sectionOffset = nav.offsetHeight + 24;
const activeClass = 'active';
let activeIndex = 0;
let isScrolling = true;
let userScroll = true;

const setActiveClass = () => {
    links[activeIndex].classList.add(activeClass);
};

const removeActiveClass = () => {
    links[activeIndex].classList.remove(activeClass);
};

const moveActiveLine = () => {
    const link = links[activeIndex];
    const linkX = link.getBoundingClientRect().x;
    const menuX = menu.getBoundingClientRect().x;

    activeLine.style.transform = `translateX(${(menu.scrollLeft - menuX) + linkX}px)`;
    activeLine.style.width = `${link.offsetWidth}px`;
}

const setMenuLeftPosition = position => {
    menu.scrollTo({
        left: position,
        behavior: 'smooth',
    });
};
