import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './home/home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github  from './components/Github/Github.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element : <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "user:userid",
        element: <User/>
      },
      {
        path:"github",
        element: <Github/>
      }
    ]
  }
])
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path:"/" element={<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contact' element={<Contact/>}/>
//     </Route>
//   )
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)