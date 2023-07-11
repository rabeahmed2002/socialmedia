import "./style.scss";
import Login from "./pages/login/login"
import Signup from './pages/signup/signup.js'
import LeftBar from "./components/leftBar/leftBar"
import NavBar from "./components/navBar/NavBar"
import RightBar from "./components/rightBar/rightBar"
import Home from './pages/home/home'
import Profile from "./pages/profile/profile" 

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import * as reactRouterDom from 'react-router-dom'
import { AuthContext } from "./Context/authContext";
import { useContext } from 'react'


function App() {

  const {currentUser}=useContext(AuthContext)

  const Layout=()=>{
    return(
      <div>
        <NavBar/>

        <div style={{display: "flex"}}>
          <LeftBar/>
          <div style={{flex:6}}>
            <Outlet/>
          </div>
          {/* <reactRouterDom.Outlet/> */}
          <RightBar/>
        </div>

      </div>
    )
  }

  const ProtectedRoute=({children})=>{
    if (!currentUser) {
      return <reactRouterDom.Navigate to='/login'/>
    }

    return children
  }

  const router=reactRouterDom.createBrowserRouter([
    {
      path:'/',
      element: <ProtectedRoute><Layout/></ProtectedRoute>,
      children: [
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/profile/:id',
          element: <Profile/>
        },
      ]
    },
    {
      path:'/login',
      element: <Login/>
    },
    {
      path:'/signup',
      element: <Signup/>
    },
  ])


  return (
    <div className="App">
      <reactRouterDom.RouterProvider router={router}/>      
    </div>
  );
}

export default App;
