import View from './view.js'

class UpcomingCalendarView extends View {
    _parentElement = document.querySelector("main");
    _months  = ['January', 'February','March','April','May','June','July','August','September','October', 'November','December'];
    _date = new Date(); //probably doesn't belong here long-term

    _generateMarkup() {
        return `
        <h1 class="pageTitle">Upcoming</h1>
        <header>
        <p class="current-date">${this._months[this._date.getMonth()]} ${this._date.getFullYear()}</p>
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
        `
    }
}

export default new UpcomingCalendarView();