import { useRef } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'


function App({ Component, pageProps }) {
    const myRefs = {
        home: useRef('home'),
        about: useRef('about'),
        experience: useRef('experience'),
        skills: useRef('skills'),
        projects: useRef('projects'),
        contact: useRef('contact-us')
    }
    return (
        <Layout myRefs={myRefs}>
            <Component {...pageProps} myRefs={myRefs}/>
        </Layout>
    )
}

export default App