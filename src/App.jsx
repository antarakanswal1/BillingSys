import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import CustomerDetail from './Pages/CustomerDetail';
import CustomerDetail2 from './Pages/CustomerDetail2';
import CustomerInfo from './Pages/CustomerInfo';
import Dashboard from './Pages/Dashboard';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import InventoryPage from './Pages/InventoryPage';
import CustomerPage from './Pages/CustomerInfo';

const router = createBrowserRouter([
  { path: "/customerdetail", element: <CustomerDetail /> },
  { path: "/customerdetail2", element: <CustomerDetail2 /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/", element: <SignUp /> },
  { path: "/login", element: <Login/> },
  { path: "/customerinfo", element: <CustomerInfo /> },
  { path: "/inventorypage", element: <InventoryPage /> },
  { path: "/customerpage", element: <CustomerPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
