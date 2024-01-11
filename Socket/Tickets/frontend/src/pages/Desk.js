import React, { useContext, useState } from 'react';
import { ArrowRightOutlined, CloseCircleFilled } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd';
import useMenu from '../hooks/useMenu';
import getAgent from '../helpers/getAgent';
import { Redirect, useHistory } from 'react-router';
import { SocketContext } from '../context/SocketContext';

const Desk = () => {
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState(null);
  const history = useHistory();
  const [user] = useState(getAgent());

  useMenu(false);

  if (!user.agent || !user.desk) {
    return <Redirect to="/log-in" />;
  }

  const handleExit = () => {
    localStorage.clear();
    history.replace('/log-in');
  };

  const handleNextClick = () => {
    socket.emit('next_ticket', user, ticket => setTicket(ticket));
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Typography.Title level={2}>{user.agent}</Typography.Title>
          <Typography.Text>You are working on desk: </Typography.Text>
          <Typography.Text type="success">{user.desk}</Typography.Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={handleExit}>
            <CloseCircleFilled />
            Exit
          </Button>
        </Col>
      </Row>
      <Divider />
      {ticket && (
        <Row>
          <Col>
            <Typography.Text>
              You are attending the ticket number:{' '}
            </Typography.Text>
            <Typography.Text type="danger" style={{ fontSize: 30 }}>
              {' '}
              {ticket.number}
            </Typography.Text>
          </Col>
        </Row>
      )}
      <Row>
        <Col offset={18} align="right">
          <Button onClick={handleNextClick} shape="round" type="primary">
            Next Ticket
            <ArrowRightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Desk;
