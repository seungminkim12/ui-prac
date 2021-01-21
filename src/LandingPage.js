import React, { useState } from "react";
import { Layout } from "antd";

import "./LandingPage.css";

import SideMenu from "./SideMenu";
import HeaderArea from "./HeaderArea";
import ContentArea from "./ContentArea";

const { Content, Footer, Sider } = Layout;

export default function LandingPage() {
  const [Collapsed, setCollapsed] = useState(false);

  const onCollapsed = (Collapsed) => {
    console.log(Collapsed);
    setCollapsed(!Collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={Collapsed}
        onCollapse={() => onCollapsed(Collapsed)}
      >
        <div className="logo">
          <a href="/">Logo </a>
        </div>
        <SideMenu />
      </Sider>
      <Layout className="site-layout">
        <HeaderArea />
        <Content style={{ margin: "0 16px" }}>
          <ContentArea />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
