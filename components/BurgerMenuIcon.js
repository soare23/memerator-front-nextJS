import React from 'react';
import { useContext } from 'react';
import { BurgerMenuContext } from '../context/BurgerMenuContext';

function BurgerMenuIcon() {
  let collapse = useContext(BurgerMenuContext);

  console.log(collapse.collapseTrigger);

  return (
    <div
      className="burger-menu-container"
      onClick={collapse.collapseTriggerFunction}
    >
      <div className="burger-icon">
        <div className="burger-slice"></div>
        <div className="burger-slice"></div>
        <div className="burger-slice"></div>
      </div>
    </div>
  );
}

export default BurgerMenuIcon;
