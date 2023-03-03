import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hook";
import Home from "./Home";
import News from "./News";
import Profile from "./Profile";
import NotFound from "./NotFound";
import MainLayout from "../layouts/MainLayout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/job-project" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        {useAppSelector((state) => state.auth.isAuthencticated) === true && (
          <Route path="profile" element={<Profile />} />
        )}
        {useAppSelector((state) => state.auth.isAuthencticated) === false && (
          <Route
            path="profile"
            element={<Navigate to={"/job-project"} replace />}
          />
        )}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
