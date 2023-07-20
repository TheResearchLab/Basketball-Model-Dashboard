'use strict';

// This will become a controller
import dashboardView from './views/dashboardView.js'
import upcomingScheduleView from './views/upcomingScheduleView.js';
import upcomingCalendarView from './views/upcomingCalendarView.js'

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


// Container Element Listener
container.addEventListener('click',function(e) {
    if(!upcomingBtn.classList.contains('active')) return;    
    // console.log(e.target);
    if(e.target.matches('.games')) {
        matchupView.style.display = "block";
    } 
    if(e.target.matches('.closeMatchup')) {
        matchupView.style.display = "none";
    }
})

const toggleTheme = function() {
    themeToggler.querySelectorAll('span')[0].classList.toggle('active');
    themeToggler.querySelectorAll('span')[1].classList.toggle('active');
    document.body.classList.toggle('dark-theme-variables');
    console.log('click');
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
    rightBottomView.innerHTML = '';
    }

dashboardBtn.addEventListener('click', function(e) {
    changeActivePage(e,"#dashboard"); 
    
    // update main section
    dashboardView.render();
    
    // update right section
    upcomingScheduleView.render();
    
    container.style.gridTemplateColumns = '15rem auto 23rem'; 


});

upcomingBtn.addEventListener('click', function(e) {
    changeActivePage(e,"#upcoming"); 
    clearPage(); 

    //render calendar
    upcomingCalendarView.render();
    
    const markup = `
        <div id="myModal" class="matchup">
            <div class="matchup-content">
              <span class="closeMatchup">x</span>
              <p>This is a modal popup.</p>
            </div>
          </div>
    `
    ;
    mainView.insertAdjacentHTML('afterend',markup);
    container.style.gridTemplateColumns = '15rem 80rem auto';
    console.log(mainView.querySelector(".current-date").innerText);
    matchupView = document.querySelector('.matchup');
});

performanceBtn.addEventListener('click', function(e) {
    changeActivePage(e,"#performance");  
    clearPage(); 
});

// backtestBtn.addEventListener('click', function(e) {
//     changeActivePage(e,"#backtest"); 
//     clearPage();  
// });

aboutUsBtn.addEventListener('click', function(e) {
    changeActivePage(e,"#aboutUs");   
    clearPage();
});

settingsBtn.addEventListener('click', function(e) {
    changeActivePage(e,"#settings");   
    clearPage();
})


