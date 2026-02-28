import './App.css'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Validation from './Compnonet/auth/auth'
import Home from './Home'
import PanelAdmin from './Compnonet/panelAdmin'
import Logout from './Compnonet/panelAdmin/logout'
import UsersPanelAdmin from './Compnonet/panelAdmin/users'
import CreateUsers from './Compnonet/panelAdmin/users/create'
import EditUsers from './Compnonet/panelAdmin/users/edit'
import MenuHeaderPanelAdmin from './Compnonet/panelAdmin/megaMenus/menus'
import CreateMenuHeaders from './Compnonet/panelAdmin/megaMenus/menus/create'
import EditMenuHeaders from './Compnonet/panelAdmin/megaMenus/menus/edit'

function App() {
  return (
    
    <BrowserRouter> 
      <Routes>
        <Route path = "/" element = {<Home />} ></Route>
        <Route path = "/home" element = {<Home />} ></Route>
        <Route path = "/validation" element = {<Validation />} ></Route>

        {/* panelAdmin */}
        <Route path = "/PanelAdmin" element = {<PanelAdmin />} ></Route>
        <Route path = "/LogOut" element = {<Logout />} ></Route>
        <Route path = "/PanelAdmin/UsersPanelAdmin" element = {<UsersPanelAdmin />} ></Route>
        <Route path = "/PanelAdmin/createuser" element = {<CreateUsers />} ></Route>
        <Route path = "/PanelAdmin/users/editUser/:id/edit" element = {<EditUsers />} ></Route>
        <Route path = "/PanelAdmin/header/menus" element = {<MenuHeaderPanelAdmin />} ></Route>
        <Route path = "/PanelAdmin/header/AddMenu" element = {<CreateMenuHeaders />} ></Route>
        <Route path = "/PanelAdmin/header/EditMenu/:id/edit" element = {<EditMenuHeaders />} ></Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App

// https://www.youtube.com/watch?v=dOkkHHuFxjM
//https://www.youtube.com/watch?v=NqzdVN2tyvQ