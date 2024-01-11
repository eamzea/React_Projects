import React, { useContext, useEffect } from 'react';
import { UIcontext } from '../context/UIcontext';

const useMenu = hide => {
  const { showMenu, hideMenu } = useContext(UIcontext);

  useEffect(() => {
    hide ? hideMenu() : showMenu();
  }, []);
};

export default useMenu;
