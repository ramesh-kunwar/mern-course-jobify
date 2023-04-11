import React from 'react';
import ReactDOM from "react-dom/client";

import "normalize.css"
import './index.css';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);

// import React, { StrictMode } from 'react';


// import { createRoot } from 'react-dom/client';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// const container = document.getElementById('root');
// const root = createRoot(container);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <h1>Home</h1>,
//     // errorElement: <ErrorPage />,
//     // loader: homeLoader,
//   },
//   // {
//   //   path: 'posts/:postId',
//   //   element: <Post />,
//   //   errorElement: <ErrorPage />,
//   //   loader: postLoader,
//   // },
// ]);

// root.render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
