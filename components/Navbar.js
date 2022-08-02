import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = (props) => {
    const router = useRouter();

    const initialNavigation = [
        { id: 1, name: 'Home', ref: props.refs.myRefs.home, href:'/', current: true },
        { id: 2, name: 'About', ref: props.refs.myRefs.about, href:'/#about', current: false },
        { id: 3, name: 'Experience', ref: props.refs.myRefs.experience, href:'/#experience', current: false },
        { id: 4, name: 'Skills', ref: props.refs.myRefs.skills, href:'/#skills', current: false },
        { id: 5, name: 'Projects', ref: props.refs.myRefs.projects, href:'/#projects', current: false },
        { id: 6, name: 'Contact Me', ref: props.refs.myRefs.contact, href:'/#contact', current: false },
    ]
      
    const classNames = (...classes) => {
      return classes.filter(Boolean).join(' ')
    }

    const [navigation, setNavigation] = useState(initialNavigation);

    const updateCurrentNavItem = (item) => {
        const newNav = navigation.map(obj => {
            if (obj.id === item.id) {
              return {...obj, current: true};
            } else if (obj.id !== item.id) {
                return {...obj, current: false};
            }

            return obj;
    });
  
    setNavigation(newNav);
    };

    const executeScroll = (item) => {
        try{
            item.ref.current.scrollIntoView({behavior: 'smooth'})
        } catch {
            router.push(item.href)
        }
    }

    const navigateOnClick = (item) => {
        updateCurrentNavItem(item)
        executeScroll(item)
    }

    return (
      <Disclosure as='nav' className='bg-gray-800 w-full fixed top-0 z-50'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
              <div className='relative sm:flex sm:items-center sm:justify-between h-20 p-4 justify-center'>
                  <div className='relative items-center float-left w-16 sm:float-left sm:absolute' onClick={() => navigateOnClick(initialNavigation[0])}>
                    <Link href='/'>
                        <img
                            className='block cursor-pointer'
                            src='./media/doubleU.png'
                            alt='Workflow'
                        />
                    </Link>
                  </div>
                  <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                    {/* Mobile menu button*/}
                    <Disclosure.Button className='inline-sm:flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                        <span className='sr-only'>Open main menu</span>
                        {open ? (
                          <XIcon className='block h-6 w-6' aria-hidden='true' />
                        ) : (
                          <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                        )}
                    </Disclosure.Button>
                  </div>
                  <div className='flex-1 items-center justify-center sm:flex sm:items-stretch'>
                    <div className='hidden sm:block sm:ml-6'>
                      <div className='sm:flex items-center justify-center py-2'>
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            // href={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium m-2 cursor-pointer'
                            )}
                            onClick={() => 
                                navigateOnClick(item)
                            }
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
              </div>
            </div>             
            <Disclosure.Panel className='sm:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    // href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    onClick={() => 
                        navigateOnClick(item)
                    }
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
}

export default NavBar