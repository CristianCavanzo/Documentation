let openMenu = document.getElementById('headerMenuOpen');
let headerMenuItm1 = document.getElementById('headerMenuItm1');
let headerMenuItm2 = document.getElementById('headerMenuItm2');
let headerMenuItm3 = document.getElementById('headerMenuItm3');
let header_itm3 = document.getElementById('header_itm3');
let menu = document.getElementById('menu');
let closeMenu1;
let closeMenux2;
let moon = document.getElementById('moon');
let openNaturalPerson = document.getElementById('openNaturalPerson');
let openNaturalPerson2 = document.getElementById('openNaturalPerson2');
let legalPerson = document.getElementById('legalPerson');
let naturalPerson = document.getElementById('naturalPerson');
let legalPersonOpen = document.getElementById('legalPersonOpen');
let legalPersonOpen2 = document.getElementById('legalPersonOpen2');
let arrow = document.getElementsByClassName('fa-arrow-left');

let state = 1;
function openMenuF() {
    if (state == 1) {
        headerMenuItm1.classList.add('headerMenuItm1_start');
        headerMenuItm3.classList.add('headerMenuItm3_start');
        headerMenuItm2.classList.add('headerMenuItm2_none');
        header_itm3.classList.add('header_itm3-margin');
        menu.classList.remove('menu_none');
        openMenu.id = 'closeMenu';
        state = 2;
    } else {
        headerMenuItm1.classList.remove('headerMenuItm1_start');
        headerMenuItm3.classList.remove('headerMenuItm3_start');
        headerMenuItm2.classList.remove('headerMenuItm2_none');
        header_itm3.classList.remove('header_itm3-margin');
        menu.classList.add('menu_none');
        state = 1;
    }
}

let estadD = 1;
const darkMode = () => {
    let root = document.querySelector(':root');
    let iconMove = document.getElementById('iconMove');

    if (estadD === 1) {
        let iconChangeSun = document.getElementById('iconChangeSun');
        root.style.setProperty('--background', '#FFFFFF');
        root.style.setProperty('--secundary-color', '#fdfdfd');
        root.style.setProperty('--principal-color', '#000000');
        root.style.setProperty('--line', '#000000');
        root.style.setProperty('--menuI', '#929292');
        root.style.setProperty('--header', '#FFFFFF');
        iconMove.classList.add('header_itm-icon-active-moon');
        iconChangeSun.src = './assets/icon/sun.svg';
        estadD = 0;
    } else {
        root.style.setProperty('--background', '#1e1e1b');
        root.style.setProperty('--secundary-color', '#30302a');
        root.style.setProperty('--principal-color', '#ffffff');
        root.style.setProperty('--line', '#464646');
        root.style.setProperty('--menuI', '#171717');
        root.style.setProperty('--header', '#161614');

        iconMove.classList.remove('header_itm-icon-active-moon');
        iconChangeSun.src = './assets/icon/moon.svg';
        estadD = 1;
    }
};

let estates = [];

let menuReference = document.getElementsByClassName('menu_header');
for (let i = 0; i < menuReference.length; i++) {
    estates.push(1);
}

const changeActive = (i) => {
    let id = i;
    if (estates[id] == 1) {
        let menu_content = document.getElementsByClassName('menu_content');
        let menu_header = menu_content[id];
        menu_header.classList.add('menu_header-none');
        estates[id] = 0;
    } else if (estates[id] == 0) {
        let menu_content = document.getElementsByClassName('menu_content');
        let menu_header = menu_content[id];
        menu_header.classList.remove('menu_header-none');
        estates[id] = 1;
    }
};
const naturalPersonFunction = () => {
    legalPerson.classList.remove('none');
    naturalPerson.classList.add('none');
};

const legarPersonFunction = () => {
    naturalPerson.classList.remove('none');
    legalPerson.classList.add('none');
};

const menu_select = (ref, btn) => {
    const menu_active = document.getElementsByClassName('menu_select-active');
    let documentation_itm =
        document.getElementsByClassName('documentation_itm');
    let idkswdom = document.getElementsByClassName('menu_select-active');
    for (let i = 0; i < documentation_itm.length; i++) {
        documentation_itm[i].classList.add('none');
    }
    for (let i = 0; i < menu_active.length; i++) {
        menu_active[i].classList.remove('here_idk');
    }
    if (ref === 130) {
        document
            .getElementsByClassName('documentation_itm')[15]
            .classList.remove('none');
        menu_active[14].classList.add('here_idk');
    } else {
        if (ref >= 14) {
            if (ref === 24) {
                documentation_itm[ref].classList.remove('none');
                menu_active[13].classList.add('here_idk');
            } else {
                if (btn == 1) {
                    documentation_itm[ref].classList.remove('none');
                } else {
                    menu_active[ref + 1].classList.add('here_idk');
                    documentation_itm[ref + 2].classList.remove('none');
                }
            }
        } else {
            menu_active[ref].classList.add('here_idk');
            documentation_itm[ref].classList.remove('none');
        }
    }

    headerMenuItm1.classList.remove('headerMenuItm1_start');
    headerMenuItm3.classList.remove('headerMenuItm3_start');
    headerMenuItm2.classList.remove('headerMenuItm2_none');
    header_itm3.classList.remove('header_itm3-margin');
    menu.classList.add('menu_none');
    state = 1;
};

const returnInformation = () => {
    menu_select(2);
};
const returnInformation2 = () => {
    menu_select(16);
};

openMenu.addEventListener('click', openMenuF);
moon.addEventListener('click', darkMode);
openNaturalPerson.addEventListener('click', legarPersonFunction);
openNaturalPerson2.addEventListener('click', legarPersonFunction);
legalPersonOpen.addEventListener('click', naturalPersonFunction);
legalPersonOpen2.addEventListener('click', naturalPersonFunction);
arrow[0].addEventListener('click', returnInformation);
arrow[1].addEventListener('click', returnInformation);
arrow[2].addEventListener('click', returnInformation2);
arrow[3].addEventListener('click', returnInformation2);
arrow[4].addEventListener('click', returnInformation2);
