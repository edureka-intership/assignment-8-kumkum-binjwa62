import React from "react";
import Home from "./components/home";
import Restdetail from "./components/Details/rest_details";
import Filter from "./components/Filter/filter_Page";
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"/details/:rName",
    element:<Restdetail/>,
  },
  {
    path:"/filter",
    element:<Filter/>,
  }

])




function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
