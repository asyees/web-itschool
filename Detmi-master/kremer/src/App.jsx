import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {lazy, Suspense} from 'react';


import MainPage from './pages/main';
const Registration = lazy(() => import('./pages/registration'));
const VideocoursePY = lazy(() => import('./pages/python/lesson1/videocoursePY'));
const VideocoursePY1 = lazy(() => import('./pages/python/lesson1/videocoursePY1'));
const VideocoursePY2 = lazy(() => import('./pages/python/lesson2/videocoursePY2'));
const VideocourseC = lazy(() => import('./pages/cpp/lesson1/videocourseC++'));
const VideocourseC1 = lazy(() => import('./pages/cpp/lesson1/videocourseC++1'));
const VideocourseC2 = lazy(() => import('./pages/cpp/lesson2/videocourseC++2'));
const VideocourseJS = lazy(() => import('./pages/js/lesson1/videocourseJS'));
const VideocourseJS1 = lazy(() => import('./pages/js/lesson1/videocourseJS1'));
const VideocourseJS2 = lazy(() => import('./pages/js/lesson2/videocourseJS2'));
const Course_textPY = lazy(() => import('./pages/python/lesson1/course_textPY'));
const Course_textPY1 = lazy(() => import('./pages/python/lesson2/course_textPY1'));
const Course_textC = lazy(() => import('./pages/cpp/lesson1/course_textC'));
const Course_textC1 = lazy(() => import('./pages/cpp/lesson2/course_textC1'));
const Course_textJS1 = lazy(() => import('./pages/js/lesson1/course_textJS1'));
const Course_textJS2 = lazy(() => import('./pages/js/lesson2/course_textJS2'));
const  Leaders = lazy(() => import('./pages/leaders'));
const   Tasks = lazy(() => import('./pages/tasks'));
const   TasksPY = lazy(() => import('./pages/python/lesson1/tasksPY'));

const App = () => {
  return (
    <>
    <MainPage/>
    </>
  );
};

export default App;
