import React, { useState } from "react";
import { Col, Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "./App.css";

function App() {
  const { Header, Sider, Content } = Layout;
  const [Collapsed, setCollapsed] = useState(false);

  const onToggleClicked = () => {
    setCollapsed(!Collapsed);
  };

  return (
    <div className="App">
      <Layout>
        <Sider trigger={null} collapsible collapsed={Collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {Collapsed ? (
              <MenuFoldOutlined className="trigger" onClick={onToggleClicked} />
            ) : (
              <MenuUnfoldOutlined
                className="trigger"
                onClick={onToggleClicked}
              />
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
