import React from 'react';
import '../../styles/App.css';
import github from '../../images/GitHub-Mark-Light-64px.png'
import linkedin from '../../images/LinkedIn-64px.png'
import insta from '../../images/Insta-64px.png'


function Footer()
{
return(<div>
<footer className="footer">

<section>
  <footer>
    <a href="https://www.linkedin.com/in/danielbaloy/"><img alt="" src={linkedin}></img></a>
    <a href="https://github.com/baloyd"><img alt="" src={github}></img></a>
    <a href="https://www.instagram.com/danielbaloy/"><img alt="" src={insta}></img></a>
  </footer>
</section>
</footer>
</div>
)
}


export default Footer;