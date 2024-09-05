import React from 'react';
import { Layout, Menu, Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: '20px',
        borderBottom: '1px solid #f0f0f0',
      }}
    >
      {/* Logo and Menu wrapper */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        {/* Logo */}
        <div className="logo">
          <h1 style={{ margin: 0, fontSize: '24px', color: '#333' }}>
            DepoIQ
          </h1>
        </div>
        {/* Menu */}
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{
            flex: '1',
            justifyContent: 'center',
            borderBottom: 'none',
          }}
        >
          <Menu.Item key="1">Cases</Menu.Item>
          <Menu.Item key="2">Deponents</Menu.Item>
        </Menu>
      </div>
      {/* Right-side icons and profile */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginLeft: 'auto',
        }}
      >
        <Button
          type="primary"
          style={{
            backgroundColor: '#7E22CE',
            borderColor: '#7E22CE',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            padding: '4px 16px',
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '8px' }}
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16V12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8H12.01"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Ask AMI
        </Button>
        <Avatar size="large" icon={<UserOutlined />} />
        <span>Abstergo Ltd.</span>
      </div>
    </Header>
  );
};

export default CustomHeader;
