import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router'

const ProjectNav = () => {
    const router = useRouter()
    return(
        <Disclosure as='nav' className='bg-gray-800 w-full top-0 z-50'>
            <div className='mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative sm:flex sm:items-center sm:justify-between h-20 p-4 justify-center'>
                    <div className='flex items-center align-middle float-left w-16 cursor-pointer' onClick={() => router.back()}>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
                        </svg>
                        <span className='text-white flex text-lg hover:underline'> Back </span>
                    </div>
              </div>
            </div>
        </Disclosure>
    )
}

export default ProjectNav