import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './component/Header';
import Footer from './component/Footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
);
