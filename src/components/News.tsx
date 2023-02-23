import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hook';
import { fetchNews } from '../store/newsSlice';
import NewsList from './NewsList';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';

const News:React.FC= () => {
const {t} = useTranslation();
const { loading, error } = useAppSelector(state => state.news);
const dispatch = useAppDispatch();
const [page, setPage]=useState(2);

const handleClick=()=>{
    setPage(page+1);
    dispatch(fetchNews(page));
}
return (
    
    <Container maxWidth="lg" >
    {loading && <h2>Loading...</h2>}
    {error && <h2>An error occured: {error}</h2>}
    <NewsList />
    <Button variant="outlined" sx={{width:'300px', height:'50px', fontSize:'20px', margin:'auto'}}  onClick={handleClick}>{t('MORE POSTS')}</Button>
    </Container>
);
}

export default News;
