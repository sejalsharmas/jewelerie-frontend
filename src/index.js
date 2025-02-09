import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Detail from './views/detail/Detail';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
  path: '/',
  element: <App/>
},
{
  path: '/detail/:id',
  element: <Detail/>
}
])
root.render(<RouterProvider router = {router} />);

