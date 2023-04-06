import Link from 'next/link';

const Projects = (props) => {
    const ProjectOneTech = ['AWS','Python','PostgreSQL','MongoDB','Node.js','Express','React','Stripe']
    const ProjectTwoTech = ['Python','Jupyter Notebook','Flask','TensorFlow','Selenium']
    return (
        <section id='projects' className='scroll-m-10' ref={props.projectsRef}>
            <div className='container p-0 flex flex-col justify-center min-h-screen w-full lg:w-9/12 lg:mx-auto'>
                <hgroup className='relative py-8 text-center'>
                    <h1 className='p-2 m-2 text-4xl font-thin md:tracking-widest md:text-6xl'> Projects </h1>
                    <hr />
                </hgroup>
                <div className='w-full flex flex-col px-2 py-2 sm:px-0'>

                    <div className='items-center lg:flex lg:justify-center'>
                        <div className='m-2 w-full lg:float-left lg:w-1/2 xl:w-4/12 2xl:w-1/4'>
                            <hgroup className='relative py-8'>
                                <h1 className='text-lg font-thin tracking-tightest md:text-xl'> Featured Project </h1>
                                <h1 className='text-xl tracking-tightest cursor-pointer hover:underline md:text-2xl'> 
                                    <a href='https://app.beta.flipthepips.com/'> Flip The Pips App </a>
                                </h1>
                            </hgroup>
                            <div>
                                <div className='bg-transparent lg:bg-white p-4 lg:p-6 shadow-lg absolute lg:relative h-96 lg:h-fit text-sm xl:text-base'>
                                    <div>
                                        <p>
                                            Flip the Pips LLC is a social trading and forex investment company that focuses on
                                            providing financial consultancy and trade copying services. This web app allows
                                            users to sign up, pay for services, monitor account performance, and update their 
                                            account and subscription settings. I assumed the responsibilities of a Full Stack Developer, 
                                            Data Engineer, and Cloud Engineer.
                                        </p>
                                    </div>
                                    <div className='space-x-2 my-2 flex flex-wrap w-full lg:hidden'>
                                        {ProjectOneTech.map((value,index) => (
                                            <span key={`tech-${index}`} className='font-thin tracking-tighter'>{value}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className='shadow-lg opacity-5 overflow-hidden items-center block lg:hidden'>
                                    <img
                                        src='./screenshots/flipThePipsAppSC.png'
                                        className='h-96 min-w-[48rem] overflow-hidden'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='float-right m-2 w-8/12 md:w-1/2 2xl:w-1/2 hidden lg:block'>
                            <div className='shadow-lg block'>
                                <img
                                    src='./screenshots/flipThePipsAppSC.png'
                                    className='w-full h-full'
                                />
                            </div>
                            <div className='m-2 hidden lg:block'>
                                {ProjectOneTech.map((value,index) => (
                                    <span key={`tech-${index}`} className='px-1 text-sm font-thin tracking-tighter xl:px-2 2xl:text-lg'>{value}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='items-center lg:flex lg:justify-center'>


                        <div className='float-right m-2 w-8/12 md:w-1/2 2xl:w-1/2 hidden lg:block'>
                            <div className='shadow-lg block bg-white'>
                                <img
                                    src='./screenshots/tinder-ai-auto-swiper-screenshot.png'
                                    alt='Repository Screenshot'
                                    className='w-full h-full'
                                />
                            </div>
                            <div className='m-2 hidden lg:block'>
                                {ProjectTwoTech.map((value,index) => (
                                    <span key={`tech-${index}`} className='px-1 text-sm font-thin tracking-tighter xl:px-2 2xl:text-lg'>{value}</span>
                                ))}
                            </div>
                        </div>

                        <div className='m-2 w-full lg:float-left lg:w-1/2 xl:w-4/12 2xl:w-1/4'>
                            <hgroup className='relative py-8'>
                                <h1 className='text-lg font-thin tracking-tightest md:text-xl'> Featured Project </h1>
                                <h1 className='text-xl tracking-tightest cursor-pointer hover:underline md:text-2xl'> 
                                    <a href='https://github.com/willhughes11/tinder_ai_auto_swiper'> Tinder AI Auto Swiper </a>
                                </h1>
                            </hgroup>
                            {/* <div>
                                <div className='bg-white p-6 shadow-lg block'>
                                    Two part system that implements facial recognition, attractiveness ratings and Tinder API and UI interaction to automate Tinder swipe process.
                                    <br/>
                                    API: The API accepts image URLs or Base64 encoded images, runs facial recognition on the images, picks the most frequently occurring face, 
                                    if a racial preference has been set it determines the race of the face, if a minimum rating threshold has been set it rates their attractiveness, 
                                    lastly returning the match information and decision.
                                    <br/>
                                    Bot: Signs in to Tinder, grabs potential match profile pictures, sends them to flask server, and once the server responds the bot will either swipe left or swipe right.
                                </div>
                            </div> */}
                            <div>
                                <div className='bg-transparent lg:bg-white p-4 lg:p-6 shadow-lg absolute lg:relative h-96 lg:h-fit text-sm xl:text-base'>
                                    <div>
                                        <p>
                                            <p className='hidden min-[321px]:block'>
                                                Two part system that implements facial recognition, attractiveness ratings and Tinder API and UI interaction to automate Tinder swipe process.
                                            </p>
                                            <br className='hidden min-[376px]:block'/>
                                            <p >
                                                API: The API accepts image URLs or Base64 encoded images, runs facial recognition on the images, picks the most frequently occurring face, 
                                                if a racial preference has been set it determines the race of the face, if a minimum rating threshold has been set it rates their attractiveness, 
                                                lastly returning the match information and decision.
                                            </p>
                                            <br className='hidden min-[376px]:block'/>
                                            <p>
                                                Bot: Signs in to Tinder, grabs potential match profile pictures, sends them to flask server, and once the server responds the bot will either swipe 
                                                left or swipe right.
                                            </p>
                                        </p>
                                    </div>
                                    <div className='space-x-2 my-2 flex flex-wrap w-full lg:hidden'>
                                        {ProjectOneTech.map((value,index) => (
                                            <span key={`tech-${index}`} className='font-thin tracking-tighter'>{value}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className='shadow-lg opacity-5 overflow-hidden items-center block lg:hidden '>
                                    <img
                                        src='./screenshots/tinder-ai-auto-swiper-screenshot.png'
                                        className='h-96 min-w-[48rem] overflow-hidden w-full'
                                    />
                                </div>
                            </div>

                        </div>
                                
                    </div>

                    <section id='pinned-repos'>
                        <hgroup className='relative py-8 text-center'>
                            <h1 className='p-2 m-2 text-2xl font-thin md:tracking-widest md:text-4xl'> Pinned Repos </h1>
                            <hr />
                        </hgroup>
                        <div className='flex flex-wrap items-center justify-center w-full'>
                            {props.pinnedItems.map((item,index) => (
                                <div key={`project-${index}-container`} className='bg-white p-6 shadow-lg m-3 block h-80 w-80 relative 2xl:h-[21rem] 2xl:w-[21rem]'>
                                    <h1 key={`project-${index}-title`} className='font-medium text-2xl my-4 hover:underline'>
                                        <a key={item.url} href={item.url}>
                                            {formatText(item.name)} 
                                        </a>
                                    </h1>
                                    <p key={`project-${index}-description`} className='my-4 text-sm'> {item.description} </p>
                                    <div key={`project-${index}-subtitle`} className='flex flex-wrap space-x-3 absolute bottom-0 my-4'>
                                        {item.repositoryTopics.edges.map((topic,index) => (
                                            <span key={topic.node.topic.name} className='font-extralight text-sm my-4'>{formatText(topic.node.topic.name)}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <Link href='/projects'>
                                <button className='border-gray-800 text-gray-800 border-4 p-3 rounded-lg m-4 transition ease-in-out hover:bg-gray-800 hover:border-transparent hover:text-white'> 
                                    <a> Other Projects </a>
                                </button>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

const formatText = (string) => {
    const header = capitalizeFirstLetter(string.split(/(?=[A-Z])/).join(' ').replace(/-/g, ' ').replace(/ +(?= )/g,''))

    let arr = header.split(' ')
    arr.forEach((element,index) => {
        if (element === 'Api') {
            arr[index] = element.toUpperCase()
        } else if (element === 'Ios'){
            arr[index] = 'iOS'
        } else if (element === 'Postgresql'){
                arr[index] = 'PostgreSQL'
        } else {
            arr[index] = capitalizeFirstLetter(element)
        }
    });

    return arr.join(' ')
}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Projects