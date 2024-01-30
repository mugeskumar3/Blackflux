// mediumtable.tsx
import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  email: string;
  phone: string; // Assuming phone is a string based on the provided data
  medium: string;
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
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Medium',
    dataIndex: 'medium',
    key: 'medium',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
        <>
          <button key={`edit-${record.key}`}>Edit</button>
          <button key={`delete-${record.key}`}>Delete</button>
        </>
      ),
      
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    email: 'john.brown@example.com',
    phone: '+1234567890',
    medium: 'Tamil',
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 'jim.green@example.com',
    phone: '+9876543210',
    medium: 'English',
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'joe.black@example.com',
    phone: '+1122334455',
    medium: 'Tamil',
  },
  {
    key: '4',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '+9988776655',
    medium: 'English',
  },
];

const MediumTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default MediumTable;
