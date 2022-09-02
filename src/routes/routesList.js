import RegestrationPage from "../pages/Auth/RegestrationPage/RegestrationPage";
import HomePage from "../pages/HomePage/HomePage";
import UserPage from "../pages/UserPage/UserPage";

const publicRoutes = [
  {
    path: `/`,
    exact: true,
    component: HomePage,
  },
  {
    path: `/user`,
    exact: true,
    component: UserPage,
  },
  {
    path: `/regestration`,
    exact: true,
    component: RegestrationPage,
  },
];

export { publicRoutes };
