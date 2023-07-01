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
    mainView.innerHTML = `
        <h1>Dashboard</h1>
            
        <div class="date">
            <input type="date">
        </div>
        
        <div class="insights">
            <div class="Precision">
                <span class="material-symbols-outlined">sports_basketball</span>
                <div class="middle">
                    <div class="left">
                        <h3>Model Precision</h3>
                        <h1>69%</h1>
                    </div>
                    <!-- <div class="progress">
                        <svg>
                            <circle cx="38" cy="38" rm="36"></circle>
                        </svg>
                        <div class="number">
                            <p>69%</p>
                        </div> -->
                </div>
                <small class="text-muted">Last 24 Hours</small>
            </div>
            <!------------------ End of Precision------------>
            <div class="Total-Correct">
                <span class="material-symbols-outlined">check</span>
                <div class="middle">
                    <div class="left">
                        <h3>Total Correct</h3>
                        <h1>690</h1>
                    </div>
                    <!-- <div class="progress">
                        <svg>
                            <circle cx="38" cy="38" rm="36"></circle>
                        </svg>
                        <div class="number">
                            <p>69%</p>
                        </div> -->
                </div>
                <small class="text-muted">Last 24 Hours</small>
            </div>
            <!------------------ End of Total Correct ------------>
            <div class="Total-Incorrect">
                <span class="material-symbols-outlined">close</span>
                <div class="middle">
                    <div class="left">
                        <h3>Total Incorrect</h3>
                        <h1>327</h1>
                    </div>
                    <!-- <div class="progress">
                        <svg>
                            <circle cx="38" cy="38" rm="36"></circle>
                        </svg>
                        <div class="number">
                            <p>69%</p>
                        </div> -->
                </div>
                <small class="text-muted">Last 24 Hours</small>
            </div>
            <!------------------ End of Total Incorrect ------------>
        </div>
        <!------------------------- END OF INSIGHT -------------------->
        <div class="recent-games">
            <h2>Recent Games</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Matchup</th>
                        <th>Home Team Prob%</th>
                        <th>Away Team Prob%</th>
                        <th>Outcome</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="primary"> 12/25/22 </td>
                        <td>Boston @ Detroit</td>
                        <td>25%</td>
                        <td>75%</td>
                        <td class="correct">✓</td>
                    </tr>
                    <tr>
                        <td class="primary"> 01/02/23 </td>
                        <td>Miami @ LAL</td>
                        <td>50%</td>
                        <td>50%</td>
                        <td class="incorrect">x</td>
                    </tr>
                    <tr>
                        <td class="primary"> 01/07/23 </td>
                        <td>Dallas @ Houston</td>
                        <td>12%</td>
                        <td>88%</td>
                        <td class="correct">✓</td>
                    </tr>
                    <tr>
                        <td class="primary"> 01/08/23 </td>
                        <td>Denver @ Cleveland</td>
                        <td>20%</td>
                        <td>80%</td>
                        <td class="incorrect">x</td>
                    </tr>
                    <tr>
                        <td class="primary"> 01/08/23 </td>
                        <td>Washington @ Indianapolis</td>
                        <td>50%</td>
                        <td>50%</td>
                        <td class="correct">✓</td>
                    </tr>
                    <tr>
                        <td class="primary"> 01/10/23 </td>
                        <td>GSW @ OKC</td>
                        <td>40%</td>
                        <td>60%</td>
                        <td class="incorrect">x</td>
                    </tr>
                </tbody>
            </table>
            <a href="#">Show All</a>
        </div>
    `
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
                <!----------------- END OF TOP --------------->
                <div class="upcoming-schedule">
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
                </div>
            </div>
    `
    container.style.gridTemplateColumns = '15rem auto 23rem';
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


