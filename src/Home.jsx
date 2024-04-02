import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function Home() {
    return (


        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/FinancialStatement13">FinancialStatement13</Link>
                    </li>
                    <li>
                        <Link to="/ApplicationDivorce8A">ApplicationDivorce8A</Link>
                    </li>
                    <li>
                        <Link to="/FinancialStatement131">FinancialStatement131</Link>
                    </li>
                    <li>
                        <Link to="/NetFamilyPropertyStatement13B">NetFamilyPropertyStatement13B</Link>
                    </li>
                    <li>
                        <Link to="/CertificateOfFinancialDisclosure13A">CertificateOfFinancialDisclosure13A</Link>
                    </li>
                </ul>
            </nav>
        </div>


    );
}

export default Home;
