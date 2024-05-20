import { Outlet } from "react-router-dom"

import Header from "./header/Header"
import ContentBox from "../../hoc/ContentBox"

function Container() {
    return(
        <div className="flex flex-col font-inter">
            <Header />
            <div>
                <ContentBox>
                    <Outlet />
                </ContentBox>
            </div>
        </div>
    )
}

export default Container