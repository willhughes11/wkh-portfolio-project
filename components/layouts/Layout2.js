import Footer from "../Footer"
import ProjectNav from "../ProjectNav"

const Layout2 = ({ children }) => {
    return (
        <div className="content w-full scroll-smooth">
            <ProjectNav refs={children.props}/>
            { children }
            <Footer repository={children.props.repository}/>
        </div>
    )
}

export default Layout2