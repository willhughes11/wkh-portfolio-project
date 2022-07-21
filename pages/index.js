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
            <div className='app'>
                <Head>
                    <title>William Hughes</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <main className='w-full min-h-screen bg-slate-200'>
                    <Introduction homeRef={this.props.myRefs.home}/>
                    <About aboutRef={this.props.myRefs.about}/>
                    <Experience experienceRef={this.props.myRefs.experience}/>
                    <Skills skillsRef={this.props.myRefs.skills}/>
                    <Projects projectsRef={this.props.myRefs.projects}/>
                    <Contact contactRef={this.props.myRefs.contact}/>
                </main>
            </div>
        )
    }
}

export default Home