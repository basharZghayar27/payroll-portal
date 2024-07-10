import React from "react";
import { useAuth } from "../context/AuthContext";
import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
type FieldType = {
  username?: string;
  password?: string;
};
const LoginPage = () => {
  const { login } = useAuth();

  return (
    <Card
      title={
        <Row justify={"center"} align={"middle"}>
          {"Welcome to PayPortal"}
        </Row>
      }
      style={{ minWidth: "600px" }}
    >
      <Row>
        <Col span={16} offset={6}>
          <Typography.Title level={3}>Welcome to PayPortal</Typography.Title>
          <Typography.Title level={5}>
            Please login with your credentials
          </Typography.Title>
        </Col>
      </Row>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        labelAlign="left"
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{ offset: 0, span: 24 }}
          style={{ width: "100% !important" }}
        >
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginPage;
