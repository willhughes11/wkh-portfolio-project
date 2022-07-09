import Head from 'next/head'
import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className='home-page'>
                <Head>
                    <title>William Hughes - Home</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <main className='main-content'>
                    <div className='container mx-auto px-4'>
                        <hgroup className='relative py-8 text-center'>
                            <h1 className='p-0 m-0 text-8xl font-thin'>William Hughes</h1>
                            <h2 className='p-0 m-0 text-xl font-medium'>Full-Stack Engineer</h2>
                        </hgroup>
                        <div>
                            
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Home