import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function AuthenticationModal({ show, closeModal, isLoginModal }) {
  const classes = useStyles();
  const [userRegistrationDetails, setUserRegistrationDetails] = useState();
  const [userLogInDetails, setUserLogInDetails] = useState({
    username: '',
    password: '',
  });
  const [verifyPassword, setVerifyPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userRegistrationDetails);
    console.log(userLogInDetails);
  }

  if (!show) {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
    return null;
  } else {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    }
  }

  return (
    <div className="authentication-modal-container">
      {isLoginModal ? (
        <div className="authentication-modal">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                autoComplete="username"
                required
                placeholder="username"
                onChange={(e) => {
                  const s = { ...userLogInDetails };
                  s.username = e.target.value;
                  setUserLogInDetails(s);
                }}
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                onChange={(e) => {
                  const s = { ...userLogInDetails };
                  s.password = e.target.value;
                  setUserLogInDetails(s);
                }}
              />
            </div>
            <div className="authentication-modal-buttons">
              <Button
                variant="contained"
                color="secondary"
                onClick={closeModal}
              >
                Close
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Log in
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className="authentication-modal">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="firstName"
                required
                placeholder="First Name"
                onChange={(e) => {
                  const s = { ...userRegistrationDetails };
                  s.firstName = e.target.value;
                  setUserRegistrationDetails(s);
                }}
              />
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                required
                placeholder="Last Name"
                onChange={(e) => {
                  const s = { ...userRegistrationDetails };
                  s.lastName = e.target.value;
                  setUserRegistrationDetails(s);
                }}
              />
            </div>

            <div>
              <input
                type="text"
                name="username"
                required
                placeholder="username"
                onChange={(e) => {
                  const s = { ...userRegistrationDetails };
                  s.username = e.target.value;
                  setUserRegistrationDetails(s);
                }}
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="Email"
                onChange={(e) => {
                  const s = { ...userRegistrationDetails };
                  s.email = e.target.value;
                  setUserRegistrationDetails(s);
                }}
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                required
                placeholder="Password"
                onChange={(e) => {
                  const s = { ...userRegistrationDetails };
                  s.password = e.target.value;
                  setUserRegistrationDetails(s);
                }}
              />
            </div>

            <div>
              <input
                type="password"
                name="password2"
                autoComplete="new-password"
                required
                placeholder="Confirm password"
                onChange={(e) => {
                  setVerifyPassword(e.target.value);
                }}
              />
            </div>
            <div className="authentication-modal-buttons">
              <Button
                variant="contained"
                color="secondary"
                onClick={closeModal}
              >
                Close
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Sign up
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AuthenticationModal;
