import React from 'react';
import '../../styles/App.css';
import github from '../../images/GitHub-Mark-Light-32px.png'


function Portfolio() {
    return (
        <div>
            <section class="section" >
        <h3>Portfolio</h3>
        <section class="portfolio-container" id="Portfolio">
  
          <a href="https://vyncent-t.github.io/atmosphere-project/" class="view view-first atmos" >
            <div className="mask">
              <h5>Atmos <a href="https://github.com/vyncent-t/atmosphere-project"><img alt="" src={github}></img></a></h5> 
              <p>Brings music & visuals together to create a personalized experience.</p>
              <p>This app was built using the Spotify & Youtube APIs, Bulma for the styling & JavaScript.</p>
              
              
              
            </div>
          </a>
          
          <a href="https://agile-basin-91759.herokuapp.com/" class="view view-first book" >
            <div className="mask">
              <h5>Book Search Engine <a href="https://github.com/baloyd/book-search-engine"><img alt="" src={github}></img></a></h5> 
              <p>Browse for different books and save them to your profile.</p>
              <p>This app was built using React, MongoDB, Apollo client server, GraphQL API & Google Books API.</p>
              <a href="https://github.com/baloyd/book-search-engine"><img alt="" src={github}></img></a>

             
              
            </div>
          </a>
          <a href="https://baloyd.github.io/weather-dashboard/" class="view view-first weather" >
            <div className="mask">
              <h5>Weather Dashboard  <a href="https://github.com/baloyd/weather-dashboard"><img alt="" src={github}></img></a></h5>
             <p>Search and manage forecasts for multiple cities and receive a 5-day forecast.</p>
             <p>This app was built using HTML, CSS/Bootstrap, JavaScript and utilizes the Open Weather API.</p>
              
            
            </div>
          </a>
  
          <a href="https://travlr-proj.herokuapp.com/" class="view view-first travlr" >
            <div className="mask">
              <h5>Travlr        <a href="https://github.com/vyncent-t/travlr-project"><img alt="" src={github}></img></a></h5>
              <p>Browse and post travel recommendations for the adventure seeking user.</p>
              <p>This app was built using React, React-Bootstrap, Mongoose, GraphQL, & JavaScript</p>
           
              
            </div>
          </a>
  
      
          <a href="https://drive.google.com/file/d/1X_oyoRP5hlemimY-21Cw9CmEf7rjvoTd/view" class="view view-first profile" >
            <div className="mask">
              <h5>Team Profile Generator   <a href="https://github.com/baloyd/teamProfile-generator"><img alt="" src={github}></img></a></h5>
              <p>Dynamically generate an html document through Node that contains your teams info.</p>
              <p>This app was built using HTML, CSS, JavaScript, & Node.js with the Inquirer package serving as the user interface.</p>
              
              
            </div>
          </a>

          <a href="https://evening-bayou-86840.herokuapp.com/" class="view view-first fitness" >
            <div className="mask">
              <h5>Fitness Tracker     <a href="https://github.com/baloyd/fitness-tracker"><img alt="" src={github}></img></a></h5>
              <p>Keep track of your daily workouts and view your progress over a variety of stats.</p>
              <p>This App utilizes Mongoose as the relational database and Express as the server.</p>
            
              
            </div>
          </a>
  
        </section>
      </section>
        </div>
    )
}



export default Portfolio;