import React from 'react';
import { useContext } from 'react';
import { BurgerMenuContext } from '../context/BurgerMenuContext';

function LateralNavbar() {
  let collapse = useContext(BurgerMenuContext);

  console.log(collapse.collapseTrigger);

  if (collapse.collapseTrigger) {
    document.querySelector('.lateral-navbar').classList.add('show');
  } else {
    document.querySelector('.lateral-navbar').classList.remove('show');
  }

  return (
    <div className="lateral-navbar" onClick={collapse.collapseTriggerFunction}>
      <h3>NSFW</h3>
      <h3>funny</h3>
      <h3>meme</h3>
      <h3>politics</h3>
      <h3>sports</h3>
    </div>
  );
}

export default LateralNavbar;
