import React from 'react';
import './Filter.css';

const Filter = ({ filter, onFilterChange }) => (
  <input type="text" name="filter" value={filter} onChange={onFilterChange} />
);

export default Filter;
