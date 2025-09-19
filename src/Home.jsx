import { createContext, useState } from "react";
import Header from "./Compnonet/header/header";
import Section from "./Compnonet/header/test";
import Footer from "./Compnonet/footer/footer";
export const GlobalHearts = createContext()

const Home = () => {
    const [heartConter, setHeartConter] = useState(0)
    return(
        <>
            <Header />
            <Section />
            <Footer />  
        </>
    )
}

export default Home ;