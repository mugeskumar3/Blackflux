// App.tsx
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusCircleOutlined,
  UserOutlined,
  MediumOutlined,
  HighlightOutlined,
  HomeOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import "./App.css";
import { Layout, Menu, Button, theme, notification } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";


const { Header, Sider, Content } = Layout;
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate(); // Get the navigation function

  const handleLogout = async () => {
    // Your authentication logic goes here
    // For simplicity, let's assume logout is successful after a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success notification
    notification.success({
      message: "Logout Successful",
      description: "You have successfully logged out.",
    });

    // Redirect to the login page
    navigate("/");
  };

  return (
    <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/home/language">Language</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<HighlightOutlined />}>
            <Link to="/home/steps">Steps</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<PlusCircleOutlined />}>
            <Link to="/home/user">User</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<MediumOutlined />}>
            <Link to="/home/medium">Medium</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Button
              type="text"
              icon={<HomeOutlined />}
              style={{
                color: "blue",
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </div>
          <div>
            <Button
              type="text"
              icon={<PoweroffOutlined />}
              style={{
                color: "red",
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
              onClick={handleLogout}
            />
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
           <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
