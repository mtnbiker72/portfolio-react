import React, { useState } from 'react';
// Page is being divided between Header, Content and Footer
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
