    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
    import App from './App.jsx'; // Note: .jsx extension is common with Vite React
    import './App.css'; // Import custom styles
    import './index.css'; // Import the Tailwind CSS
    

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <BrowserRouter>          {/*Wrapping our entire App with BrowserRouter so it can handle routing (control the URLs)*/}
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
    