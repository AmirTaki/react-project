import { createContext, useState } from 'react'
import './App.css'

import Header from "./Compnonet/header/header"
import Test from './Compnonet/header/test'
import Section from './Compnonet/section/section'



export const GlobalHearts = createContext()

function App() {
  const [heartConter, setHeartConter] = useState(0)
  
  return (
    // <Test />
    <GlobalHearts.Provider value = {{heartConter, setHeartConter}}>
      <div className='h-[2000px] bg-red-100'>
        <Header />
        <Section />
      </div>
    </GlobalHearts.Provider>
  
  )
}

export default App

// https://www.youtube.com/watch?v=dOkkHHuFxjM
//https://www.youtube.com/watch?v=NqzdVN2tyvQ