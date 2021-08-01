
import React, { useState } from 'react';

import '../../styles/App.css';


import { checkPassword, validateEmail } from '../../utils/helpers';

function Contact() {
 
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  
const [password,setPassword] =useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    let target = e.target;
    let inputType = target.name;
    let inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    }else setPassword(inputValue);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Fill out email and username please!');
    } else if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
    } else {
      alert(`Hello ${userName}`);
    }

    setUserName('');
    setPassword('');
    setEmail('');
  };

  return (
    <div>
      <p>Hello {userName}</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
      
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="text"
          placeholder="password"
        />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
