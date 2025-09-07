import { useContext } from "react";




const Section = () => {
    // const {scrollTop} = useContext(GlobalHeaderScroll)
    return(
        <>
            <div className = {`${scrollTop ? "" : ""} bg-blue-500 mt-15"`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit delectus ea eius obcaecati nihil, similique aliquam, molestiae quaerat quo nemo soluta commodi exercitationem repellat deserunt eaque est! Fugiat, voluptas iusto.
            </div>
        </>
    )
}

export default Section;