import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Footer from './component/Footer';
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
);
