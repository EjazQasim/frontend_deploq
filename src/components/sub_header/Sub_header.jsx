import React from 'react';
import { Typography, Space, Button, Input, Badge, Tabs } from 'antd';
import {
  PlusOutlined,
  DownloadOutlined,
  SearchOutlined,
  FileTextOutlined,
  AppstoreOutlined,
  FileImageOutlined,
  CheckSquareOutlined,
  ExclamationCircleOutlined,
  SwapOutlined,
  DiffOutlined,
} from '@ant-design/icons';

const { TabPane } = Tabs;

const SubHeader = () => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          borderBottom: '1px solid #f0f0f0', // Add this line to add a divider
        }}
      >
        {/* Title and Breadcrumb */}
        <div>
          <Space direction="vertical" size={4}>
            <Typography.Text
              style={{ color: '#8c8c8c', fontSize: '12px' }}
            >
              Cases / Marvin McKinney v Miles / Comparison
            </Typography.Text>
            <Space size="middle">
              <Typography.Text strong style={{ fontSize: '20px' }}>
                Cross Deposition Analysis
              </Typography.Text>
              <Space>
                <Badge
                  count={4}
                  style={{ backgroundColor: '#52c41a' }}
                />
                <Typography.Text style={{ fontSize: '14px' }}>
                  Deponents
                </Typography.Text>
              </Space>
              <Space>
                <Badge
                  count={9}
                  style={{ backgroundColor: '#1890ff' }}
                />
                <Typography.Text style={{ fontSize: '14px' }}>
                  Depositions
                </Typography.Text>
              </Space>
            </Space>
          </Space>
        </div>

        {/* Controls */}
        <Space size="small">
          <Button
            icon={<PlusOutlined />}
            style={{
              backgroundColor: '#f0f0f0',
              border: 'none',
              borderRadius: '6px',
              boxShadow: 'none',
              display: 'flex',
              alignItems: 'center',
              padding: '4px 12px',
            }}
          >
            <span style={{ marginLeft: '4px' }}>Add Depo</span>
          </Button>
          <Button
            icon={<DownloadOutlined />}
            style={{
              backgroundColor: '#f0f0f0',
              border: 'none',
              borderRadius: '6px',
              boxShadow: 'none',
              display: 'flex',
              alignItems: 'center',
              padding: '4px 12px',
            }}
          />
          <Input
            placeholder="Search"
            prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
            style={{
              width: 240,
              borderRadius: '6px',
              backgroundColor: '#f0f0f0',
              border: 'none',
            }}
          />
        </Space>
      </div>

      {/* Tab Bar */}
      <Button.Group style={{ padding: '24px' }}>
        <Button
          style={{
            backgroundColor: '#7E22CE', // Selected button color
            border: 'none',
            padding: '8px 16px',
            fontSize: '16px',
            fontWeight: '500',
            color: '#ffffff', // Text color for selected button
            marginRight: '16px', // Add a gap between buttons
            borderRadius: '8px', // Add corner radius
          }}
        >
          <FileTextOutlined />
          Page/Line
        </Button>
        <Button
          style={{
            backgroundColor: '#ffffff',
            border: 'none',
            padding: '8px 16px',
            fontSize: '16px',
            fontWeight: '500',
            color: '#333333',
            marginRight: '16px', // Add a gap between buttons
            borderRadius: '8px', // Add corner radius
          }}
        >
          <AppstoreOutlined />
          Topical
        </Button>
        <Button
          style={{
            backgroundColor: '#ffffff',
            border: 'none',
            padding: '8px 16px',
            fontSize: '16px',
            fontWeight: '500',
            color: '#333333',
            marginRight: '16px', // Add a gap between buttons
            borderRadius: '8px', // Add corner radius
          }}
        >
          <FileImageOutlined />
          Exhibits
          <Badge
            count={7}
            style={{
              marginLeft: '4px',
              backgroundColor: '#8c8c8c',
            }}
          />
        </Button>
        <Button
          style={{
            backgroundColor: '#ffffff',
            border: 'none',
            padding: '8px 16px',
            fontSize: '16px',
            fontWeight: '500',
            color: '#333333',
            marginRight: '16px', // Add a gap between buttons
            borderRadius: '8px', // Add corner radius
          }}
        >
          <CheckSquareOutlined />
          Admissions
          <Badge
            count={7}
            style={{
              marginLeft: '4px',
              backgroundColor: '#8c8c8c',
            }}
          />
        </Button>
        <Button
          style={{
            backgroundColor: '#ffffff',
            border: 'none',
            padding: '8px 16px',
            fontSize: '16px',
            fontWeight: '500',
            color: '#333333',
            marginRight: '16px', // Add a gap between buttons
            borderRadius: '8px', // Add corner radius
          }}
        >
          <ExclamationCircleOutlined />
          Objections
          <Badge
            count={99}
            style={{
              marginLeft: '4px',
              backgroundColor: '#8c8c8c',
            }}
          />
        </Button>
        <Button
          style={{
            backgroundColor: '#ffffff',
            border: 'none',
            padding: '8px 16px',
            fontSize: '16px',
            fontWeight: '500',
            color: '#333333',
            marginRight: '16px', // Add a gap between buttons
            borderRadius: '8px', // Add corner radius
          }}
        >
          <SwapOutlined />
          Contradictions
          <Badge
            count={30}
            style={{
              marginLeft: '4px',
              backgroundColor: '#8c8c8c',
            }}
          />
        </Button>
        <Button
          style={{
            backgroundColor: '#ffffff',
            border: 'none',
            padding: '8px 16px',
            fontSize: '16px',
            fontWeight: '500',
            color: '#333333',
            borderRadius: '8px', // Add corner radius
          }}
        >
          <DiffOutlined />
          Discrepancies
          <Badge
            count={4}
            style={{
              marginLeft: '4px',
              backgroundColor: '#8c8c8c',
            }}
          />
        </Button>
      </Button.Group>
    </div>
  );
};

export default SubHeader;
