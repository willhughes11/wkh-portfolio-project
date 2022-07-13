import Head from 'next/head';
import React, { Component } from 'react';
import About from '../components/About';
import Introduction from '../components/Introduction';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Experience from '../components/Experience';

class Home extends Component {
    render() {
        return (
            <div className='home-page'>
                <Head>
                    <title>William Hughes</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <main className='w-full min-h-screen'>
                    <Introduction />
                    <About />
                    <Experience />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
            </div>
        )
    }
}

export default Home