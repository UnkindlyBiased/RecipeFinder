import { Link } from "react-router-dom"

function Header(): React.ReactElement {
    return (
        <header className="w-full h-16 sticky top-0 bg-[#e6d0cb] flex justify-between items-center px-6">
            <Link to='/' className="font-medium text-xl cursor-pointer">
                Recipe Finder
            </Link>
            <button>Add</button>
        </header>
    )
}

export default Header