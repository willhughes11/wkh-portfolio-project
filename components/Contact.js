import Link from 'next/link';

const Contact = (props) => {
    return (
        <section id='contact' className='scroll-m-10 mx-2' ref={props.contactRef}>
            <div className='container p-0 flex flex-col justify-center min-h-screen w-full lg:w-9/12 lg:mx-auto'>
                <hgroup className='relative py-8 text-center'>
                    <h1 className='p-2 m-2 text-4xl font-thin md:tracking-widest md:text-6xl'> Contact Me </h1>
                    <hr />
                </hgroup>
                <div className='flex justify-center'>
                    <div className='py-8 text-center items-center max-w-2xl'>
                        <div className='mx-10 text-l font-medium md:text-xl'>
                            <p>
                                I am actively looking for new remote work and I am ready to interview in the next 30 days.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link href={`mailto:willhughes2110@gmail.com`}>
                        <button className='border-white text-white border-4 p-3 rounded-lg m-4 transition ease-in-out hover:bg-white hover:border-transparent hover:text-black'> 
                            <a> Reach Out </a>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Contact