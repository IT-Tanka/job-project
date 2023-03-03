import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { setIsAuthenticated } from "../store/authSlice";
import AuthForm from "./AuthForm";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const Auth = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isAuth: boolean = useAppSelector(
    (state) => state.auth.isAuthencticated
  );
  const [isAuthForm, setIsAuthForm] = useState(false);

  const handleAuth = () => {
    if (isAuth) {
      dispatch(setIsAuthenticated(false));
    } else toggleAuthFormVisibility();
  };
  const toggleAuthFormVisibility = () => {
    setIsAuthForm(!isAuthForm);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100px",
        ml: 1,
      }}
    >
      {isAuth && (
        <Avatar sx={{ bgcolor: "yellow", color: "blue" }}>{t("YOU")}</Avatar>
      )}
      <Button color="inherit" sx={{ ml: 1 }} onClick={handleAuth}>
        {!isAuth && <span>{t("LOGIN")}</span>}
        {isAuth && <span>{t("LOGOUT")}</span>}
      </Button>
      {isAuthForm && (
        <AuthForm toggleAuthFormVisibility={toggleAuthFormVisibility} />
      )}
    </Box>
  );
};

export default Auth;
