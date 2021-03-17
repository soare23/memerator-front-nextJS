import { React, useState } from 'react';
import AuthenticationModal from '../components/AuthenticationModal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const [showAuthenticationModal, setShowAuthenticationModal] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);

  function handleCloseModal() {
    setShowAuthenticationModal(false);
    setIsLoginModal(false);
  }

  return (
    <div className="navbar">
      <div className="navbar-elements-container">
        <div className="navbar-elements">Current Stream</div>
        <div className="navbar-elements">Make new stream +</div>
        <div className="access-buttons navbar-elements">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setShowAuthenticationModal(true);
              setIsLoginModal(true);
            }}
          >
            Log in
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowAuthenticationModal(true)}
          >
            Sign up
          </Button>
        </div>
        <AuthenticationModal
          show={showAuthenticationModal}
          closeModal={handleCloseModal}
          isLoginModal={isLoginModal}
        ></AuthenticationModal>
      </div>
    </div>
  );
}

export default Navbar;
