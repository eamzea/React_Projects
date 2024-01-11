import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Col, Container, Row } from 'react-bootstrap';
import AddBand from './components/AddBand';
import BandList from './components/BandList';

const connectSocketServer = () => {
  const socket = io.connect('http://localhost:4000', {
    transports: ['websocket'],
  });

  return socket;
};

const App = () => {
  const [socket] = useState(connectSocketServer());
  const [isOnline, setIsOnline] = useState(false);
  const [bandsState, setBandsState] = useState([]);

  useEffect(() => {
    setIsOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on('connect', () => setIsOnline(true));
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', () => setIsOnline(false));
  }, [socket]);

  useEffect(() => {
    socket.on('current_bands', bands => {
      setBandsState(bands);
    });
  }, [socket]);

  const handleVote = id => socket.emit('vote_band', { id });

  const handleDelete = id => socket.emit('delete_band', { id });

  const handleChange = (name, id) => socket.emit('change_band', { name, id });

  const handleAdd = name => socket.emit('add_band', { name });

  return (
    <Container>
      <div className="alert">
        <p>
          Service status:
          {isOnline ? (
            <span className="text-success"> Online</span>
          ) : (
            <span className="text-danger"> Offline</span>
          )}
        </p>
      </div>
      <h1>Band Names</h1>
      <hr />
      <Row>
        <Col xs="8">
          <BandList
            data={bandsState}
            vote={handleVote}
            deleteFn={handleDelete}
            changeName={handleChange}
          />
        </Col>
        <Col xs="4">
          <AddBand add={handleAdd} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
