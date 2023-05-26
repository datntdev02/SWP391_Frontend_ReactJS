import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

import Home from "../components/home/Home";
import Services from "../components/services/Services";
import Price from "../components/price/Price";
import FAQs from "../components/faqs/FAQs";
import AboutUs from "../components/about_us/AboutUs";

import Home from "../components/guestAndCustomer/home/Home";
import Services from "../components/guestAndCustomer/services/Services";
import Price from "../components/guestAndCustomer/price/Price";
import FAQs from "../components/guestAndCustomer/faqs/FAQs";
import AboutUs from "../components/guestAndCustomer/about_us/AboutUs";
import Booking from "../components/guestAndCustomer/booking/Booking";
import BookingSuccess from "../components/guestAndCustomer/booking/BookingSuccess";
import Track from "../components/guestAndCustomer/track/Track";
import AccountDetail from "../components/guestAndCustomer/profile/AccountDetail";
import ViewHistory from "../components/guestAndCustomer/profile/ViewHistory";
import Login from "../components/guestAndCustomer/auth/Login";
import Register from "../components/guestAndCustomer/auth/Register";
import ForgetPassword from "../components/guestAndCustomer/auth/ForgetPassword";
import ResetPassword from "../components/guestAndCustomer/auth/ResetPassword";
import Staff from "../components/staff/Staff";
import ListOrder from "../components/staff/bookingOrder/ListOrder";
import Schedule from "../components/staff/schedule/Schedule";
import Feedback from "../components/staff/feedback/Feedback";
import Manager from "../components/manager/Manager";
import ManageService from "../components/manager/manageService/ManageService";
import ManageWebContent from "../components/manager/manageWebContent/ManageWebContent";
import ManageRouteTrip from "../components/manager/manageRouteTrip/ManageRouteTrip";
import ManageAccount from "../components/admin/manageAccount/ManageAccount";
import Dashboard from "../components/admin/dashboard/Dashboard";
import Admin from "../components/admin/Admin";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "price",
        element: <Price />,
      },
      {
        path: "faqs",
        element: <FAQs />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

const PageRouter = () => {
  return <RouterProvider router={router} />;
};

export default PageRouter;
