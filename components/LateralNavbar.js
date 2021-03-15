import { React, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { BurgerMenuContext } from '../context/BurgerMenuContext';
import clickedOutsideHook from '../util/clickedOutsideHook';

function LateralNavbar() {
  let collapse = useContext(BurgerMenuContext);
  const ref = useRef();

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
    }
  });

  return (
    <>
      <div id="overlay" className="overlay"></div>
      <div className="lateral-navbar" id="lateral-navbar" ref={ref}>
        <h3>NSFW</h3>
        <h3>funny</h3>
        <h3>meme</h3>
        <h3>politics</h3>
        <h3>sports</h3>
      </div>
    </>
  );
}

export default LateralNavbar;
