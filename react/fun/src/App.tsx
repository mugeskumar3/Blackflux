// App.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Table from "./Table";
import Filter from "./filter";
import Form from "./Form";

interface FormData {
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

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  website: "",
  contactName: "",
  contactPhone: "",
  contactEmail: "",
  notes: "",
  type: "",
  category: "",
  commissionPercentage: 0,
  chooseDate: "",
  logo: "",
  isCriticalAccount: false,
  paymentOptions: "",
};

const App: React.FC = () => {
  const paymentOptions = ["Cash on Delivery", "UPI", "Card Payment"];
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [tableData, setTableData] = useState<FormData[]>([]);
  const [filteredData, setFilteredData] = useState<FormData[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("tableData");
    if (storedData) {
      const parsedData = JSON.parse(storedData) as FormData[];
      setTableData(parsedData);
      setFilteredData(parsedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify(tableData));
    setFilteredData(tableData);
  }, [tableData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : type === "number"
          ? parseFloat(value)
          : value,
    }));
  };

  const handleEdit = (index: number) => {
    setFormData(tableData[index]);
    setEditIndex(index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editIndex !== null) {
      setTableData((prevData) => {
        const newData = [...prevData];
        newData[editIndex] = formData;
        return newData;
      });
      setEditIndex(null);
    } else {
      setTableData((prevData) => [...prevData, formData]);
    }

    setFormData(initialFormData);
  };

  const handlePaymentOptionsFilter = (selectedOptions: string[]) => {
    const filteredData = tableData.filter((item) =>
      selectedOptions.includes(item.paymentOptions)
    );
    setFilteredData(filteredData);
  };

  return (
    <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Form
                formData={formData}
                setFormData={setFormData}
                tableData={tableData}
                setTableData={setTableData}
                editIndex={editIndex}
                setEditIndex={setEditIndex}
                paymentOptions={paymentOptions}
                handleSubmit={handleSubmit}
                handleEdit={handleEdit}
                handleChange={handleChange}
              />
            }
          />
          <Route
            path="/table"
            element={
              <div>
                <Filter
                  paymentOptions={paymentOptions}
                  onFilterChange={handlePaymentOptionsFilter}
                />
                <Table
                  data={filteredData}
                  onDataChange={setTableData}
                  onEdit={handleEdit}
                  editIndex={editIndex}
                />
              </div>
            }
          />
        </Routes>
    </Router>
  );
};

export default App;
