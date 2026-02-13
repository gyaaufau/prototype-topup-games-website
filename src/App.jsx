import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TopUp from './pages/TopUp';
import Invoice from './pages/Invoice';

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-slate-950">
                <Navbar />
                <main className="flex-grow">
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

export default App;
