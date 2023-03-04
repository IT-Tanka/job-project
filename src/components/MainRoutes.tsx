import { Routes, Route, RouteProps, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "./Home";
import News from "./News";
import Profile from "./Profile";
import { useAppSelector } from "../hook";


type IRoute = RouteProps & {
  redirectTo?: string;
};

const publicRoutes: IRoute[] = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/news",
    element: <News />,
  },
];
const authedRoutes: IRoute[] = [
  {
    path: "/profile",
    element: <Profile />,
  },
];

const MainRoutes = () => {
  const isAuth = useAppSelector( (state) => state.auth.isAuthenticated);

  const routes = [
    ...publicRoutes,
    ...(isAuth ? authedRoutes : []),
    {
      path: "*",
      redirectTo: "/",
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routes.map((r) => {
          if (r.redirectTo) {
            return (
              <Route
                path={r.path}
                element={<Navigate to={r.redirectTo} replace />}
                key={r.redirectTo}
              />
            );
          }
          return <Route path={r.path} element={r.element} key={r.path} />;
        })}
        </Route>
    </Routes>
  );
};

export default MainRoutes;
