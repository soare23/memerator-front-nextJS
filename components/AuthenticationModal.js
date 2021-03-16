import { React, useState } from 'react';

function AuthenticationModal({ show, closeModal, isLoginModal }) {
  const [userDetails, setUserDetails] = useState();
  const [verifyPassword, setVerifyPassword] = useState();

  if (!show) {
    return null;
  }

  return (
    <div className="authentication-modal-container">
      {isLoginModal ? (
        <div className="authentication-modal">
          <div>
            <input
              type="text"
              name="username"
              required
              style={{ marginTop: '15px', width: '226px' }}
              placeholder="username"
              onChange={(e) => {
                const s = { ...user };
                s.username = e.target.value;
                setUserDetails(s);
              }}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              required
              style={{ marginTop: '15px', width: '226px' }}
              placeholder="Password"
              onChange={(e) => {
                const s = { ...user };
                s.password = e.target.value;
                setUserDetails(s);
              }}
            />
          </div>
          <div className="authentication-modal-buttons">
            <button>Log in</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      ) : (
        <div className="authentication-modal">
          <div>
            <input
              type="text"
              name="firstName"
              required
              style={{ marginTop: '3px', width: '226px' }}
              placeholder="First Name"
              onChange={(e) => {
                const s = { ...user };
                s.firstName = e.target.value;
                setUserDetails(s);
              }}
            />
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              required
              style={{ marginTop: '15px', width: '226px' }}
              placeholder="Last Name"
              onChange={(e) => {
                const s = { ...user };
                s.lastName = e.target.value;
                setUserDetails(s);
              }}
            />
          </div>

          <div>
            <input
              type="text"
              name="username"
              required
              style={{ marginTop: '15px', width: '226px' }}
              placeholder="username"
              onChange={(e) => {
                const s = { ...user };
                s.username = e.target.value;
                setUserDetails(s);
              }}
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              required
              style={{ marginTop: '15px', width: '226px' }}
              placeholder="Email"
              onChange={(e) => {
                const s = { ...user };
                s.email = e.target.value;
                setUserDetails(s);
              }}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              required
              style={{ marginTop: '15px', width: '226px' }}
              placeholder="Password"
              onChange={(e) => {
                const s = { ...user };
                s.password = e.target.value;
                setUserDetails(s);
              }}
            />
          </div>

          <div>
            <input
              type="password"
              name="password2"
              required
              style={{ marginTop: '15px', width: '226px' }}
              placeholder="Verifiy password"
              onChange={(e) => {
                setVerifyPassword(e.target.value);
              }}
            />
          </div>
          <div className="authentication-modal-buttons">
            <button>Sign up</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthenticationModal;
