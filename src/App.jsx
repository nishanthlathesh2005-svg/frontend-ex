import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Robi from './Components/Robi'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Lock from './Components/Lock'
import Button from '@mui/material/Button'
import Dew from './Pages/Dew'
import Form from './Components/Form'
import Add from './Pages/Add'
import { ToastContainer, toast } from 'react-toastify';
import { Edit } from '@mui/icons-material'
import EditForm from './Pages/EditForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
      <ToastContainer />
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dew/>}></Route>
      <Route path="/add" element={<Add/>}></Route>
      <Route path="/edit/:id" element={<EditForm/>}></Route>
      
      </Routes>
      </BrowserRouter>
        </div>
        
    </>
  )
}

export default App
