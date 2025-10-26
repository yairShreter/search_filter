// SIMPLE SOLUTION - Basic React Implementation
// This demonstrates fundamental React concepts without advanced optimizations
// Perfect for beginners or quick implementations

import { useState } from 'react';

const LiveSearchSimpleSolution = ({ data }) => {
  const [search, setSearch] = useState('');

  // Filter data based on search input
  const results = data.filter(person => {
    const searchLower = search.toLowerCase();
    return (
      person.name.toLowerCase().includes(searchLower) ||
      person.role.toLowerCase().includes(searchLower) ||
      person.company.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="live-search-filter">
      <h2>Employee Directory</h2>
      
      {/* Search Input */}
      <div className="search-container">
        <input 
          type="text"
          placeholder="Type to search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      
      {/* Results Display */}
      <div className="results-container">
        {search && results.length === 0 ? (
          <p className="no-results">No matches found</p>
        ) : (
          results.map(person => (
            <div key={person.id} className="employee-card">
              <h3>{person.name}</h3>
              <p>{person.role} at {person.company}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LiveSearchSimpleSolution;