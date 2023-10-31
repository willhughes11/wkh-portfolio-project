import Footer from "../Footer"
import NavBar from "../Navbar"

const Layout1 = ({ children }) => {
    return (
        <div className="content w-full scroll-smooth bg-black">
            <NavBar refs={children.props}/>
            { children }
            <Footer repository={children.props.repository}/>
        </div>
    )
}

export default Layout1