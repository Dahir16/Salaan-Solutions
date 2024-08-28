const navbar = document.querySelector('.navbar');
const bars = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-close');
const navItems = document.querySelectorAll('.navItem > a')
const list = document.querySelector('ul');
const submenu = document.querySelector('.sub-menu');
const listItems = list.querySelectorAll('li');
const toggleDropdown = document.querySelectorAll('.navItem > a .fa-angle-down');
const slideImg = document.querySelector('#slideImg');
const companies = document.querySelectorAll('.companies')
const nav_overlay = document.querySelector('.nav_overlay');
let currentIndex = 0;
let counter = 0;


window.onclick = function(event) {
    if(!event.target.matches('.fa-angle-down')) {
        if(submenu.classList.contains('collapse')) {
            submenu.classList.remove('collapse');
        }
    }
}


// open the navbar 
bars.addEventListener('click', () => {
    navbar.classList.add('active');
    nav_overlay.classList.add('active');
});
// close the navbar
close.addEventListener('click', () => {
    navbar.classList.remove('active');
    nav_overlay.classList.remove('active');
});
// activate each nav when clicked.
document.addEventListener('click', () => {
    listItems.forEach(item => {
        item.addEventListener('click', e => {
            const activeList = list.querySelector('.show');
            if(activeList) {
                activeList.classList.remove('show');
            }
            e.currentTarget.querySelector('a').classList.add('show');
        });
    });
});

// collapse submenu
// toggleDropdown.forEach(icon => {
//     icon.addEventListener('click', (e) => {
//         e.preventDefault();
//         const subMenu = icon.closest('.navItem').querySelector('.sub-menu');
//         subMenu.classList.toggle('collapse');
//         icon.classList.toggle('rotate');
//     });
// });
// const toggleDropdown = document.querySelectorAll('.navItem > a'); // Select dropdown triggers

toggleDropdown.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        const subMenu = icon.closest('.navItem').querySelector('.sub-menu');
        if (subMenu) {
            subMenu.classList.toggle('collapse');
            subMenu.classList.toggle('show');
            icon.classList.toggle('rotate');
        }
    });
});

// Close sub-menu when clicking outside
document.addEventListener('click', (e) => {
    // Check if the click is outside any navItem and sub-menu
    if (!e.target.closest('.navItem') && !e.target.closest('.fa-bars')) {
        document.querySelectorAll('.sub-menu.show').forEach(menu => {
            menu.classList.add('collapse');
            menu.classList.remove('show');
        });
        document.querySelectorAll('.fa-angle-down.rotate').forEach(icon => {
            icon.classList.remove('rotate');
        });
    }
});
const images = [
    '/public/images/hero_02.jpg',
    '/public/images/hard-2.jpg',
    '/public/images/hero_03.jpg',
    '/public/images/hero_5.jpg',
]

function slideBackground() {
    const slideImg = document.querySelector('#slideImg');

    // First, reset the animation to re-trigger it later
    slideImg.style.animation = 'none'; // Directly set to 'none' to clear any ongoing animation

    // Update the image source immediately after resetting the animation
    slideImg.src = images[currentIndex];

    // Force a reflow (repaint) to ensure the animation reset takes effect immediately
    void slideImg.offsetWidth; // This forces the browser to process the animation reset

    // Apply the zoom animation again
    slideImg.style.animation = 'zoom 6s ease infinite';

    // Update the current index for the next image
    currentIndex = (currentIndex + 1) % images.length;
}

// Change image and apply animation every 5 seconds
setInterval(slideBackground, 5000);

// Initialize with the first image and animation
slideBackground();


if(!window.matchMedia('(prefers-reduced-motion: reduce').matches) {
    addAnimation();
}

function addAnimation () {
    companies.forEach(scroller => {
        scroller.setAttribute('data-animated', true);
        const inner_scroller = scroller.querySelector('.inner__scroller');
        const scrollerContent = Array.from(inner_scroller.children);
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            inner_scroller.appendChild(duplicatedItem);
        })
    })
}