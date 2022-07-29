import { Disclosure } from '@headlessui/react';
import {RepoForkedIcon} from '@primer/octicons-react'

const Footer = (props) => {
    const repository = props.repository
    let forkCount
    let stargazerCount

    if (repository !== undefined) {
        forkCount = repository.forkCount
        stargazerCount = repository.stargazerCount
    } else {
        forkCount = 0
        stargazerCount = 0
    }

    return (
        <Disclosure as='footer' className='bg-gray-800'>
            <div className='mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative sm:flex sm:items-center sm:justify-between min-h-16 p-4 justify-center'>
                    <div className='flex-1 justify-between sm:flex sm:items-center'>
                        <div className='text-white flex justify-center'>
                            <span> © William K Hughes 2022. All rights reserved. </span>
                        </div>
                        <div className='text-white'>
                            <div>
                                <span>Created by William K Hughes</span>
                            </div>
                            <div className='flex justify-center'>
                                <div className='flex mx-2'>
                                    <span>{forkCount}</span>
                                    <div className='items-center'>
                                        <svg xmlns='http://www.w3.org/2000/svg' className='pt-1 h-[1.30rem] w-[1.30rem]' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                                            <path strokeLinecap='round' strokeLinejoin='round' d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' />
                                        </svg>
                                    </div>
                                </div>
                                <div className='flex mx-2'>
                                    <span>{stargazerCount}</span>
                                    <div className='items-center'>
                                        <RepoForkedIcon />
                                    </div>
                                </div>
                            </div>
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