import { Routes, Route } from "react-router-dom";
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
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
