import React, { useContext, useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import useMenu from '../hooks/useMenu';
import { SocketContext } from '../context/SocketContext';

const CreateTicket = () => {
  const [ticketState, setTicketState] = useState(null);
  const { socket } = useContext(SocketContext);
  useMenu(true);

  const handleNewTicket = () => {
    socket.emit('new_ticket', null, ticket => setTicketState(ticket));
  };

  return (
    <>
      <Row>
        <Col span={12} offset={6} align="center">
          <Typography.Title level={3}>
            Press button for new Ticket
          </Typography.Title>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={handleNewTicket}
          >
            New Ticket
          </Button>
          <Typography.Text></Typography.Text>
        </Col>
      </Row>
      {ticketState && (
        <Row>
          <Col
            style={{ marginTop: '100px' }}
            span={12}
            offset={6}
            align="center"
          >
            <Typography.Text level={2}>Your number</Typography.Text>
            <br />
            <Typography.Text type="success" style={{ fontSize: 56 }}>
              {ticketState.number}
            </Typography.Text>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CreateTicket;
