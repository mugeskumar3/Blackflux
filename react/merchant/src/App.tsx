// App.tsx
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App.css";
import Table from "./Table";
import Filter from "./filter";

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
  const [filteredData, setFilteredData] = useState<FormData[]>([]); // Initialize with an empty array
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
    setFilteredData(tableData); // Update filteredData when tableData changes
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
    <div>
      <form  onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="contactName">Contact Name</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="contactPhone">Contact Phone</label>
          <input
            type="tel"
            id="contactPhone"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="contactEmail">Contact Email</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Type</label>
          <div>
            <input
              type="radio"
              id="smallBusiness"
              name="type"
              value="Small Business"
              checked={formData.type === "Small Business"}
              onChange={handleChange}
            />
            <label htmlFor="smallBusiness">Small Business</label>
          </div>
          <div>
            <input
              type="radio"
              id="enterprise"
              name="type"
              value="Enterprise"
              checked={formData.type === "Enterprise"}
              onChange={handleChange}
            />
            <label htmlFor="enterprise">Enterprise</label>
          </div>
          <div>
            <input
              type="radio"
              id="entrepreneur"
              name="type"
              value="Entrepreneur"
              checked={formData.type === "Entrepreneur"}
              onChange={handleChange}
            />
            <label htmlFor="entrepreneur">Entrepreneur</label>
          </div>
        </div>

        <div>
          <label>Category</label>
          <select
            id="categories"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Clothes">Clothes</option>
            <option value="Toys">Toys</option>
            <option value="Groceries">Groceries</option>
            <option value="Electronics">Electronics</option>
            <option value="Digital">Digital</option>
          </select>
        </div>

        <div>
          <label htmlFor="commissionPercentage">Commission Percentage</label>
          <input
            type="number"
            id="commissionPercentage"
            name="commissionPercentage"
            value={formData.commissionPercentage}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="chooseDate">Choose Date</label>
          <input
            type="date"
            id="chooseDate"
            name="chooseDate"
            value={formData.chooseDate}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="logo">Logo Image</label>
          <input
            type="file"
            id="logo"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Critical Account</label>
          <input
            type="checkbox"
            id="isCriticalAccount"
            name="isCriticalAccount"
            checked={formData.isCriticalAccount}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Payment Option:</label>
          <div>
            <input
              type="radio"
              id="cashOnDelivery"
              name="paymentOptions"
              value="Cash on Delivery"
              checked={formData.paymentOptions === "Cash on Delivery"}
              onChange={handleChange}
            />
            <label htmlFor="cashOnDelivery">Cash on Delivery</label>
          </div>
          <div>
            <input
              type="radio"
              id="upi"
              name="paymentOptions"
              value="UPI"
              checked={formData.paymentOptions === "UPI"}
              onChange={handleChange}
            />
            <label htmlFor="upi">UPI</label>
          </div>
          <div>
            <input
              type="radio"
              id="cardPayment"
              name="paymentOptions"
              value="Card Payment"
              checked={formData.paymentOptions === "Card Payment"}
              onChange={handleChange}
            />
            <label htmlFor="cardPayment">Card Payment</label>
          </div>
        </div>
        <button type="submit">
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </form>
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
  );
};

export default App;
