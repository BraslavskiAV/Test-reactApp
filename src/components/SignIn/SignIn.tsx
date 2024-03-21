import React, { useState } from 'react';
import '../SignIn/SignIn.css'

function SignIn() {

  const [isDark, setIsDark] = useState(false);

  const handleButtonClick = () => {
    setIsDark(!isDark);
  };

  return (  
    <>
    <div className='main__signIn' style={{backgroundColor: isDark ? '#8D8E97' : '#F3F3F3'}}>
      <div className="signIn__container">
        <p className="signin_nav">Back to home</p>
        <p className="signin_title">Sign In</p>
        <div className="input_block-signin">
          <div className="input_container">
            <div className="input_item">
              <p className="name_title">Email</p>
              <input content="Email" className="signup_email" placeholder="Your email..."></input>
            </div>
            <div className="input_item">
              <p className="name_title">Password</p>
              <input className="signup_password" type='password' placeholder="Your password..."></input>
            </div>
            <div className="buttons">
              <button className="button_signup">Sign Up</button>
              <div className="button_for_signin">
                <p className="description_for_signin">Already have an account?</p>
                <button className="signin">Sing in</button>
              </div>
              <button onClick={handleButtonClick}>
                {isDark ? 'светлое изображение' : 'Затемнить изображение'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignIn;