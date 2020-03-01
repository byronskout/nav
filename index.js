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

