import { Routes,Route } from 'react-router-dom';
import Login from './Login'
import Logout from './Logout'

const MyRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path='login' element={<Login/>} />
      <Route path='logout' element={<Logout/>} />
    </Routes>
  </div>
  )
}

export default MyRoutes
