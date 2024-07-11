import React from "react";
import { useAuth } from "../context/AuthContext";
import { Button, Card, Col, Flex, Form, Input, Row, Typography } from "antd";
import type { FormProps } from "antd";
import { TSignUp } from "../utils/types/Auth";
import { Link } from "react-router-dom";
import { routesConstant } from "../utils/constants";

const SignUp = () => {
  const { signUp } = useAuth();

  const onFinish: FormProps<TSignUp>["onFinish"] = (values) => {
    signUp(values);
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
            Please set up your username and password
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
        <Form.Item<TSignUp>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<TSignUp>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<TSignUp>
          label="Confirm password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{ offset: 0, span: 24 }}
          style={{ width: "100% !important" }}
        >
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <Typography>
        {"Already have an account? "}
        <Link to={routesConstant.login}>{"Login here."}</Link>
      </Typography>
    </Card>
  );
};

export default SignUp;
