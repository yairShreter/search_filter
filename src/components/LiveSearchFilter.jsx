// TODO: Implement the LiveSearchFilter component
// 
// Requirements:
// 1. State Management: Maintain current search term and filtered list in state
// 2. User Input: Include a text input field for search queries
// 3. Dynamic Filtering: Filter the displayed list in real-time as user types
// 4. Component Structure: Accept initial data array as a prop
//
// The component should filter through the data prop and display matching results
// based on the search input. Consider filtering by name, role, or company.

import React from 'react';

const LiveSearchFilter = ({ data }) => {
  // TODO: Add state management for search term and filtered data
  
  // TODO: Add filtering logic
  
  // TODO: Add search input handler
  
  return (
    <div className="live-search-filter">
      <h2>Employee Directory</h2>
      
      {/* TODO: Add search input field */}
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search employees by name, role, or company..."
          // TODO: Add value and onChange props
        />
      </div>
      
      {/* TODO: Display filtered results */}
      <div className="results-container">
        <p>TODO: Display filtered employee list here</p>
        {/* 
        Expected output format:
        <div className="employee-card">
          <h3>{employee.name}</h3>
          <p>{employee.role} at {employee.company}</p>
        </div>
        */}
      </div>
    </div>
  );
};

export default LiveSearchFilter;