import React, { Suspense } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MainRoutes from './components/MainRoutes';
import { useEffect } from 'react';
import { useAppDispatch } from './hook';
import { fetchNews } from './store/newsSlice';

function App() {

const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNews(1));
}, [dispatch]);
  return (
    <BrowserRouter>
      <div className="App"> 
      <Suspense fallback="loading">
        <MainRoutes/> 
      </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
