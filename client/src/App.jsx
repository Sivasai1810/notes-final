 import {BrowserRouter,Routes,Route} from 'react-router-dom'
//  import Create from "./create.jsx"
//  import Login from "./login.jsx"
 import Login from './login'
import Create from './create'
import Empty from './empty'
 import './App.css'


function App() {
console.log('Create:', Create);
console.log('Login:', Login);

  return(
     <BrowserRouter>
         <Routes>
          <Route path='/create' element={<Create />}/>
          <Route  path='*' element={<Login />}/>
          <Route path='/empty' element={<Empty />}/>
          
         </Routes>
     </BrowserRouter>
  

  )
}


export default App
