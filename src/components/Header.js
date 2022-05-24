import React from 'react';
import Navigation from './Navigation';

const styles = {
    nameSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      height: '100px',
    },
    headerSection: {
        backgroundColor: '#0e0e4f',
        justifyContent: 'center',
        alignItems: 'center',
    }
  };

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div style={styles.headerSection}>
      <h1 style={styles.nameSection}>Heather Graham</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}