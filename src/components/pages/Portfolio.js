import React from 'react';
import '../../styles/App.css';


function Portfolio() {
    return (
        <div>
            <section class="section" >
        <h3>Portfolio</h3>
        <section class="portfolio-container" id="Portfolio">
  
          <a href="https://vyncent-t.github.io/atmosphere-project/" class="box atmos" >
            <div>
              <h5>Atmos Project</h5>
              
              
            </div>
          </a>
          
          <a href="https://baloyd.github.io/workday-scheduler/" class="box scheduler" >
            <div>
              <h5>Workday Scheduler</h5>
             
              
            </div>
          </a>
          <a href="https://baloyd.github.io/weather-dashboard/" class="box weather" >
            <div>
              <h5>Weather Dashboard</h5>
            
            </div>
          </a>
  
          <a href="https://roundtable-online-book-club.herokuapp.com/" class="box roundTable" >
            <div>
              <h5>RoundTable</h5>
              
            </div>
          </a>
  
      
          <a href="https://baloyd.github.io/teamProfile-generator/" class="box profile" >
            <div>
              <h5>Team Profile Generator</h5>
              
            </div>
          </a>
  
        </section>
      </section>
        </div>
    )
}



export default Portfolio;