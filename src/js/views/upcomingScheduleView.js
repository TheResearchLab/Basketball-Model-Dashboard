import View from './view.js'

class UpcomingScheduleView extends View {
    _parentElement = document.querySelector(".rightBottom");

    _generateMarkup() {
        return `
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
    }
}

export default new UpcomingScheduleView();