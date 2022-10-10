import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';

import Main from './layouts/Main';

function App() {

const router=createBrowserRouter ([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
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
          path:'*',
          element:<NotFoundPage></NotFoundPage>
        }
      ]
    }
  ])
  return (
    <div className="App">
     
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
