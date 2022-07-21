const Projects = (props) => {
    const ProjectOneTech = ['AWS','Python','PostgreSQL','MongoDB','Node.js','Express','React','Stripe']
    const ProjectTwoTech = []
    return (
        <section id='projects' className='scroll-m-16' ref={props.projectsRef}>
            <div className='container p-0 flex flex-col justify-center min-h-screen w-full lg:w-9/12 lg:mx-auto'>
                <hgroup className='relative py-8 text-center'>
                    <h1 className='p-2 m-2 text-4xl font-thin md:tracking-widest md:text-6xl'> Projects </h1>
                    <hr />
                </hgroup>
                <div className='w-full flex flex-col px-2 py-2 sm:px-0'>

                    <div className='flex items-center justify-center'>

                        <div className='float-left m-2 w-4/12 md:w-1/2 2xl:w-1/4'>
                            <hgroup className='relative py-8'>
                                <h1 className='text-lg font-thin tracking-tightest md:text-xl'> Featured Project </h1>
                                <h1 className='text-xl tracking-tightest hover:underline md:text-2xl' style={{cursor: 'pointer'}}> 
                                    <a href='https://app.beta.flipthepips.com/'> Flip The Pips App </a>
                                </h1>
                            </hgroup>
                            <div className='bg-white p-6 shadow-lg block'>
                                Flip the Pips LLC is a social trading and forex investment company that focuses on
                                providing financial consultancy and trade copying services. This web app allows
                                users to sign up, pay for services, monitor account performance, and update their 
                                account and subscription settings. I assumed the responsibilities of a Full Stack Developer, 
                                Data Engineer, and Cloud Engineer.
                            </div>
                        </div>

                        <div className='float-right m-2 w-8/12 md:w-1/2 2xl:w-1/2'>
                            <div className='shadow-lg block'>
                                <img
                                    src='./screenshots/flipThePipsAppSC.png'
                                    className='w-full h-full'
                                />
                            </div>
                            <div className='m-2'>
                                {ProjectOneTech.map((value,index) => (
                                    <span key={`tech-${index}`} className='px-2 font-thin tracking-tighter 2xl:text-lg'>{value}</span>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* <div className='flex items-center justify-center my-10'>


                        <div className='float-right m-2 w-8/12 md:w-1/2 2xl:w-1/2'>
                            <div className='shadow-lg block bg-white'>
                                <img
                                    src='./screenshots/tbd.png'
                                    alt='TBD'
                                    className='w-full h-full'
                                />
                            </div>
                            <div className='m-2'>
                                {ProjectTwoTech.map((value,index) => (
                                    <span key={`tech-${index}`} className='px-2 font-thin tracking-tighter 2xl:text-lg'>{value}</span>
                                ))}
                            </div>
                        </div>

                        <div className='float-left m-2 w-4/12 md:w-1/2 2xl:w-1/4'>
                            <hgroup className='relative py-8'>
                                <h1 className='text-lg font-thin tracking-tightest md:text-xl'> Featured Project </h1>
                                <h1 className='text-xl tracking-tightest hover:underline md:text-2xl' style={{cursor: 'pointer'}}> 
                                    <a href=''> TBD </a>
                                </h1>
                            </hgroup>
                            <div className='bg-white p-6 shadow-lg block'>
                                TBD
                            </div>
                        </div>
                                
                    </div> */}
                    <hgroup className='relative py-8 text-center'>
                        <h1 className='p-2 m-2 text-2xl font-thin md:tracking-widest md:text-4xl'> Other Notable Projects </h1>
                        <hr />
                    </hgroup>
                </div>
            </div>
        </section>
    )
}

export default Projects