import { createContext, useState } from "react";
import Header from "./Compnonet/header/header";

import Footer from "./Compnonet/footer/footer";
import Section from "./Compnonet/section/section";
export const GlobalHearts = createContext()

const Home = () => {
    const [heartConter, setHeartConter] = useState(0)
    return(
        <GlobalHearts.Provider value = {{heartConter, setHeartConter}}> 
        
            <Header />
            <Section />
            <Footer />  
        </GlobalHearts.Provider>
    )
}

export default Home ;