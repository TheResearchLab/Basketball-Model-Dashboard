'use strict';

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
let themeToggler = document.querySelector(".theme-toggler");
// Pages
const dashboardBtn = document.querySelector("#dashboard"); 
const upcomingBtn = document.querySelector("#upcoming");
const performanceBtn = document.querySelector("#performance");
const backtestBtn = document.querySelector("#backtest");
const aboutUsBtn = document.querySelector("#aboutUs");
const settingsBtn = document.querySelector("#settings");

const mainView = document.querySelector("main");
const rightView = document.querySelector(".right");

// open and close sidebar
menuBtn.addEventListener('click', ()=> {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

const toggleTheme = function() {
    themeToggler.querySelectorAll('span')[0].classList.toggle('active');
    themeToggler.querySelectorAll('span')[1].classList.toggle('active');
    document.body.classList.toggle('dark-theme-variables');
}

// Light - Dark Theme
themeToggler.addEventListener('click',toggleTheme);

// Page Navigation

const activeEl = function() {
    return document.querySelector(".active");
} 

const changeActivePage = function(e,pageId) {
    const el = e.target.closest(pageId);
    console.log(activeEl().classList.contains('active'));

    if(el.classList.contains('active')) return;

    activeEl().classList.remove('active');
    el.classList.add('active');
}

const clearPage = function() {
    mainView.innerHTML = ''; 
    rightView.innerHTML = `
    <div class="top">
        <button id="menu-btn">
            <span class="material-symbols-outlined">menu</span>
        </button> 
        <div class="theme-toggler">
            <span class="material-symbols-outlined active">light_mode</span>
            <span class="material-symbols-outlined">dark_mode</span>
        </div>
    </div>
 `;
    themeToggler = document.querySelector(".theme-toggler");
    themeToggler.addEventListener('click',toggleTheme);
}

dashboardBtn.addEventListener('click', function(e) {
    changeActivePage(e,"#dashboard"); 
});

upcomingBtn.addEventListener('click', function(e) {
    changeActivePage(e,"#upcoming"); 
    clearPage(); 
});

performanceBtn.addEventListener('click', function(e) {
    changeActivePage(e,"#performance");  
    clearPage(); 
});

backtestBtn.addEventListener('click', function(e) {
    changeActivePage(e,"#backtest"); 
    clearPage();  
});

aboutUsBtn.addEventListener('click', function(e) {
    changeActivePage(e,"#aboutUs");   
    clearPage();
});

settingsBtn.addEventListener('click', function(e) {
    changeActivePage(e,"#settings");   
    clearPage();
})


