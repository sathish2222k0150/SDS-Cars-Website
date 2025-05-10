import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import FeedbackForm from './components/FeedbackForm';
import ChatbotWidget from './ChatbotWidget'; 

// Add custom styles to hide scrollbar but maintain functionality
const scrollbarStyle = `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`;

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const navigate = useNavigate();

  useEffect(() => {
    // Set page title
    document.title = 'SDS Car Workshop - Premium Automotive Care';
    
    // Add custom styles
    const style = document.createElement('style');
    style.textContent = scrollbarStyle;
    document.head.appendChild(style);
    
    // Online/offline event listeners
    const handleOnline = () => {
      setIsOnline(true);
      // If we were showing offline page, redirect to home when back online
      if (window.location.pathname === '/NotFound') {
        navigate('/');
      }
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      navigate('/NotFound');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial check
    if (!navigator.onLine) {
      handleOffline();
    }

    return () => {
      document.head.removeChild(style);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <Routes>
          {isOnline ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/FeedbackForm" element={<FeedbackForm />} />
              <Route path="/NotFound" element={<NotFound />} />
            </>
          ) : (
            <Route path="/NotFound" element={<NotFound />} />
          )}
        </Routes>
      </main>
      <Footer />
      {isOnline && <ChatbotWidget />}
    </div>
    
  );
}



// Wrap the App with Router
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}