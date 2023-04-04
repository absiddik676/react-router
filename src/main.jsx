import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/Aboutt/About';
import Contuct from './components/Contuct/Contuct';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import Frined from './components/Friend/Frined';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App></App>
//   },
//   {
//     path:'/about',
//     element:<About></About>
//   },
//   {
//     path:'/contuct',
//     element:<Contuct></Contuct>
//   },
// ])

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/about',
        element:<About/>
      },
       {
        
        path:'friend/:friendId',
        element:<FriendDetail></FriendDetail>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'/contuct',
        element:<Contuct></Contuct>
      },
      {
        path:'/friends',
        element:<Friends></Friends>,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'/posts',
        element:<Posts></Posts>,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'/postDetails/:postId',
        element:<PostDetails></PostDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path:'*',
        element: <h1>4O4 Not Fund....</h1>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
