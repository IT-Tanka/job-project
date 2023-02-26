import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const Auth: React.FC = () => {

    const { t } = useTranslation();
    const [isLogin, setIsLogin] = useState(
        localStorage.getItem("enter") === "done"
    );
    const [isAuthForm, setAuthForm] = useState(false);
    const navigate = useNavigate();

    const handleAuthClose = () => {
        setAuthForm(false);
        if (localStorage.getItem("enter") === "done") {
            setIsLogin(true);
            navigate("/job-project/profile");
        }
    };
    const handleClick = () => {
        if (localStorage.getItem("enter") === "done") {
            localStorage.setItem("enter", "notDone");
            setIsLogin(false);
            setAuthForm(false);
            navigate("/job-project");
        } else {
            setAuthForm(true);
        }
    };
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100px",
                ml: 1
            }}>
            {isLogin && <Avatar sx={{ bgcolor: "yellow" , color:"blue"}}>{t("YOU")}</Avatar>}
            <Button color="inherit" sx={{ ml: 1 }} onClick={handleClick}>
                {!isLogin && <span>{t("LOGIN")}</span>}
                {isLogin && <span>{t("LOGOUT")}</span>}
            </Button>
            {isAuthForm && <AuthForm handleClose={handleAuthClose} />}
        </Box>
    );
};

export default Auth;
