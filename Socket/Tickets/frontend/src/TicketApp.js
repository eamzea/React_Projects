import React from 'react';
import SocketProvider from './context/SocketContext';
import UIContextProvider from './context/UIcontext';
import TicketRouter from './router/TicketRouter';

const TicketApp = () => {
  return (
    <SocketProvider>
      <UIContextProvider>
        <TicketRouter />
      </UIContextProvider>
    </SocketProvider>
  );
};

export default TicketApp;
