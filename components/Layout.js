import Footer from './Footer'
import NavBar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className='content w-full scroll-smooth'>
            <NavBar refs={children.props}/>
            { children }
            <Footer />
        </div>
    )
}

export default Layout