import React , {lazy , Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error  from './components/Error';
import Cart  from './components/Cart';
import { Form } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';

const Grocery = lazy(()=> import("./components/Grocery"));




const AppLayout = () => {

  //This is how we update the usercontext:

  // const[userName , setUserName] = useState();
  // useEffect(()=>{
  //   const data = {
  //     name: "Aryan Gupta" ,
  //   }
  //   setUserName(data.name);
  // },[]);
  return (
    
    // Providing date to context...
    // <UserContext.Provider value={{LoggedIn : userName , setUserName}}>
      
        <div className="app">    <Header />
          {/* Whenever there is a change in path the outlet will be changed according to the route */}
      
          <Outlet/>
          <Footer/>
      </div>
    // </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,  
    errorElement: <Error/>,
    children: [ 
      {
        path: '/',
        element: <Body/>,
        errorElement: <Error/>
      }
      ,
      {

        path: "/grocery", 
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
        
      },
      {

        path: "/about", 
        element: <About></About>,
        errorElement: <Error />
      },
      {
        path: "/Contact", 
        element: <Contact/>,
        errorElement: <Error />

      },
      {
        path: "/cart",
        element: <Cart/>,
        errorElement: <Error/>
      }
      ,
      {
        path: "/loginform",
        element: <Form/>,
        errorElement: <Error/>
      }
      ,{
        path:"/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ]
  },
]
);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);