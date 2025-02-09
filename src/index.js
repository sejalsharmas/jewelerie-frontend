import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Detail from './views/detail/Detail';
import Edit from './views/edit/Edit';
import Add from './views/Add/Add';
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
},
{
  path:'/Edit/:id',
  element: <Edit/>
},
{
  path:'/add',
  element: <Add/>
}
])
root.render(<RouterProvider router = {router} />);

