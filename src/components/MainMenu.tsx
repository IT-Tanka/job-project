import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const MainMenu = () => {
  const { t } = useTranslation();
  
  return (
    <nav>
      <NavLink to="/job-project" end>
        {t("HOME")}
      </NavLink>
      <NavLink to="/job-project/news">{t("NEWS")}</NavLink>
      <NavLink to="/job-project/profile">{t("PROFILE")}</NavLink>
    </nav>
  );
};

export default MainMenu;
