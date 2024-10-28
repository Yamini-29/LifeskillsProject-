'use client';
import React, { useState } from 'react';

const DataTable = () => {
  // Sample data
  const initialData = [
    { id: 1, name: 'Yamini', rollNumber: 'CS21B001', hours: 5 },
    { id: 2, name: 'Jai Pradeep', rollNumber: 'CS21B002', hours: 10 },
    { id: 3, name: 'Shreya Tumma', rollNumber: 'CS21B003', hours: 7 },
    { id: 4, name: 'Aashik', rollNumber: 'CS21B004', hours: 3 },
    { id: 5, name: 'Dhruti', rollNumber: 'CS21B005', hours: 8 },
    { id: 6, name: 'Jino', rollNumber: 'CS21B006', hours: 4 },
    { id: 7, name: 'Sidhu', rollNumber: 'CS21B007', hours: 12 },
    { id: 8, name: 'Akshay', rollNumber: 'CS21B008', hours: 6 },
    { id: 9, name: 'Nithin', rollNumber: 'CS21B009', hours: 9 },
    { id: 10, name: 'Rhutvik', rollNumber: 'CS21B010', hours: 11 },
    // Add more data here for testing pagination
  ];

  // State variables
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Number of rows per page
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});


  // Sort handler function
  const handleSort = () => {
    const sortedData = [...data].sort((a, b) =>
      sortOrder === 'asc' ? a.hours - b.hours : b.hours - a.hours
    );
    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
// Function to handle 'Select All' checkbox
const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    
    // Update individual checkboxes based on 'Select All'
    const newSelectedItems = {};
    currentData.forEach(item => {
      newSelectedItems[item.id] = newSelectAll;
    });
    
    setSelectedItems(newSelectedItems);
  };
  // Function to handle individual checkbox change
const handleCheckboxChange = (id) => {
    setSelectedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };
  
  // Search filter function
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.rollNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination calculations
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Pagination navigation
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Student Hours Table</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by Name or Roll Number..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      {/* Sort button */}
      <button
        onClick={handleSort}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Sort by Hours ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-200 text-left text-gray-600 font-semibold">S.No</th>
              <th className="px-6 py-3 bg-gray-200 text-left text-gray-600 font-semibold">Name</th>
              <th className="px-6 py-3 bg-gray-200 text-left text-gray-600 font-semibold">Roll Number</th>
              <th className="px-6 py-3 bg-gray-200 text-left text-gray-600 font-semibold cursor-pointer" onClick={handleSort}>
                Number of Hours
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-gray-600 font-semibold">
  <input
    type="checkbox"
    checked={selectAll}
    onChange={handleSelectAll}
    className="form-checkbox h-4 w-4 text-blue-600"
  />
</th>

            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={item.id} className="border-b">
                <td className="px-6 py-4">{indexOfFirstRow + index + 1}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.rollNumber}</td>
                <td className="px-6 py-4">{item.hours}</td>
                <td className="px-6 py-4">
                <input
  type="checkbox"
  checked={selectedItems[item.id] || false}
  onChange={() => handleCheckboxChange(item.id)}
  className="form-checkbox h-4 w-4 text-blue-600"
/>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
