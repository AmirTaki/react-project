import { createContext, useState } from 'react'
import './App.css'

import Header from "./Compnonet/header/header"
import Test from './Compnonet/header/test'
import Section from './Compnonet/section/section'
import Footer from './Compnonet/footer/footer'
import { BrowserRouter } from 'react-router-dom'



export const GlobalHearts = createContext()

function App() {
  const [heartConter, setHeartConter] = useState(0)
  
  return (
    // <Test />
    <BrowserRouter>
      <GlobalHearts.Provider value = {{heartConter, setHeartConter}}>
        <div className=''>
          <Header />
          <Section />
          <Footer />
        </div>
      </GlobalHearts.Provider>
    </BrowserRouter>
  
  )
}

export default App

// https://www.youtube.com/watch?v=dOkkHHuFxjM
//https://www.youtube.com/watch?v=NqzdVN2tyvQ