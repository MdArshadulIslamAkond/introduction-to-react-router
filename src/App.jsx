import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Users from './components/users/users';
import UserDetails from './components/userDetails/userDetails';
import Posts from './components/posts/posts';
import PostDetail from './components/postDetail/postDetail';
import ErrorPage from './components/errorPage/errorPage';



const router = createBrowserRouter([
  {
    // path: '*',
    // element: <Home/>,
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: 'about',
        element: <About/>,
      },
      {
        path: 'contact',
        element: <Contact/>,
      },
      {
        path: 'users',
        element: <Users/>,
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'users/:userId',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails/>,
      },
      {
        path: 'posts',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts/>,
      },
      {
        path: 'posts/:id',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <PostDetail/>,
      }
    ]
  }
])
function App() {


  return (
    <>
      <RouterProvider router={router} />
      {/* <h1>Vite + React</h1> */}
     
    </>
  )
}

export default App
