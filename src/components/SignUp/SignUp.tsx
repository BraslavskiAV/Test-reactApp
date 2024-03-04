

function SignUp() {
  return (  
    <>
    <div className="signup_container">
      <p className="signup_nav">Back to home</p>
      <p className="signup_title">Sign Up</p>
      <div className="input_block">
        <div className="input_container">
          <div className="input_item">
            <p className="name_title">Name</p>
            <input className="signup_name" placeholder="Your name..."></input>
          </div>
          <div className="input_item">
            <p className="name_title">Email</p>
            <input className="signup_email" placeholder="Your email..."></input>
          </div>
          <div className="input_item">
            <p className="name_title">Password</p>
            <input className="signup_password" type='password' placeholder="Your password..."></input>
          </div>
          <div className="input_item">
            <p className="name_title">Confirm password</p>
            <input className="signup_confirm" type='password' placeholder="Confirm password..."></input>
          </div>
          <div className="buttons">
            <button className="button_signup">Sign Up</button>
            <div className="button_for_signin">
              <p className="description_for_signin">Already have an account?</p>
              <button className="signin">Sing in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;