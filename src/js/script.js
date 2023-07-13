'use strict';

// This will become a controller
import dashboardView from './views/dashboardView.js'

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
const rightBottomView = document.querySelector(".rightBottom");

const months = ['January', 'February','March','April','May','June','July','August','September','October', 'November','December'];

//container
const container = document.querySelector('.container');

//matchup window
let matchupView; 

// open and close sidebar - need to add a menubtn to other pages too
// menuBtn.addEventListener('click', ()=> {
//     sideMenu.style.display = 'block';
// })

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

const toggleTheme = function() {
    themeToggler.querySelectorAll('span')[0].classList.toggle('active');
    themeToggler.querySelectorAll('span')[1].classList.toggle('active');
    document.body.classList.toggle('dark-theme-variables');
    console.log('click');
}

// Light - Dark Theme
themeToggler.addEventListener('click',toggleTheme);


// Main Element Listener
mainView.addEventListener('click',function(e) {
    if(!upcomingBtn.classList.contains('active')) return;    
    if(e.target.matches('.games')) {
        matchupView.style.display = "block";
    } else {
        matchupView.style.display = "none";
    }
    // console.log(e.target.style);
})

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
    rightBottomView.innerHTML = '';
    }

dashboardBtn.addEventListener('click', function(e) {
    changeActivePage(e,"#dashboard"); 
    
    // update main section
    dashboardView.render();
    
    // update right section
    rightBottomView.innerHTML = `
    <h2>Upcoming Schedule</h2>
    <div class="schedule">
        <div class="next-game">
            <div class="message">
                <p><b>Detroit @ Portland</b> Portland is the favorite</p>
                <small class="text-muted">Sunday @ 8pm</small>
            </div>
        </div>
        <div class="next-game">
            <div class="message">
                <p><b>Philli @ Phoenix</b> Phoenix is the favorite </p>
                <small class="text-muted">Sunday @ 8pm</small>
            </div>
        </div>
        <div class="next-game">
            <div class="message">
                <p><b>GSW @ New Orleans</b> GSW is the favorite</p>
                <small class="text-muted">Sunday @ 8pm</small>
            </div>
        </div>
        <div class="next-game">
            <div class="message">
                <p><b>Detroit @ Portland</b> Portland is the favorite</p>
                <small class="text-muted">Sunday @ 8pm</small>
            </div>
        </div>
        <div class="next-game">
            <div class="message">
                <p><b>Philli @ Phoenix</b> Phoenix is the favorite </p>
                <small class="text-muted">Sunday @ 8pm</small>
            </div>
        </div>
        <div class="next-game">
            <div class="message">
                <p><b>GSW @ New Orleans</b> GSW is the favorite</p>
                <small class="text-muted">Sunday @ 8pm</small>
            </div>
        </div>
        <div class="next-game">
            <div class="message">
                <p><b>GSW @ New Orleans</b> GSW is the favorite</p>
                <small class="text-muted">Sunday @ 8pm</small>
            </div>
        </div>
    </div>
    <a href="#">Show All</a>
    `
    container.style.gridTemplateColumns = '15rem auto 23rem'; 


});

upcomingBtn.addEventListener('click', function(e) {
    let date = new Date();
    changeActivePage(e,"#upcoming"); 
    clearPage(); 
    mainView.innerHTML = `
        <h1 class="pageTitle">Upcoming</h1>
        <header>
        <p class="current-date">${months[date.getMonth()]} ${date.getFullYear()}</p>
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
            <li class="inactive">
                <p class="day">28</p>
                <p class="games"></p>
            </li>
            <li class="inactive">
                <p class="day">29</p>
                <p class="games"></p>
            </li>
            <li class="inactive">
                <p class="day">30</p>
                <p class="games"></p>
            </li>
            <li class="inactive">
                <p class="day">31</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">1</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">2</p>
                <p class="games">•</p>
            </li>
            <li>
                <p class="day">3</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">4</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">5</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">6</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">7</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">8</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">9</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">10</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">11</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">12</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">13</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">14</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">15</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">16</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">17</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">18</p>
                <p class="games">•</p>
            </li>
            <li>
                <p class="day">19</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">20</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">21</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">22</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">23</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">24</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">25</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">26</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">27</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">28</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">29</p>
                <p class="games"></p>
            </li>
            <li>
                <p class="day">30</p>
                <p class="games"></p>
            </li>
            <li class="inactive">
                <p class="day">1</p>
                <p class="games"></p>
            </li>
        </ul>
                
        </div>

        
        <div id="myModal" class="matchup">
            <div class="matchup-content">
              <span class="closeMatchup">x</span>
              <p>This is a modal popup.</p>
            </div>
          </div>
    `
    container.style.gridTemplateColumns = '15rem 80rem auto';
    console.log(mainView.querySelector(".current-date").innerText);
    matchupView = document.querySelector('.matchup');
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


