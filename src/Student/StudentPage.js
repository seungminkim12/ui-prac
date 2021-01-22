import { Layout } from "antd";

import "./StudentPage.css";

import SideMenu from "../SideMenu";
import HeaderArea from "../HeaderArea";
import ContentArea from "../ContentArea";

import React, { useState, useEffect } from "react";

const { Content, Footer, Sider } = Layout;

export default function StudentPage() {
  const [Collapsed, setCollapsed] = useState(false);

  const [Contents, setContents] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ]);
  const [Pages, setPages] = useState([]);
  const [CurrentContent, setCurrentContent] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [Prev, setPrev] = useState(false);
  const [Next, setNext] = useState(true);
  const [CurrentBlock, setCurrentBlock] = useState(1);

  const paging = (CurrentPage) => {
    const contentsCount = 3;
    const pageCount = 3;
    const pageAll = Math.ceil(Contents.length / contentsCount);
    const firstContent = (CurrentPage - 1) * contentsCount + 1;
    const lastContent = firstContent + contentsCount - 1;
    setCurrentBlock(Math.ceil(CurrentPage / pageCount));
    const blockAll = Math.ceil(pageAll / pageCount);
    const firstPage = (CurrentBlock - 1) * pageCount + 1;
    const lastPage = firstPage + pageCount - 1;

    setCurrentContent(Contents.slice(firstContent - 1, lastContent));

    const pages_temp = [];
    for (let i = firstPage; i <= lastPage; i++) {
      pages_temp.push(i);
    }
    setPages(pages_temp);

    if (CurrentBlock === blockAll) {
      setPrev(true);
      setNext(false);
    } else if (CurrentBlock < blockAll && CurrentBlock !== 1) {
      setPrev(true);
      setNext(true);
    } else if (CurrentBlock === 1) {
      setPrev(false);
      setNext(true);
    }

    // console.log(Contents.slice(firstContent - 1, lastContent));
    // console.log("contentsCount", contentsCount);
    // console.log("pageCount", pageCount);
    console.log("pageAll", pageAll);
    console.log("firstPage", firstPage);
    console.log("lastPage", lastPage);
    console.log("CurrentPage", CurrentPage);
    // console.log("firstContent", firstContent);
    // console.log("lastContent", lastContent);
    console.log("blockAll", blockAll);
    console.log("CurrentBlock", CurrentBlock);
  };

  useEffect(() => {
    paging(CurrentPage);
  }, [CurrentPage, CurrentBlock]);

  const onCollapsed = (Collapsed) => {
    console.log(Collapsed);
    setCollapsed(!Collapsed);
  };

  const onPageClicked = (event) => {
    const {
      target: { id },
    } = event;
    setCurrentPage(parseInt(id));
  };

  const onPrevClicked = () => {
    setCurrentPage(CurrentPage - 1);
    if (CurrentBlock !== 1) {
      setCurrentBlock(CurrentBlock - 1);
    } else {
      setCurrentBlock(1);
    }
  };

  const onNextClicked = () => {
    setCurrentPage(CurrentPage + 1);
    setCurrentBlock(CurrentBlock + 1);
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
          {CurrentContent.map((content, i) => {
            return (
              <>
                <a key={i}>{content}</a>
                <br />
              </>
            );
          })}
          <a onClick={onPrevClicked}>prev</a>
          {Pages.map((page, i) => {
            return (
              <a key={i} id={page} onClick={onPageClicked}>
                {page}
              </a>
            );
          })}
          <a onClick={onNextClicked}>next</a>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
