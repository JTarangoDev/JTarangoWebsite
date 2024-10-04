import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { MainPage } from '../components/layout/MainPage';
import { AboutPage } from '../components/layout/AboutPage';
import { ContactSection } from '../components/ContactSection';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
    
        <section>
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/home' element={<Navigate to='/'/>}></Route>
                <Route path='/about' element={<AboutPage/>}></Route>
                <Route path='/projects' element={<Navigate to='/'/>}></Route>
            </Routes>
        </section>
    
    </BrowserRouter>
  )
}
