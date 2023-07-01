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

//container
const container = document.querySelector('.container');

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
    mainView.innerHTML = `
        <h1 class="pageTitle">Upcoming</h1>
        <header>
        <p class="current-date">September 2022</p>
        <div class="calendarNav">
            <span class="material-symbols-outlined">chevron_left</span>
            <span class ="material-symbols-outlined">chevron_right</span>
        </div>
        </header>
        <div class="calendar">
        <ul class="weeks">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
        </ul>
        <ul class="days">
            <li class="inactive">28</li>
            <li class="inactive">29</li>
            <li class="inactive">30</li>
            <li class="inactive">31</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li class="inactive">1</li>
        </ul>
                
        </div>
    `
    container.style.gridTemplateColumns = '15rem 80rem auto';
    console.log('done');
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


