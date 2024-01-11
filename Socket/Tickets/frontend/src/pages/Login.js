import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import getAgent from '../helpers/getAgent';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};

const { Title, Text } = Typography;

const Login = () => {
  const history = useHistory();

  const [user] = useState(getAgent());

  const onFinish = ({ agent, desk }) => {
    localStorage.setItem('agent', agent);
    localStorage.setItem('desk', desk);
    history.push('/desk');
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  if (user.agent && user.desk) {
    return <Redirect to="/desk" />;
  }

  return (
    <>
      <Title level={2}>Log In</Title>
      <Text>Type your username and desk</Text>
      <Divider />
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Agent"
          name="agent"
          rules={[
            {
              required: true,
              message: 'Please input your agent username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desk"
          name="desk"
          rules={[
            {
              required: true,
              message: 'Please input your desk number!',
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
