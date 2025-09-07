import './App.css'
import Header from './Compnonet/header'
import Section from './Compnonet/section'
import { createContext, useEffect, useState } from 'react';


export const GlobalHeaderScroll = createContext();


function App() {
  const [scrollTop, setScrollTop]  =  useState(0);
    const handleScroll = () => {
        setScrollTop(window.scrollY);
    }
   
    useEffect(() => {
       
        window.addEventListener('scroll', handleScroll)
 
        return() => {
            window.addEventListener("scroll", handleScroll);
            
        }
    },[])


  return (
    <GlobalHeaderScroll.Provider value = {{scrollTop, setScrollTop}} >
      <div className='h-[2000px] bg-red-500'>
        <Header />
        <Section />
      </div>
    </ GlobalHeaderScroll.Provider>

  )
}

export default App

// https://www.youtube.com/watch?v=dOkkHHuFxjM
//https://www.youtube.com/watch?v=NqzdVN2tyvQ