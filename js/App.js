const nav = document.querySelector('.header');

const navActionBtn = () => {
    if (!nav.classList.contains('opened')) {
        nav.classList.add('opened');
    } else {
        nav.classList.remove('opened');
    }
}

let typeOfDeveloperSpan = document.querySelector('.short-intro-bgcolor');
let typeOfDeveloper = ['vue.js', 'node.js', 'back end', 'php/mysql', 'mobile', 'desktop', 'web', 'full stack'];
let typeOfDevIndex = 0;

setInterval(() => {
    if (typeOfDevIndex < typeOfDeveloper.length) {
        typeOfDeveloperSpan.innerHTML = typeOfDeveloper[typeOfDevIndex];
        typeOfDevIndex++;
    } else {
        clearInterval();
    }
}, 255);