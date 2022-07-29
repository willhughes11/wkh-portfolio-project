import { Disclosure } from '@headlessui/react';

const Footer = () => {
    return (
        <Disclosure as='footer' className='bg-gray-800'>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative sm:flex sm:items-center sm:justify-between min-h-16 p-4 justify-center'>
                    <div className='flex-1 justify-between sm:flex sm:items-center'>
                        <div className='text-white flex justify-center'>
                            <span> © William K Hughes 2022. All rights reserved. </span>
                        </div>
                        <div className='items-center flex justify-center sm:justify-between'>
                            <a href='https://www.linkedin.com/in/williamhughes11/' target={'_blank'}>
                                <img width={30} src='./media/linkedin.png' alt='LinkedIn Account' />
                            </a>
                            <a href='https://github.com/willhughes11' target={'_blank'} className='px-3'>
                                <img width={35} src='./media/github.png' alt='GitHub Account'/>
                            </a>
                            <a href='https://app.gun.io/app/freelancer/c6944b50-0dfe-4147-b0c0-e3e6269bcd41/' target={'_blank'}>
                                <img width={40} src='./media/gun.io.png' alt='Gun.io Freelancer Account'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>
    )
}

export default Footer