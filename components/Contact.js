import Link from 'next/link';

const Contact = (props) => {
    return (
        <section id='contact' ref={props.contactRef}>
            <div className='container p-0 flex flex-col justify-center min-h-screen w-full lg:w-9/12 lg:mx-auto'>
                <hgroup className='relative py-8 text-center'>
                    <h1 className='p-2 m-2 text-4xl font-thin md:tracking-widest md:text-6xl'> Contact Me </h1>
                    <hr />
                </hgroup>
                <div className='flex justify-center'>
                    <div className='py-8 text-center items-center max-w-2xl'>
                        <div className='mx-10 text-l font-medium md:text-xl'>
                            <p>
                            Currently, I am looking for part-time roles. 
                            Open to work 10-20 hours per week outside of standard working hours, 
                            between the times of 5 PM-11 PM ET.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link href={`mailto:willhughes2110@gmail.com`}>
                        <button className='border-gray-800 text-gray-800 border-4 p-3 rounded-lg m-4 transition ease-in-out hover:bg-gray-800 hover:border-transparent hover:text-white'> 
                            <a> Reach Out </a>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Contact