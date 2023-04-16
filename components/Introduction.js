const Introduction = (props) => {
    return (
        <section id='home' className='scroll-m-10 mx-2' ref={props.homeRef}>
            <div className='container p-0 min-h-screen flex flex-col justify-center mx-2 md:mx-auto'>
                <hgroup className='relative py-8 text-center'>
                    <h1 className='p-0 m-0 text-6xl font-thin md:tracking-widest md:text-8xl'>William Hughes</h1>
                    <h2 className='p-0 m-0 text-xl font-medium md:text-2xl'>Developer</h2>
                </hgroup>
                <div className='relative py-8 flex justify-center'>
                    <div className='max-w-xl text-l font-medium md:max-w-2xl md:text-xl'>
                        <p>
                            I am a software engineer with a focus on backend engineering but have experience with web and mobile development, artificial intelligence, and data science. 
                        </p>
                        <br />
                        <p>
                            Currently, focused on gaining more development experience through part-time freelance work outside of my full-time position as a software engineer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction