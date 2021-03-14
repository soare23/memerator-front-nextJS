import React, { createContext, useState } from 'react';

export const BurgerMenuContext = createContext();

export const BurgerMenuProvider = (props) => {
  const [collapseTrigger, setCollapseTrigger] = useState(false);

  function handleClick() {
    setCollapseTrigger(!collapseTrigger);
  }

  let collapse = {
    collapseTrigger: collapseTrigger,
    collapseTriggerFunction: handleClick,
  };

  return (
    <BurgerMenuContext.Provider value={collapse}>
      {props.children}
    </BurgerMenuContext.Provider>
  );
};
