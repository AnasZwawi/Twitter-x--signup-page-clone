import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Login />
    },
    {
      path:'/home', element: <Home/>
    }
  ]);
  return <RouterProvider router={router}/>;
}

export default App;
