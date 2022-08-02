import { Disclosure } from '@headlessui/react';
import {RepoForkedIcon, StarIcon} from '@primer/octicons-react';

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
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative sm:flex sm:items-center sm:justify-between min-h-16 p-4 justify-center'>
                    <div className='flex-1 justify-between sm:flex sm:items-center'>
                        <div className='text-white flex flex-nowrap justify-center max-w-[12rem]'>
                            <span> © William K Hughes 2022. All rights reserved. </span>
                        </div>
                        <div className='text-white hover:text-slate-500 cursor-pointer'>
                        <a href='https://github.com/willhughes11/wkh-portfolio-project' target={'_blank'}>
                            <div>
                                <span>Created by William K Hughes</span>
                            </div>
                            <div className='flex justify-center'>
                                <div className='flex mx-2'>
                                    <span>{forkCount}</span>
                                    <div className='items-center mx-1'>
                                        <RepoForkedIcon size={18}/>
                                    </div>
                                </div>
                                <div className='flex mx-2'>
                                    <span>{stargazerCount}</span>
                                    <div className='items-center mx-1'>
                                        <StarIcon size={18}/>
                                    </div>
                                </div>
                            </div>
                            </a>
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