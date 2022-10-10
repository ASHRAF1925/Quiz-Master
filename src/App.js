import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';

import Main from './layouts/Main';
import Questions from './Questions/Questions';

function App() {

const router=createBrowserRouter ([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')

          },
          element:<Topics></Topics>
        },

        {
          path:'/statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'/topics/:topicID',
          element:<Questions></Questions>
        }
        
      ]
    }
    ,{
      path:'*',
      element:<NotFoundPage></NotFoundPage>
    }
  ])
  return (
    <div className="App">
     
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
