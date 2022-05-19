import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div className = "header">
      <h1>Heather Graham</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}