import { Link } from 'react-router-dom';
import '../SignIn/SignIn.css'
import { useState } from 'react';

function SignIn({onChangeUser} : {onChangeUser: any}) {

  interface IUser {
    id: number,
    text: string,
    date: string,
  }

  const [inputValue, setInputValue] = useState('');
  const [user, setUser] = useState<IUser[]>([])

  function addUser(){
    if(!inputValue){
      let formateDate = String(new Date()).slice(4, 10)
      let userObject = {
        id: Date.now(),
        text: inputValue,
        date: formateDate
      }
      setUser([...user, userObject])
    }
    setInputValue('')
    onChangeUser(user)
  }

  return (  
    <>
    <div className='main__signIn' >
      <div className="signIn__container">
        <Link to={'/'}>
        <button className="signin_nav">Back to home</button>
        </Link>
        <p className="signin_title">Sign In</p>
        <div className="input_block-signin">
          <div className="input_container">
            <div className="input_item">
              <p className="name_title">Email</p>
              <input content="Email" className="signup_email" placeholder="Your email..."
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}></input>
            </div>
            <div className="input_item">
              <p className="name_title">Password</p>
              <input className="signup_password" type='password' placeholder="Your password..."></input>
            </div>
            <div className="buttons">
              <button className="button_signup"
                      onClick={addUser}>Sign In</button>
              <div className="button_for_signin">
                <p className="description_for_signin">Already have an account?</p>
                <Link to={'/signup'}>
                  <button className="signin">Sing Up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignIn;