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
import EditMegaMenuSeries from './Compnonet/panelAdmin/megaMenus/menuSeries/edit'
import MegaMenuImagePanelAdmin from './Compnonet/panelAdmin/megaMenus/menuImage'
import CreateMegaMenuImage from './Compnonet/panelAdmin/megaMenus/menuImage/create'
import EditMegaMenuImage from './Compnonet/panelAdmin/megaMenus/menuImage/edit'
import BackGroundSliderPanelAdmin from './Compnonet/panelAdmin/session/backGroundSlider'
import CreateSessionBackGroundSlider from './Compnonet/panelAdmin/session/backGroundSlider/create'
import EditSessionBackGroundSlider from './Compnonet/panelAdmin/session/backGroundSlider/edit'
import ScrollSliderPanelAdmin from './Compnonet/panelAdmin/session/scrollSlider'
import CreateSessionScrollSlider from './Compnonet/panelAdmin/session/scrollSlider/create'
import EditSessionScrollSlider from './Compnonet/panelAdmin/session/scrollSlider/edit'
import GridImagePanelAdmin from './Compnonet/panelAdmin/session/gridImage'
import CreateSessionGridImage from './Compnonet/panelAdmin/session/gridImage/create'
import EditSessionGridBox from './Compnonet/panelAdmin/session/gridImage/edit'
import SliderPagePaneAdmin from './Compnonet/panelAdmin/session/sliderPage'
import CreateSessionSliderPage from './Compnonet/panelAdmin/session/sliderPage/create'
import EditSessionSliderPage from './Compnonet/panelAdmin/session/sliderPage/edit'
import ImageAdvertPanelAdmin from './Compnonet/panelAdmin/session/imageAdvert'
import CreateSessionImageAdvert from './Compnonet/panelAdmin/session/imageAdvert/create'
import EditSessionImageAdvert from './Compnonet/panelAdmin/session/imageAdvert/edit'

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
        <Route path = "/panelAdmin/megaMenu/EditSeries/:id/edit" element = {<EditMegaMenuSeries />}></Route>

        {/* panelAdmin -> megaMenu => image */}
        <Route path = "/panelAdmin/megaMenu/image" element = {<MegaMenuImagePanelAdmin />}></Route>
        <Route path = "/panelAdmin/megaMenu/AddImage" element = {<CreateMegaMenuImage />}></Route>
        <Route path = "/panelAdmin/megaMenu/EditImage/:id/edit" element = {<EditMegaMenuImage />}></Route>

        {/* panelAdmin -> session => backGroundSlider */}
        <Route path = "/panelAdmin/session/backgroundslider" element = {<BackGroundSliderPanelAdmin />}></Route>
        <Route path = "/panelAdmin/session/AddBackGroundSlider" element = {<CreateSessionBackGroundSlider />}></Route>
        <Route path = "/panelAdmin/session/EditBackGroundSlider/:id/edit" element = {<EditSessionBackGroundSlider />}></Route>

        {/* panelAdmin -> session -> scrollSlider */}
        <Route path = "/panelAdmin/session/scrollSlider" element = {<ScrollSliderPanelAdmin />}></Route>
        <Route path = "/panelAdmin/session/AddBoxSlider" element = {<CreateSessionScrollSlider />}/>
        <Route path = "/panelAdmin/session/EditBoxSlider/:id/edit" element = {<EditSessionScrollSlider />}/>

        {/* panelAdmin -> session -> GridImage */}
        <Route path='/panelAdmin/session/gridImage' element = {<GridImagePanelAdmin />} ></Route>
        <Route path='/panelAdmin/session/AddBoxGridImage' element = {<CreateSessionGridImage />} ></Route>
        <Route path='/panelAdmin/session/EditBoxGridImage/:id/edit' element = {<EditSessionGridBox />} ></Route>
     
        {/* panelAdmin -> session -> SliderPage */}
        <Route path='/panelAdmin/session/SliderPage' element = {<SliderPagePaneAdmin />} ></Route>
        <Route path='/panelAdmin/session/AddBoxSliderPage' element = {<CreateSessionSliderPage />} ></Route>
        <Route path='/panelAdmin/session/EditBoxSliderPage/:id/edit' element = {<EditSessionSliderPage />} ></Route>
      
        {/* panelAdmin -> session -> ImageAdvert */}
        <Route path='/panelAdmin/session/ImageAdvert' element = {<ImageAdvertPanelAdmin />} ></Route>
        <Route path='/panelAdmin/session/AddImageAdvert' element = {<CreateSessionImageAdvert />} ></Route>
        <Route path='/panelAdmin/session/EditImageAdvert/:id/edit' element = {<EditSessionImageAdvert />} ></Route>


      </Routes>
    </BrowserRouter>
  
  )
}

export default App

// https://www.youtube.com/watch?v=dOkkHHuFxjM
//https://www.youtube.com/watch?v=NqzdVN2tyvQ