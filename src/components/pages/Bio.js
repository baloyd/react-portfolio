import React from 'react';
import '../../styles/App.css';
import polaroid from '../../images/polaroid-frame.png'
import Typical from "react-typical";
function Bio() {
    return (
        
      <div>
          <article class="article">
          <h2 id="Bio">Bio</h2>
          <img alt="" id="polaroid" src={polaroid}></img>
         
          <p>
               Front-end web developer utilizing a fine art background to create a superior, polished UI. <br></br>
               Recently earned a certificate from University of Miami’s Full Stack Web Development Coding Boot Camp. <br></br>
               Self-motivated, adaptable problem-solver that feels just as at ease taking the lead on a project as in working as part of a team.<br></br>
                Recently collaborated on creating a full stack app that curates travel recommendations in select cities.<br></br>
                
   My skills include:{" "}
              <Typical
                className="font-mono"
                steps={[
                  "JavaScript",
                  1500,
                  "React.js",
                  1200,
                  "HTML",
                  1000,
                  "CSS",
                  1000,
                  "jQuery",
                  1000,
                  "Bootstrap",
                  1000,
                  "Bulma",
                  1000,
                  "Adobe Creative Suite",
                  1000,
                  "MongoDB",
                  1200,
                  "Node.js",
                  1000,
                  "Express.js",
                  1000,
                  "MySQL",
                  1000,
                 
                ]}
                loop={Infinity}
                wrapper="p"
              />
          </p>
          
      </article>
    
      </div>

    )
}




export default Bio;