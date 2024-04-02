import logo from './logo.svg';
import './App.css';
import FinancialStatement13 from './routes/FinancialStatement13';
import { Route, Link, Routes } from 'react-router-dom';

import ApplicationDivorce8A from './routes/ApplicationDivorce8A';
import FinancialStatement131 from './routes/FinancialStatement131';
import NetFamilyPropertyStatement13B from './routes/NetFamilyPropertyStatement13B';
import CertificateOfFinancialDisclosure13A from './routes/CertificateOfFinancialDisclosure13A'
import Navbar from "./Navbar"

function App() {
  return (
    <>


      <Routes>
        <Route path="/CertificateOfFinancialDisclosure13A" element={<CertificateOfFinancialDisclosure13A />} />
        <Route path="/" element={<Navbar />} />
        <Route path="/NetFamilyPropertyStatement13B" element={<NetFamilyPropertyStatement13B />} />
        <Route path="/FinancialStatement131" element={<FinancialStatement131 />} />
        <Route path="/ApplicationDivorce8A" element={<ApplicationDivorce8A />} />
        <Route path="/FinancialStatement13" element={<FinancialStatement13 />} />
      </Routes>

    </>
  );
}

export default App;
