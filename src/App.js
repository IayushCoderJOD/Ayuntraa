import React, { useEffect } from "react";
import Body from "./components/Body";
import Login from "./components/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/Firebase";
import { Provider } from "react-redux";
import appStore from './utils/appStore'
import { addUser, removeUser } from "./utils/userSlice";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids"
import Kitchen from "./components/Kitchen";
import Cart from "./components/Cart";

function App() {
  const appRouter = createBrowserRouter([
    {
      
      path: "/",
      element: <Login />,
    },
    {
      path: "/main",
      element: <Body />,    
    },
    {
      path:"/men",
      element:<Men />
    },{
      path:"/women",
      element:<Women />
    },
    {
      path:"/kids",
      element:<Kids />
    },
    {
      path:"/kitchen",
      element:<Kitchen />
    },
    {
      path:"/cart",
      element:<Cart />
    },
    


  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user.uid;
        appStore.dispatch(addUser({
          uid:uid, email:email,displayName:displayName
        }))
        
      } else {
        appStore.dispatch(removeUser());
      }
    }); 
  },[])

  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
