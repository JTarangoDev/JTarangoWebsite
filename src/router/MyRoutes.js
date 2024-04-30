import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { HeaderNav } from '../components/layout/HeaderNav';
import { MainPage } from '../components/layout/MainPage';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
        <HeaderNav></HeaderNav>

        <section>
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/home' element={<Navigate to='/'/>}></Route>
            </Routes>
        
        </section>
    
    </BrowserRouter>
  )
}
