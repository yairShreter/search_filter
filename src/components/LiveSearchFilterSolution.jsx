// SOLUTION REFERENCE - For Interviewer Use Only
// This file shows a complete implementation of the LiveSearchFilter component
// Do not show this to candidates during the interview

import React, { useState, useMemo } from 'react';

const LiveSearchFilterSolution = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Memoized filtering logic for performance
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return data;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();
    return data.filter(item => 
      item.name.toLowerCase().includes(lowerSearchTerm) ||
      item.role.toLowerCase().includes(lowerSearchTerm) ||
      item.company.toLowerCase().includes(lowerSearchTerm)
    );
  }, [data, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="live-search-filter">
      <h2>Employee Directory</h2>
      
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search employees by name, role, or company..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      
      <div className="results-container">
        {filteredData.length === 0 ? (
          <div className="no-results">
            {searchTerm ? 'No employees found matching your search.' : 'No employees to display.'}
          </div>
        ) : (
          filteredData.map(employee => (
            <div key={employee.id} className="employee-card">
              <h3>{employee.name}</h3>
              <p>{employee.role} at {employee.company}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LiveSearchFilterSolution;