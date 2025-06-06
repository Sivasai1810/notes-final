import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import App from './App.jsx'
// import Login from './login'
// import Create from './create'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
 {/* <Login />
 <Create /> */}
 <App />
  </StrictMode>
)
