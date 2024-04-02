import logo from './logo.svg';
import './App.css';
import FinancialStatement13 from './Forms/FinancialStatement13';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ApplicationDivorce8A from './Forms/ApplicationDivorce8A';
import FinancialStatement131 from './Forms/FinancialStatement131';
import NetFamilyPropertyStatement13B from './Forms/NetFamilyPropertyStatement13B';
import CertificateOfFinancialDisclosure13A from './Forms/CertificateOfFinancialDisclosure13A'
import Home from './Home';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CertificateOfFinancialDisclosure13A" element={<CertificateOfFinancialDisclosure13A />} />
        <Route path="/NetFamilyPropertyStatement13B" element={<NetFamilyPropertyStatement13B />} />
        <Route path="/FinancialStatement131" element={<FinancialStatement131 />} />
        <Route path="/ApplicationDivorce8A" element={<ApplicationDivorce8A />} />
        <Route path="/FinancialStatement13" element={<FinancialStatement13 />} />
      </Routes>
    </Router>

  );
}

export default App;
