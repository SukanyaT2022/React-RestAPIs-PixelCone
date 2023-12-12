import { Routes,Route } from 'react-router-dom';
import Login from './Login'
import Logout from './Logout'
import Search from './Search'
import Test from './Test'

const MyRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path='login' element={<Login/>} />
      <Route path='logout' element={<Logout/>} />
      <Route path='search' element={<Search/>} />
      <Route path='test' element={<Test/>} />
    </Routes>
  </div>
  )
}

export default MyRoutes
