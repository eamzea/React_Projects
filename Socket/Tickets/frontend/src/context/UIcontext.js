import React, { createContext, useState } from 'react';

export const UIcontext = createContext();

const UIContextProvider = ({ children }) => {
  const [isHidden, setIsHidden] = useState(false);

  const showMenu = () => setIsHidden(false);
  const hideMenu = () => setIsHidden(true);

  return (
    <UIcontext.Provider value={{ isHidden, showMenu, hideMenu }}>
      {children}
    </UIcontext.Provider>
  );
};

export default UIContextProvider;
