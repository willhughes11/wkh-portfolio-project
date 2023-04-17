import { useRef } from 'react';
import Layout1 from '../components/layouts/Layout1';
import Layout2 from '../components/layouts/Layout2';
import '../styles/globals.css';
import '../styles/style.css'

const layouts = {
    L1: Layout1,
    L2: Layout2,
};

const App = ({ Component, pageProps }) => {
    const myRefs = {
        home: useRef('home'),
        about: useRef('about'),
        experience: useRef('experience'),
        skills: useRef('skills'),
        projects: useRef('projects'),
        contact: useRef('contact-us')
    }
    
    const Layout = layouts[Component.layout] || ((children) => <>{console.log(children)}</>);
    return (
      <Layout myRefs={myRefs} repository={pageProps.repository}>
        <Component {...pageProps} myRefs={myRefs}/>
      </Layout>
    );
}

export default App