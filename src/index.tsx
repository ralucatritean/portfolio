import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './App';
import Shop from './pages/Shop';
import Movie from './pages/Movie';
import TicTacToe from './pages/TicTacToe';
import MyCvPage from './pages/MyCv';
import MemoryGame from './pages/MemoryGame';
import SnakeGame from './pages/SnakeGame';
import Favorite from './components/Movie/Favorite';
import Home from './components/Movie/Home';
import Store from './components/Shop/Store';
import Cart from './components/Shop/Cart';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/myCvPage",
        element: <MyCvPage />,
      },
      {
        path: "/ticTacToe",
        element: <TicTacToe />,
      },
      {
        path: "/memoryGame",
        element: <MemoryGame />,
      },
      {
        path: "/snakeGame",
        element: <SnakeGame />,
      },
      {
        path: "shop",
        element: <Shop />,
        children:[
          {
            path:"",
            element:<Store/>
          },
          {
            path:"cart",
            element:<Cart/>
          }
        ]
      },
      {
        path: "movie",
        element: <Movie />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "favorites",
            element: <Favorite />,
          }
        ]
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);