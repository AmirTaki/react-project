import { useContext } from "react";

import { GlobalHeaderScroll } from "../App";

const Section = () => {
    const {scrollTop} = useContext(GlobalHeaderScroll)
    return(
        <div >
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit delectus ea eius obcaecati nihil, similique aliquam, molestiae quaerat quo nemo soluta commodi exercitationem repellat deserunt eaque est! Fugiat, voluptas iusto.
            </div>
        </div>
    )
}

export default Section;