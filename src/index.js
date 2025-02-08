import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
  path: '/',
  element: <App/>
}])
root.render(
 
    <App />
  
);

