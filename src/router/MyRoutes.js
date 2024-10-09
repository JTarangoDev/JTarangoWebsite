import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { MainPage } from '../components/layout/MainPage';
import { AboutPage } from '../components/layout/AboutPage';
import { ProjectsPage } from '../components/layout/ProjectsPage';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
    
        <section>
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/home' element={<Navigate to='/'/>}></Route>
                <Route path='/about' element={<AboutPage/>}></Route>
                <Route path='/projects' element={<ProjectsPage/>}></Route>
            </Routes>
        </section>
    
    </BrowserRouter>
  )
}
