import './App.css'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Validation from './Compnonet/auth/auth'
import Home from './Home'
import PanelAdmin from './Compnonet/panelAdmin'
import Logout from './Compnonet/panelAdmin/logout'
import UsersPanelAdmin from './Compnonet/panelAdmin/users'
import CreateUsers from './Compnonet/panelAdmin/users/create'
import EditUsers from './Compnonet/panelAdmin/users/edit'

function App() {
  return (
    
    <BrowserRouter> 
      <Routes>
        <Route path = "/" element = {<Home />} ></Route>
        <Route path = "/home" element = {<Home />} ></Route>
        <Route path = "/validation" element = {<Validation />} ></Route>
        <Route path = "/PanelAdmin" element = {<PanelAdmin />} ></Route>
        <Route path = "/LogOut" element = {<Logout />} ></Route>
        <Route path = "/PanelAdmin/UsersPanelAdmin" element = {<UsersPanelAdmin />} ></Route>
        <Route path = "/PanelAdmin/createuser" element = {<CreateUsers />} ></Route>
        <Route path = "/PanelAdmin/users/editUser/:id/edit" element = {<EditUsers />} ></Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App

// https://www.youtube.com/watch?v=dOkkHHuFxjM
//https://www.youtube.com/watch?v=NqzdVN2tyvQ