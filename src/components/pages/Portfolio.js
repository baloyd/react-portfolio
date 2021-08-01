import React from 'react';
import '../../styles/App.css';
import github from '../../images/GitHub-Mark-Light-32px.png'


function Portfolio() {
    return (
        <div>
            <section class="section" >
        <h3>Portfolio</h3>
        <section class="portfolio-container" id="Portfolio">
  
          <a href="https://vyncent-t.github.io/atmosphere-project/" class="box atmos" >
            <div className="description">
              <h5>Atmos Project</h5> 
              <p>Brings music & visuals together to create a personalized experience.</p>
              <a href="https://github.com/vyncent-t/atmosphere-project"><img alt="" src={github}></img></a>
              
              
            </div>
          </a>
          
          <a href="https://baloyd.github.io/workday-scheduler/" class="box scheduler" >
            <div className="description">
              <h5>Workday Scheduler</h5> 
              <p>Plan out your day with color coded blocks that update in real-time.</p>
              <a href="https://github.com/baloyd/workday-scheduler"><img alt="" src={github}></img></a>

             
              
            </div>
          </a>
          <a href="https://baloyd.github.io/weather-dashboard/" class="box weather" >
            <div className="description">
              <h5>Weather Dashboard</h5>
             <p>Search and manage forecasts for multiple cities and receive a 5-day forecast.</p>
               <a href="https://github.com/baloyd/weather-dashboard"><img alt="" src={github}></img></a>
            
            </div>
          </a>
  
          <a href="https://roundtable-online-book-club.herokuapp.com/" class="box roundTable" >
            <div className="description">
              <h5>RoundTable</h5>
              <p>An online book club where users can discuss,rate,and vote on future book discussions.</p>
               <a href="https://github.com/emilyfern121/book-club"><img alt="" src={github}></img></a>
              
            </div>
          </a>
  
      
          <a href="https://baloyd.github.io/teamProfile-generator/" class="box profile" >
            <div className="description">
              <h5>Team Profile Generator</h5>
              <p>Dynamically generate an html document through Node that contains your teams info.</p>
               <a href="https://github.com/baloyd/teamProfile-generator"><img alt="" src={github}></img></a>
              
            </div>
          </a>
  
        </section>
      </section>
        </div>
    )
}



export default Portfolio;