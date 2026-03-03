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
import MegaMenuListPanelAdmin from './Compnonet/panelAdmin/megaMenus/menuList'
import CreateMegaMenuList from './Compnonet/panelAdmin/megaMenus/menuList/create'
import EditMegaMenuList from './Compnonet/panelAdmin/megaMenus/menuList/edit'
import MegaMenuCategoryPanelAdmin from './Compnonet/panelAdmin/megaMenus/menuCategorty'
import CreateMegaMenuCategory from './Compnonet/panelAdmin/megaMenus/menuCategorty/create'
import EditMegaMenuCategory from './Compnonet/panelAdmin/megaMenus/menuCategorty/edit'
import MegaMenuSeriesPanelAdmin from './Compnonet/panelAdmin/megaMenus/menuSeries'
import CreateMegaMenuSeries from './Compnonet/panelAdmin/megaMenus/menuSeries/create'

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
        {/* panelAdmin -> user */}
        <Route path = "/PanelAdmin/UsersPanelAdmin" element = {<UsersPanelAdmin />} ></Route>
        <Route path = "/PanelAdmin/createuser" element = {<CreateUsers />} ></Route>
        <Route path = "/PanelAdmin/users/editUser/:id/edit" element = {<EditUsers />} ></Route>

        {/* panelAdmin -> HEADRE : menu */}
        <Route path = "/PanelAdmin/header/menus" element = {<MenuHeaderPanelAdmin />} ></Route>
        <Route path = "/PanelAdmin/header/AddMenu" element = {<CreateMenuHeaders />} ></Route>
        <Route path = "/PanelAdmin/header/EditMenu/:id/edit" element = {<EditMenuHeaders />} ></Route>
     
        {/* panelAdmin -> megaMnue => list */}
        <Route path = "/panelAdmin/megaMenu/list" element = {<MegaMenuListPanelAdmin />}></Route>
        <Route path = "/panelAdmin/megaMenu/AddList" element = {<CreateMegaMenuList />}></Route>
        <Route path = "/panelAdmin/megaMenu/EditList/:id/edit" element = {<EditMegaMenuList />}></Route>

        {/* panelAdmin -> megaMenu => category */}
        <Route path = "/panelAdmin/megaMenu/category" element = {<MegaMenuCategoryPanelAdmin />}></Route>
        <Route path = "/panelAdmin/megaMenu/AddCategory" element = {<CreateMegaMenuCategory />}></Route>
        <Route path = "/panelAdmin/megaMenu/EditCategory/:id/edit" element = {<EditMegaMenuCategory />}></Route>

        {/* panelAdmin -> megaMenu => series  */}
        <Route path = "/panelAdmin/megaMenu/series" element = {<MegaMenuSeriesPanelAdmin />}></Route>
        <Route path = "/panelAdmin/megaMenu/AddSeries" element = {<CreateMegaMenuSeries />}></Route>

      </Routes>
    </BrowserRouter>
  
  )
}

export default App

// https://www.youtube.com/watch?v=dOkkHHuFxjM
//https://www.youtube.com/watch?v=NqzdVN2tyvQ