import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App-v1';
import StarRating from './components/StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating starLength="20" />
    <StarRating starLength="10" />
    <StarRating messages={["terrible", "bad", "just so so", "good", "wonderful"]} /> */}
  </React.StrictMode>
);
