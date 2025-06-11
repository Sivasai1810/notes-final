 import {BrowserRouter,Routes,Route} from 'react-router-dom'
//  import Create from "./create.jsx"
//  import Login from "./login.jsx"
 import Login from './login'
import Create from './create'
import Empty from './empty'
import Text from "./text"
import Edit from "./edit"
import Entry from './entry'
 import './App.css'


function App() {
  return(
     <BrowserRouter>
         <Routes>
          <Route path='/create' element={<Create />}/>
          <Route  path='/login' element={<Login />}/>
          <Route path='/empty' element={<Empty />}/>
          <Route path='text' element={<Text />}/>
          <Route path='/Edit' element={<Edit />}/>
          <Route path='/*' element={<Entry />} />
         </Routes>
     </BrowserRouter>
  

  )
}


export default App
