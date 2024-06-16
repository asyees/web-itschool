import React from 'react'
import ReactDOM from 'react-dom'
import{
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route 
} from "react-router-dom";
import './index.css'
import MainPage from './pages/main.jsx';
import Leaders from './pages/leaders.jsx';
import Tasks from './pages/tasks.jsx';
import Courses from './pages/courses.jsx';
import PythonIntro from './pages/python/pythonIntro.jsx';
import VideocoursePY from './pages/python/lesson1/videocoursePY.jsx';
import VideocourseJS from './pages/js/lesson1/videocourseJS.jsx';
import VideocourseJS1 from './pages/js/lesson1/videocourseJS1.jsx';
import VideocourseJS2 from './pages/js/lesson2/videocourseJS2.jsx';
import VideocoursePY1 from './pages/python/lesson1/videocoursePY1.jsx';
import VideocoursePY2 from './pages/python/lesson2/videocoursePY2.jsx';
import Course_textPY from './pages/python/lesson1/course_textPY.jsx';
import VideocourseC from './pages/cpp/lesson1/videocourseC++.jsx';
import VideocourseC1 from './pages/cpp/lesson1/videocourseC++1.jsx';
import Course_textJS1 from './pages/js/lesson1/course_textJS1.jsx';
import VideocourseC2 from './pages/cpp/lesson2/videocourseC++2.jsx';
import Course_textC from './pages/cpp/lesson1/course_textC.jsx';
import Course_textC1 from './pages/cpp/lesson2/course_textC1.jsx';
import Course_textPY1 from './pages/python/lesson2/course_textPY1.jsx';
import Course_textJS2 from './pages/js/lesson2/course_textJS2.jsx';
import Python1_1 from './pages/python/tasks/1_1py.jsx';
import Python1_2 from './pages/python/tasks/1_2py.jsx';
import Python1_3 from './pages/python/tasks/1_3py.jsx';
import Python2_1 from './pages/python/tasks/2_1py.jsx';
import Python2_2 from './pages/python/tasks/2_2py.jsx';
import Python2_3 from './pages/python/tasks/2_3py.jsx';
import JS1_1 from './pages/js/tasks/1_1js.jsx';
import JS1_2 from './pages/js/tasks/1_2js.jsx';
import JS1_3 from './pages/js/tasks/1_3js.jsx';
import JS2_1 from './pages/js/tasks/2_1js.jsx'
import JS2_2 from './pages/js/tasks/2_2js.jsx'
import Registration from './pages/registration.jsx';
import JSIntro from './pages/js/jsintro.jsx'
import CPPIntro from './pages/cpp/cppintro.jsx'
import CPP1_1 from './pages/cpp/tasks/1_1cpp.jsx';
import CPP1_2 from './pages/cpp/tasks/1_2cpp.jsx';
import CPP2_1 from './pages/cpp/tasks/2_1cpp.jsx';
import CPP2_2 from './pages/cpp/tasks/2_2cpp.jsx';
import UserProfile from './pages/personal_account.jsx';
import Task1 from './pages/task1.jsx';
import Login from './pages/login.jsx';
const router = createBrowserRouter([
  {path : "/",
  element : <MainPage/>
  },
{
  path : "/login",
  element: <Login/>
},

  {path : "tasks/:taskId",
    element : <Task1/>
  },
  {path : "leaderboard",
    element : <Leaders/>
  },
  {path : "/personal_account",
  element : <UserProfile/>
},

  {path : "/python_promo",
    element : <PythonIntro/>
  },
  {path : "/jsintro",
  element : <JSIntro/>
},
{path : "/cppintro",
element : <CPPIntro/>
},
  {path : "/registration",
  element : <Registration/>
},
  {path : "user/registration",
    element : <Registration/>
  },
  {path : "user/login",
    element : <Registration/>
  },
  {path : "/courses",
  element : <Courses/>
},
{path : "/tasks",
element : <Tasks />
},
{path : "/videocoursePY",
element : <VideocoursePY />
},
{path : "/videocoursePY1",
element : <VideocoursePY1 />
},
{path : "/videocoursePY2",
element : <VideocoursePY2 />
},
{path : "/course_textPY",
element : <Course_textPY/>
},
{path : "/course_textPY1",
element : <Course_textPY1/>
},
{path : "/1_1py",
element : <Python1_1 />
},
{path : "/1_2py",
element : <Python1_2 />
},
{path : "/1_3py",
element : <Python1_3 />
},
{path : "/2_1py",
element : <Python2_1 />
},
{path : "/2_2py",
element : <Python2_2 />
},
{path : "/2_3py",
element : <Python2_3 />
},
{path : "/registration",
element : <Registration/>
},
{path : "/videocourseJS",
element : <VideocourseJS />
},
{path : "/videocourseJS1",
element : <VideocourseJS1 />
},
{path : "/course_textJS1",
element : <Course_textJS1/>
},
{path : "/videocourseJS2",
element : <VideocourseJS2 />
},
{path : "/1_1js",
element : <JS1_1/>
},
{path : "/1_2js",
element : <JS1_2/>
},
{path : "/1_3js",
element : <JS1_3/>
},
{path : "/course_textJS2",
element : <Course_textJS2/>
},
{path : "/2_1js",
element : <JS2_1/>
},
{path : "/2_2js",
element : <JS2_2/>
},
{path : "/videocourseCPP",
element : <VideocourseC />
},
{path : "/videocourseCPP1",
element : <VideocourseC1/>
},
{path : "/course_textC",
element : <Course_textC/>
},
{path : "/1_1cpp",
element : <CPP1_1/>
},
{path : "/1_2cpp",
element : <CPP1_2/>
},
{path : "/videocourseCPP2",
element : <VideocourseC2/>
},
{path : "/course_textC1",
element : <Course_textC1/>
},
{path : "/2_1cpp",
element : <CPP2_1/>
},
{path : "/2_2cpp",
element : <CPP2_2/>
},
]

);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)






























/* import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import{
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route 
} from "react-router-dom";
import './index.css'
import MainPage from './pages/main.jsx';
import Leaders from './pages/leaders.jsx';
import Courses from './pages/courses.jsx';
import PythonIntro from './pages/python/pythonIntro.jsx';
import VideocoursePY from './pages/python/lesson1/videocoursePY.jsx';
//import VideocoursePY1 from './pages/python/videocoursePY1.jsx';
import VideocoursePY1 from './pages/python/lesson1/videocoursePY1.jsx';
import Course_textPY from './pages/python/lesson1/course_textPY.jsx';
import Python1_1 from './pages/python/tasks/1_1py.jsx';

const routes = createRoutesFromElements(
  <Route path ='/' element = {<MainPage/>}>
    <Route path = "leaderboard" element = {<Leaders/>} />
    <Route path='courses' element = {<Courses/>}> 
      <Route path='python_promo' element = {<PythonIntro/>}/>
      <Route path='lessons' element = {null}> 
        <Route path='intro' element = {<VideocoursePY/>}/>
        <Route path='1' element = {null}>
           <Route path='video' element = {<VideocoursePY1/>}/>
           <Route path='reading' element = {<Course_textPY/>}/>
           <Route path='tasks' element = {null}>
              <Route path='1' element = {<Python1_1/>}/>
             </Route> 
           </Route>

           </Route>

      </Route>


    </Route>
)

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
) */




// <Router>
//         <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={} />
//         <Route path="/registration" element={<Registration />} />
//         <Route path="/videocoursePY" element={<VideocoursePY />} />
//         <Route path="/videocoursePY1" element={<VideocoursePY1 />} />
//         <Route path="/videocoursePY2" element={<VideocoursePY2 />} />
//         <Route path="/videocourseC" element={<VideocourseC />} />
//         <Route path="/videocourseC1" element={<VideocourseC1 />} />
//         <Route path="/videocourseC2" element={<VideocourseC2 />} />
//         <Route path="/videocourseJS" element={<VideocourseJS />} />
//         <Route path="/videocourseJS1" element={<VideocourseJS1 />} />
//         <Route path="/videocourseJS2" element={<VideocourseJS2 />} />
//         <Route path="/course_textPY" element={<Course_textPY />} />
//         <Route path="/course_textPY1" element={<Course_textPY1 />} />
//         <Route path="/course_textC" element={<Course_textC />} />
//         <Route path="/course_textC1" element={<Course_textC1 />} />
//         <Route path="/course_textJS1" element={<Course_textJS1 />} />
//         <Route path="/course_textJS2" element={<Course_textJS2 />} />
//         <Route path="/leaders" element={<Leaders />} />
//         <Route path="/tasks" element={<Tasks />} />
//         <Route path="/tasksPY" element={<TasksPY />} />
//       </Routes>
//       </Suspense>
//     </Router>