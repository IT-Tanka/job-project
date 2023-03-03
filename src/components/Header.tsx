import MainMenu from "./MainMenu";
import LangSelect from "./LangSelect";
import Auth from "./Auth";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

const Header = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
              p: 1,
            }}
          >
            <LangSelect />
            <MainMenu />
            <Auth />
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default Header;
