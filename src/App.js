import React, { useState } from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";


function App() {
    const [currentPage, setCurrentPage] = useState('About');
    return (
      <div className="Portfolio">
        <Header currentPage={currentPage} handlePageChange={setCurrentPage} />
        <Content currentPage={currentPage} handlePageChange={setCurrentPage} />
        <Footer />
      </div>
    );
  }

export default App;
