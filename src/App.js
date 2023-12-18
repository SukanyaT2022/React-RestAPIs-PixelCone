import { Routes,Route } from 'react-router-dom';
import Login from './Login'
import Logout from './Logout'
import Home from './Home.js'
import Search from './Search.js'

const App = () => {
 return(
  <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>} />
        <Route path='logout' element={<Logout/>} />
    </Routes>
  </div>
 )
};


export default App;

