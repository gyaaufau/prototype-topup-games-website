import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import TopUp from './pages/TopUp.tsx';
import Invoice from './pages/Invoice.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg-main)' }}>
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
    </ThemeProvider>
  );
}
