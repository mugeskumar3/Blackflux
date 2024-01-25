// Login.tsx
import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    // Simulating login logic (replace with actual authentication)
    setLoading(true);
    try {
      // Perform authentication logic here (API call, etc.)
      // For simplicity, let's assume login is successful after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      notification.success({
        message: "Login Successful",
        description: "You have successfully logged in.",
      });
      onLogin();
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
    <Form
      name="loginForm"
      onFinish={onFinish}
      initialValues={{ remember: true }}
      style={{ maxWidth: 300, margin: "auto" }}
    >
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
      <div style={{
            display: "flex",
            justifyContent: "space-between"}}>
      <a className="login-form-forgot" href="">
          Forgot password
        </a>
        <a href="">register now!</a>
      </div>
    </Form>
  );
};

export default Login;
