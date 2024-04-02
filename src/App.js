import logo from './logo.svg';
import './App.css';
import FinancialStatement13 from './Forms/FinancialStatement13';
import { Route, Link, Routes } from 'react-router-dom';

import ApplicationDivorce8A from './Forms/ApplicationDivorce8A';
import FinancialStatement131 from './Forms/FinancialStatement131';
import NetFamilyPropertyStatement13B from './Forms/NetFamilyPropertyStatement13B';
import CertificateOfFinancialDisclosure13A from './Forms/CertificateOfFinancialDisclosure13A'
import Navbar from "./Navbar"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/CertificateOfFinancialDisclosure13A" element={<CertificateOfFinancialDisclosure13A />} />
        <Route path="/NetFamilyPropertyStatement13B" element={<NetFamilyPropertyStatement13B />} />
        <Route path="/FinancialStatement131" element={<FinancialStatement131 />} />
        <Route path="/ApplicationDivorce8A" element={<ApplicationDivorce8A />} />
        <Route path="/FinancialStatement13" element={<FinancialStatement13 />} />
      </Routes>

    </>
  );
}

export default App;
