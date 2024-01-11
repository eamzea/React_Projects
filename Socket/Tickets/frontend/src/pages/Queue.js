import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd';
import useMenu from '../hooks/useMenu';
import { SocketContext } from '../context/SocketContext';
import getLasts from '../helpers/getLast';

const Queue = () => {
  useMenu(true);

  const { socket } = useContext(SocketContext);
  const [ticketsState, setTicketsState] = useState([]);

  useEffect(() => {
    socket.on('assigned_tickets', assigned => setTicketsState(assigned));

    return () => socket.off('assigned_tickets');
  }, [socket]);

  const handleLasts = async () => {
    const { data } = await getLasts();

    setTicketsState(data);
  };

  useEffect(() => {
    handleLasts();
  }, []);

  return (
    <>
      <Typography.Title>Attending client number</Typography.Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={ticketsState.slice(0, 3)}
            renderItem={item => (
              <List.Item>
                <Card
                  style={{ width: '300px', marginTop: '16px' }}
                  actions={[
                    <Tag color="volcano">{item.agent}</Tag>,
                    <Tag color="magenta">Desk {item.desk}</Tag>,
                  ]}
                >
                  <Typography.Title>No. {item.number}</Typography.Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>History</Divider>
          <List
            dataSource={ticketsState.slice(3)}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.number}`}
                  description={
                    <>
                      <Typography.Text type="secondary">
                        {' '}
                        On Desk :{' '}
                      </Typography.Text>
                      <Tag color="magenta"> {item.desk} </Tag>
                      <Typography.Text color="secondary">
                        {' '}
                        Agent :{' '}
                      </Typography.Text>
                      <Tag color="volcano"> {item.agent} </Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default Queue;
