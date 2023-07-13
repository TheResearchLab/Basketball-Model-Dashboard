import View from './view.js'

class DashboardView extends View {
    _parentElement = document.querySelector("main");
    
    
    
    _generateMarkup() {
        return`
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
    }


} 

export default new DashboardView();