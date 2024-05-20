import { Outlet } from "react-router-dom"

import Header from "./header/Header"
import ContentBox from "../../hoc/ContentBox"
import { Toaster } from "../ui/toaster"

function Container() {
    return(
        <div className="flex flex-col font-inter">
            <Header />
            <div>
                <ContentBox>
                    <Outlet />
                </ContentBox>
            </div>
            <Toaster />
        </div>
    )
}

export default Container