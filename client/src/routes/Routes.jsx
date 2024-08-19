import DashboardLayout from "@/layouts/DashboardLayout";
import Profile from "@/pages/Dashboard/Common/Profile";
import Attendance from "@/pages/Dashboard/Employee/Attendance";
import Leave from "@/pages/Dashboard/Employee/Leave";
import Salary from "@/pages/Dashboard/Employee/Salary";
import Statistics from "@/pages/Dashboard/Employee/Statistics";
import TaskManagement from "@/pages/Dashboard/Employee/TaskManagement";
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
        element: <Statistics />,
      },
      {
        path: "/attendance",
        element: <Attendance />,
      },
      {
        path: "/leave",
        element: <Leave />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/taskManagement",
        element: <TaskManagement />,
      },
      {
        path: "/salary",
        element: <Salary />,
      },
    ],
  },
]);

export default router;
