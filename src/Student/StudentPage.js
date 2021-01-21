import { Layout } from "antd";

import "./StudentPage.css";

import SideMenu from "../SideMenu";
import HeaderArea from "../HeaderArea";
import ContentArea from "../ContentArea";

import React, { useState } from "react";

const { Content, Footer, Sider } = Layout;

export default function StudentPage() {
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
          <h1>Student Page</h1>
          <ContentArea />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
