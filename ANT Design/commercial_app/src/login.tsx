// Login.tsx
import React, { useState } from "react";
import { Form, Input, Button, notification, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const { Title } = Typography;

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      // Your authentication logic goes here
      // For simplicity, let's assume login is successful after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      notification.success({
        message: "Login Successful",
        description: "You have successfully logged in.",
      });
      navigate('/home');
    } catch (error) {
      notification.error({
        message: "Login Failed",
        description: "Invalid credentials. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Form
        name="loginForm"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        style={{ width: 300, padding: 20, border: "1px solid #d9d9d9", borderRadius: 4, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
      >
        <Title level={3} style={{ textAlign: "center" }}>Log In</Title>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{ width: "100%" }}
          >
            Log in
          </Button>
        </Form.Item>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link className="login-form-forgot" to="">
            Forgot password
          </Link>
          <Link to="">Register now!</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
