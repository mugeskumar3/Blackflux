// StepsTable.tsx
import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  title: string;
  description: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
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
    title: 'Step 1',
    description: 'Description 1',
  },
  {
    key: '2',
    title: 'Step 2',
    description: 'Description 2',
  },
  // Add more data as needed
];

const StepsTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default StepsTable;
