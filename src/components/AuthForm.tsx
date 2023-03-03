import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../hook";
import { setIsAuthenticated } from "../store/authSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { DialogTitle, DialogContent, DialogActions } from "@mui/material";

interface AuthFormProps {
  toggleAuthFormVisibility(): void;
}

const AuthForm = ({ toggleAuthFormVisibility }: AuthFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "12345") {
      dispatch(setIsAuthenticated(true));
      navigate("/profile");
      toggleAuthFormVisibility();
    } else setWrong(true);
  };
  const handleChangeUsername = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWrong(false);
    setUsername(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWrong(false);
    setPassword(e.target.value);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: "99",
        top: "0",
        right: "0",
        display: "flex",
        flexDirection: "column",
        bgcolor: "yellow",
      }}
    >
      <DialogTitle>{t("Log In")}</DialogTitle>
      <DialogContent>
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          value={username}
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={handleChangeUsername}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={handleChangePassword}
        />
      </DialogContent>
      {wrong && <span>{t("Username or password entered incorrectly")}</span>}
      <DialogActions>
        <Button color="primary" onClick={toggleAuthFormVisibility}>
          {t("CANCEL")}
        </Button>
        <Button onClick={handleLogin}>{t("LOG IN")}</Button>
      </DialogActions>
    </Box>
  );
};

export default AuthForm;
