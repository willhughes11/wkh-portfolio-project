import { useRef } from 'react'
import Layout1 from '../components/layouts/Layout1'
import Layout2 from '../components/layouts/Layout2'
import '../styles/globals.css'
const layouts = {
    L1: Layout1,
    L2: Layout2,
  };

function App({ Component, pageProps }) {
    const myRefs = {
        home: useRef('home'),
        about: useRef('about'),
        experience: useRef('experience'),
        skills: useRef('skills'),
        projects: useRef('projects'),
        contact: useRef('contact-us')
    }
    const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
    return (
      <Layout myRefs={myRefs}>
        <Component {...pageProps} myRefs={myRefs}/>
      </Layout>
    );
}

export default App