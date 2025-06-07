 import {BrowserRouter,Routes,Route} from 'react-router-dom'
//  import Create from "./create.jsx"
//  import Login from "./login.jsx"
 import Login from './login'
import Create from './create'
import Empty from './empty'
import Text from "./text"
 import './App.css'


function App() {
  return(
     <BrowserRouter>
         <Routes>
          <Route path='/create' element={<Create />}/>
          <Route  path='*' element={<Login />}/>
          <Route path='/empty' element={<Empty />}/>
          <Route path='text' element={<Text />}/>
         </Routes>
     </BrowserRouter>
  

  )
}


export default App
