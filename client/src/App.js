import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "components/navbar/Navbar";
import LeftBar from "components/leftBar/LeftBar";
import RightBar from "components/rightBar/RightBar";
import Home from "pages/home/Home";
import Profile from "pages/profile/Profile";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ]
    }
  ]);
  
  return (  
    <RouterProvider router={router} />
  );
}

export default App;
