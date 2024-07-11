import React from "react";
import { useAuth } from "../context/AuthContext";
import { Button, Card, Flex, Form, Input, Row, Typography } from "antd";
import type { FormProps } from "antd";
import { TLogin } from "../utils/types/Auth";
import { Link } from "react-router-dom";
import { routesConstant } from "../utils/constants";

const LoginPage = () => {
  const { login } = useAuth();

  const onFinish: FormProps<TLogin>["onFinish"] = async (values) => {
    await login(values);
  };

  return (
    <Card
      title={
        <Row justify={"center"} align={"middle"}>
          <Typography.Title level={1} style={{ color: "#ff3e3e" }}>
            {"PayPortal"}
          </Typography.Title>
        </Row>
      }
      style={{ minWidth: "600px" }}
    >
      <Flex gap="middle" align="center" vertical>
        <Typography.Title level={3}>Welcome to PayPortal</Typography.Title>
        <Typography.Title level={5}>
          Please login with your credentials
        </Typography.Title>
      </Flex>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        labelAlign="left"
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<TLogin>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<TLogin>
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
      <Typography>
        {"You don't have an account yet? "}
        <Link to={routesConstant.signUp}>{"Sign up here."}</Link>
      </Typography>
    </Card>
  );
};

export default LoginPage;
