import { React, useState } from 'react';
import AuthenticationModal from '../components/AuthenticationModal';

function Navbar() {
  const [showAuthenticationModal, setShowAuthenticationModal] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);

  function handleCloseModal() {
    setShowAuthenticationModal(false);
    setIsLoginModal(false);
  }

  return (
    <div className="navbar">
      <div>
        <h3>This is the navbar</h3>
      </div>
      <div className="access-buttons">
        <button
          onClick={() => {
            setShowAuthenticationModal(true);
            setIsLoginModal(true);
          }}
        >
          Log in
        </button>
        <button onClick={() => setShowAuthenticationModal(true)}>
          Sign up
        </button>
      </div>
      <AuthenticationModal
        show={showAuthenticationModal}
        closeModal={handleCloseModal}
        isLoginModal={isLoginModal}
      ></AuthenticationModal>
    </div>
  );
}

export default Navbar;
