import { React, useState, useRef } from 'react';
import { useContext } from 'react';
import { BurgerMenuContext } from '../context/BurgerMenuContext';
import clickedOutsideHook from '../util/clickedOutsideHook';
import AuthenticationModal from '../components/AuthenticationModal';

function LateralNavbar() {
  let collapse = useContext(BurgerMenuContext);
  const ref = useRef();

  const [showAuthenticationModal, setShowAuthenticationModal] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);

  function handleCloseModal() {
    setShowAuthenticationModal(false);
    setIsLoginModal(false);
  }

  if (typeof window !== 'undefined') {
    console.log(collapse.collapseTrigger);
    if (collapse.collapseTrigger) {
      document.getElementById('lateral-navbar').classList.remove('hide');
      document.getElementById('overlay').style.display = 'none';
    } else {
      document.getElementById('lateral-navbar').classList.add('hide');
      document.getElementById('overlay').style.display = 'block';
    }
  }

  clickedOutsideHook(ref, () => {
    if (!collapse.collapseTrigger) {
      collapse.collapseTriggerFunction();
      handleCloseModal();
    }
  });

  return (
    <>
      <div id="overlay" className="overlay"></div>
      <div className="lateral-navbar" id="lateral-navbar" ref={ref}>
        <p>Welcome user</p>
        <div className="access-buttons-lateral-navbar">
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
        <p>My custom stream</p>
        <h3>Memes</h3>
        <h3>Cars</h3>
        <br></br>
        <p>Categories</p>
        <h3>NSFW</h3>
        <h3>funny</h3>
        <h3>meme</h3>
        <h3>politics</h3>
        <h3>sports</h3>
      </div>
      <AuthenticationModal
        show={showAuthenticationModal}
        closeModal={handleCloseModal}
        isLoginModal={isLoginModal}
      ></AuthenticationModal>
    </>
  );
}

export default LateralNavbar;
