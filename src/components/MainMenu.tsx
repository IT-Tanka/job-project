import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <NavLink to="." end>
        {t("HOME")}
      </NavLink>
      <NavLink to="news">{t("NEWS")} </NavLink>
      <NavLink to="profile">{t("PROFILE")} </NavLink>
    </nav>
  );
};

export default MainMenu;
