import { useEffect } from 'react';
import './App.css'
import Header from './Compnonet/header'
import Section from './Compnonet/section'

function App() {
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className='h-[2000px] bg-red-500'>
      <Header />
      <Section />
    </div>
  )
}

export default App

// https://www.youtube.com/watch?v=dOkkHHuFxjM
//https://www.youtube.com/watch?v=NqzdVN2tyvQ
