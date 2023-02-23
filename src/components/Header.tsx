import MainMenu from './MainMenu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SelectLang from './SelectLang';
import Auth from './Auth';

const Header: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex' , justifyContent:'space-between' }}>
            <SelectLang />
            <MainMenu />
            <Auth/>
            </Toolbar>
        </AppBar>
        </Box>
    );
}

export default Header