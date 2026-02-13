import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import TopUp from './pages/TopUp.tsx';
import Invoice from './pages/Invoice.tsx';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-950">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topup/:id" element={<TopUp />} />
            <Route path="/invoice" element={<Invoice />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
