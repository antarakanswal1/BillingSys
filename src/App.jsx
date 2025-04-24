import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import CustomerDetail from './Pages/CustomerDetail';
import CustomerDetail2 from './Pages/CustomerDetail2';
import Dashboard from './Pages/Dashboard';
import LoginPage from './Pages/LoginPage';
import LoginPage2 from './Pages/LoginPage2';

const router = createBrowserRouter([
  { path: "/customerdetail", element: <CustomerDetail /> },
  { path: "/customerdetail2", element: <CustomerDetail2 /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/", element: <LoginPage /> },
  { path: "/loginpage2", element: <LoginPage2 /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
