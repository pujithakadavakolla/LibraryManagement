import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './Components/landingPage';
import AdminLogin from './Components/admin/adminLogin'
import AdminPortal from './Components/admin/adminPortal';
import UserLogin from './Components/user/userLogin';
import UserPortal from './Components/user/userPortal';



function App() {
  return (
    <div className='app'>
        <BrowserRouter>
          <Routes>
              <Route element={<LandingPage />} path='/' />
              <Route element={<AdminLogin />}  path='/adminLogin' />
              <Route element={<AdminPortal />} path='/adminPortal/*' />



              <Route element={<UserLogin />} path='/UserLogin' />
              <Route element={<UserPortal />} path='/UserPortal/*' />

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
