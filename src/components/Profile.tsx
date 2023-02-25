import { Navigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';

const Profile: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            {(localStorage.getItem('enter') === null  ||  localStorage.getItem('enter') === 'notDone') && <Navigate to="/job-project" />}
            <div>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Box 
                        sx={{ 
                            bgcolor: '#cfe8fc', 
                            height: '100vh',
                            p:7,
                            mt:2
                        }} 
                    >
                        <Paper 
                            sx={{
                                color:'grey',
                                p:2,
                                mb:3
                                }}
                        >
                            {t("PROFILE PAGE")}
                        </Paper>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium architecto ab nulla autem minima accusamus pariatur eaque maxime iure aliquam, harum eos delectus. Culpa, eveniet. Odio excepturi quae quia!
                    </Box>
                </Container>
            </div>
        </>
    )
}

export default Profile