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
        }
    };
    const handleClick = () => {
        if (localStorage.getItem("enter") === "done") {
            localStorage.setItem("enter", "notDone");
            setIsLogin(false);
            setAuthForm(false);
            navigate(-1);
        } else {
            setAuthForm(true);
        }
    };
    return (
        <Box 
            sx={{ 
                display: "flex", 
                justifyContent: "flex-end", 
                width: "100px"
            }}>
            {isLogin && <Avatar sx={{ bgcolor: "yellow" }}>{t("YOU")}</Avatar>}
            <Button color="inherit" sx={{ ml: 2 }} onClick={handleClick}>
                {!isLogin && <span>{t("LOGIN")}</span>}
                {isLogin && <span>{t("LOGOUT")}</span>}
            </Button>
            {isAuthForm && <AuthForm handleClose={handleAuthClose} />}
        </Box>
    );
};

export default Auth;
