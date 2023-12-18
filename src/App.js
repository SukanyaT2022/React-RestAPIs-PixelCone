import { Routes,Route } from 'react-router-dom';
import Login from './Login'
import Logout from './Logout'
import Home from './Home.js'
import Search from './Search.js'
import Register from './Register.js'


const App = () => {
 return(
  <div>
    <Routes>
        <Route path='*' element={<h1>404 not found</h1>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>} />
        <Route path='logout' element={<Logout/>} />
        <Route path='register' element={<Register/>} />
    </Routes>
  </div>
 )
};


export default App;

