import React, { useState, useEffect } from 'react';
const Form = () => {
  const [activeTab, setActiveTab] = useState('sign-in');
  const [signInFormData, setSignInFormData] = useState({
    signInUsername: '',
    signInPassword: '',
    signInRememberMe: true,
  });
  const [signUpFormData, setSignUpFormData] = useState({
    signUpUsername: '',
    signUpPassword: '',
    signUpRepeatPassword: '',
    signUpEmail: '',
  });

  const handleSignInChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setSignInFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;
    setSignUpFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [isEmailUnique, setIsEmailUnique] = useState(true); // New state


//username and password is valid or not

useEffect(() => {
  // Email is Unqiue or not
  const isUnique = true; 

  setIsEmailUnique(isUnique);
}, [signUpFormData.signUpEmail]);

useEffect(() => {
  const isSignInDataValid =
    signInFormData.signInUsername && signInFormData.signInPassword;

  if (isSignInDataValid) {
    console.log('Sign In data is valid');
  } else {
    console.log('Sign In data is invalid');
  }
}, [signInFormData]);

  return (
    <div className="login-wrap">
      <div className="login-html">
        <input
          id="tab-1"
          type="radio"
          name="tab"
          className="sign-in"
          checked={activeTab === 'sign-in'}
          onChange={() => setActiveTab('sign-in')}
        />
        <label htmlFor="tab-1" className="tab">
          Sign In
        </label>
        <input
          id="tab-2"
          type="radio"
          name="tab"
          className="sign-up"
          checked={activeTab === 'sign-up'}
          onChange={() => setActiveTab('sign-up')}
        />
        <label htmlFor="tab-2" className="tab">
          Sign Up
        </label>
        <div className="login-form">
          {activeTab === 'sign-in' ? (
            <form  className="sign-in-htm">
              {/* Sign In form elements */}
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  name="signInUsername"
                 
                 
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  name="signInPassword"
                
                 
                />
              </div>
              <div className="group">
                <input
                  id="check"
                  type="checkbox"
                  className="check"
                  checked={signInFormData.signInRememberMe}
                  name="signInRememberMe"
                 
                />
                <label htmlFor="check">
                  <span className="icon"></span> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </form>
          ) : (
            <form  className="sign-up-htm">
             
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  name="signUpUsername"
                 
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  name="signUpPassword"
                 
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Repeat Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  name="signUpRepeatPassword"
                 
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Email Address
                </label>
                <input
                  id="pass"
                  type="text"
                  className="input"
                  name="signUpEmail"
                 
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="group">
              <button className="noselect">Sign Up</button>
              </div>
              <div className="hr"></div>
              
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;




