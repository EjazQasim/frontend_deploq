import React from 'react';
import { Layout as AntdLayout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import CustomHeader from '../Header/Header';

const { Header, Content, Footer } = AntdLayout;

const Layout = ({ children }) => {
  return (
    <AntdLayout>
      <CustomHeader />
      <Content
      // style={{ padding: '20px', backgroundColor: '#F5F5F5' }}
      >
        {children}
      </Content>
    </AntdLayout>
  );
};

export default Layout;
