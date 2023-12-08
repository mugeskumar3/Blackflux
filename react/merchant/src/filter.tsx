// Filter.tsx
import React, { useState } from "react";

interface FilterProps {
  paymentOptions: string[];
  onFilterChange: (selectedOptions: string[], selectedType: string, nameFilter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ paymentOptions, onFilterChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const [nameFilter, setNameFilter] = useState<string>("");

  const handleCheckboxChange = (option: string) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const handleNameFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value);
  };

  const handleClick = () => {
    onFilterChange(selectedOptions, selectedType, nameFilter);
  };

  return (
    <div>
      <label>Filter by Payment Options:</label>
      {paymentOptions.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            id={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
      
      <label>Filter by Type:</label>
      <select
        value={selectedType}
        onChange={handleSelectChange}
      >
        <option value="">All</option>
        <option value="Small Business">Small Business</option>
        <option value="Enterprise">Enterprise</option>
        <option value="Entrepreneur">Entrepreneur</option>
      </select>

      <label>Filter by Name:</label>
      <input
        type="text"
        value={nameFilter}
        onChange={handleNameFilterChange}
      />

      <button onClick={handleClick}>Filter</button>
    </div>
  );
};

export default Filter;
