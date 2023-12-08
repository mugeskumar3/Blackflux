// Table.tsx
import React from "react";

interface Merchant {
  name: string;
  email: string;
  phone: string;
  website: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  notes: string;
  type: string;
  category: string;
  commissionPercentage: number;
  chooseDate: string;
  logo: string;
  isCriticalAccount: boolean;
  paymentOptions: string;
}

interface TableProps {
  data: Merchant[];
  onDataChange:
    | React.Dispatch<React.SetStateAction<Merchant[]>>
    | ((data: Merchant[]) => void);
  onEdit: (index: number) => void;
  editIndex: number | null;
}

const Table: React.FC<TableProps> = ({
  data,
  onDataChange,
  onEdit,
  editIndex,
}) => {
  const handleDelete = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    onDataChange(newData);
  };

  const handleEdit = (index: number) => {
    onEdit(index);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Contact Name</th>
          <th>Contact Email</th>
          <th>Contact Phone</th>
          <th>Notes</th>
          <th>Type</th>
          <th>Category</th>
          <th>Commission Percentage</th>
          <th>Choose Date</th>
          <th>Image</th>
          <th>Critical Account</th>
          <th>Payment Options</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
            <td>{item.contactName}</td>
            <td>{item.contactEmail}</td>
            <td>{item.contactPhone}</td>
            <td>{item.notes}</td>
            <td>{item.type}</td>
            <td>{item.category}</td>
            <td>{item.commissionPercentage}</td>
            <td>
              {item.chooseDate
                ? new Date(item.chooseDate).toLocaleDateString()
                : ""}
            </td>
            <td>
              <img
                src={item.logo}
                alt="Logo"
                style={{ width: "50px", height: "50px" }}
              />
            </td>
            <td>{item.isCriticalAccount.toString()}</td>
            <td>{item.paymentOptions}</td>
            <td>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
  );
};

export default Table;
