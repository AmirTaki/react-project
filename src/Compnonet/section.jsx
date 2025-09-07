import { useContext } from "react";
import { GlobalHeaderScroll } from "./header";



const Section = () => {
    const {scrollTop} = useContext(GlobalHeaderScroll)
    return(
        <>
            <div className = {`${} bg-blue-500 mt-15"`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit delectus ea eius obcaecati nihil, similique aliquam, molestiae quaerat quo nemo soluta commodi exercitationem repellat deserunt eaque est! Fugiat, voluptas iusto.
            </div>
        </>
    )
}

export default Section;