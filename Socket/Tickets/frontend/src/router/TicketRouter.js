import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Login from '../pages/Login';
import Queue from '../pages/Queue';
import CreateTicket from '../pages/CreateTicket';
import Desk from '../pages/Desk';
import { UIcontext } from '../context/UIcontext';

const { Sider, Content } = Layout;

const TicketRouter = () => {
  const { isHidden } = useContext(UIcontext);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsedWidth="0" breakpoint="md" hidden={isHidden}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/log-in">Log in</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/queue">Queue</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/create-ticket">Create Ticket</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/log-in" component={Login} />
              <Route path="/queue" component={Queue} />
              <Route path="/create-ticket" component={CreateTicket} />
              <Route path="/desk" component={Desk} />
              <Redirect to="/log-in" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default TicketRouter;
