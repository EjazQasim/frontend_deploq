import React, { useState, useEffect } from 'react';
import {
  Table,
  Typography,
  Space,
  Button,
  Modal,
  Form,
  Input,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { gql, useQuery, useMutation } from '@apollo/client';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Text } = Typography;

// GraphQL query to fetch users and their records
const LIST_ALL_USERS_QUERY = gql`
  query ListAllUsers {
    topics {
      name
      email
      records {
        topic {
          name
          percent
          timeFrame
          text
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;

// GraphQL mutation to update user records
const UPDATE_USER_RECORDS_MUTATION = gql`
  mutation UpdateUserRecords(
    $uuid: String!
    $records: [RecordInput]!
  ) {
    updateUserRecords(uuid: $uuid, records: $records) {
      email
      name
      records {
        topic {
          name
          percent
          timeFrame
          text
        }
      }
    }
  }
`;

const DepositionDataTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTopic, setNewTopic] = useState('');
  const [data, setData] = useState([]);

  const {
    loading,
    error,
    data: queryData,
  } = useQuery(LIST_ALL_USERS_QUERY);
  const [updateUserRecords] = useMutation(
    UPDATE_USER_RECORDS_MUTATION
  );

  useEffect(() => {
    if (queryData && queryData.topics) {
      const formattedData = queryData.topics.map((user, index) => ({
        key: index + 1,
        topic:
          user.records.length > 0
            ? user.records[0].topic.name
            : 'N/A', // Show the topic name only once
        kathrynMurphy: {
          name: user.name || 'N/A',
          percent: user.records[0]?.topic.percent || 0,
          timeFrame: user.records[0]?.topic.timeFrame || '',
          text: user.records[0]?.topic.text || '',
        },
        courtneyHenry: {
          name: user.name || 'N/A',
          percent: user.records[1]?.topic.percent || 0,
          timeFrame: user.records[1]?.topic.timeFrame || '',
          text: user.records[1]?.topic.text || '',
        },
        darrellLarue: {
          name: user.name || 'N/A',
          percent: user.records[2]?.topic.percent || 0,
          timeFrame: user.records[2]?.topic.timeFrame || '',
          text: user.records[2]?.topic.text || '',
        },
        antoniaMccoy: {
          name: user.name || 'N/A',
          percent: user.records[3]?.topic.percent || 0,
          timeFrame: user.records[3]?.topic.timeFrame || '',
          text: user.records[3]?.topic.text || '',
        },
      }));
      setData(formattedData);
    }
  }, [queryData]);

  const handleOk = async () => {
    // Assume you have a UUID or can get it from the context or props
    const uuid = '0921b7a2-6c0f-43ed-9532-2cdccfdeb68c'; // Replace with actual UUID

    const newTopicData = {
      topic: {
        name: newTopic,
        percent: 0,
        timeFrame: '',
        text: '',
      },
    };

    try {
      await updateUserRecords({
        variables: {
          uuid: uuid,
          records: [newTopicData],
        },
      });

      toast.success('Record added successfully!');
      setIsModalVisible(false);
      // Re-fetch or update your local state to reflect changes
    } catch (err) {
      toast.error(`Failed to add record: ${err.message}`);
    }
  };

  const handleCancel = () => setIsModalVisible(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const columns = [
    {
      title: (
        <Space>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={() => setIsModalVisible(true)}
            style={{
              border: 'none',
              background: '#1890ff',
              color: '#fff',
            }}
          />
          Topic
        </Space>
      ),
      dataIndex: 'topic',
      key: 'topic',
      width: 200,
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: 'Kathryn Murphy',
      dataIndex: 'kathrynMurphy',
      key: 'kathrynMurphy',
      render: (record) => (
        <Space direction="vertical" size="middle">
          <Text style={{ color: '#66a6ff' }}>{record.timeFrame}</Text>
          <Text style={{ color: '#35CB81' }}>{record.percent}</Text>
          <Text type="secondary">{record.text}</Text>
        </Space>
      ),
    },
    {
      title: 'Courtney Henry',
      dataIndex: 'courtneyHenry',
      key: 'courtneyHenry',
      render: (record) => (
        <Space direction="vertical" size="middle">
          <Text style={{ color: '#66a6ff' }}>{record.timeFrame}</Text>
          <Text style={{ color: '#35CB81' }}>{record.percent}</Text>
          <Text type="secondary">{record.text}</Text>
        </Space>
      ),
    },
    {
      title: 'Darrell Larue',
      dataIndex: 'darrellLarue',
      key: 'darrellLarue',
      render: (record) => (
        <Space direction="vertical" size="middle">
          <Text style={{ color: '#66a6ff' }}>{record.timeFrame}</Text>
          <Text style={{ color: '#35CB81' }}>{record.percent}</Text>
          <Text type="secondary">{record.text}</Text>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5, position: ['bottomCenter'] }}
        bordered
        style={{
          background: 'white',
          '--ant-table-header-cell-bg': '#f0f0f0',
        }}
      />
      <Modal
        title="Add New Topic"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item label="Topic Name">
            <Input
              value={newTopic}
              onChange={(e) => setNewTopic(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default DepositionDataTable;
