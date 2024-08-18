import DashboardLayout from "@/layouts/DashboardLayout";
import Profile from "@/pages/Dashboard/Common/Profile";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
    ],
  },
]);

export default router;
