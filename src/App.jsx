import './App.css';
import {
  Ask,
  Catalog,
  Contact,
  Dashboard,
  FAQ,
  Home,
  Knowledge,
  MyTickets,
  OffersPage,
  Proposal,
  RaiseTicket
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';




function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard
          />} />
          <Route path="/raise-ticket" element={<RaiseTicket />} />
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/knowledge" element={<Knowledge />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;