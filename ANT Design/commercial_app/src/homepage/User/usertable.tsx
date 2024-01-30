// UserTable.tsx
import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  email: string;
  phoneNumber: string;
  phoneNumberWithCode: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone Number (with Code)',
    dataIndex: 'phoneNumberWithCode',
    key: 'phoneNumberWithCode',
  },
  {
    title: 'Phone Number (without Code)',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <>
        <button>Edit</button>
        <button>Delete</button>
      </>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '1234567890',
    phoneNumberWithCode: '+1234567890',
  },
  {
    key: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phoneNumber: '9876543210',
    phoneNumberWithCode: '+9876543210',
  },
];

const UserTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default UserTable;
