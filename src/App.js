import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Main from './layout/Main';
import Billing from './Pages/Billing/Billing';
import Home from './Pages/Home/Home';

function App () {
  const router = createBrowserRouter( [
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/billing',
          element: <Billing></Billing>
        }
      ]
    }
  ] )
  return (
    <div className="App">
      <RouterProvider router={ router }></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
