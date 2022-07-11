import { useState } from 'react';
import { Tab } from '@headlessui/react';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const Education = () => {
    const [education] = useState({
        'Eastern Gateway Community College': [
            {            
                id: 1,
                name: 'Business Management with Programming and Development Focus',
                degree: 'Associate of Applied Business',
                honor: 'Magna Cum Laude',
                from: 'October 2019',
                to: 'August 2021'
            }
        ],
        'Udacity': [
            {
                id: 2,
                name: 'Full Stack Web Developer',
                degree: 'Nanodegree',
                from: 'August 2020',
                to: 'September 2020'
            },
            {
                id: 3,
                name: 'iOS Developer',
                degree: 'Nanodegree',
                from: 'September 2020',
                to: 'November 2020'
            },
            {
                id: 4,
                name: 'AI Programming with Python',
                degree: 'Nanodegree',
                from: 'October 2020',
                to: 'October 2020'
            },
            {
                id: 5,
                name: 'Artificial Intelligence for Trading',
                degree: 'Nanodegree',
                from: 'November 2020',
                to: 'December 2020'
            },
            {
                id: 6,
                name: 'Android Kotlin Developer',
                degree: 'Nanodegree',
                from: 'December 2020',
                to: 'January 2021'
            },
            {
                id: 7,
                name: 'Intermediate JavaScript',
                degree: 'Nanodegree',
                from: 'January 2021',
                to: 'February  2021'
            },
            {
                id: 8,
                name: 'React',
                degree: 'Nanodegree',
                from: 'March 2021',
                to: 'August 2021'
            },
        ],
        'Year Up / Atlanta Technical College': [
            {
                id: 9,
                name: 'Year Up Technical Training',
                degree: 'Certification',
                from: 'August 2018',
                to: 'July 2019'
            },
            {
                id: 10,
                name: 'Java Programming',
                degree: 'Certification',
                from: 'August 2018',
                to: 'May 2019'
            }
        ]
      })
    return (
        <section id='education'>
            <div className='w-full p-0 flex flex-col justify-center lg:float-right lg:w-3/4'>
                <hgroup className='relative py-8 text-center'>
                    <h1 className='p-2 m-2 text-3xl font-thin md:tracking-widest md:text-5xl'> Education </h1>
                    <hr />
                </hgroup>
                <div className='w-full flex flex-col px-2 py-2 lg:flex-row sm:px-0'>
                    <Tab.Group>
                      <Tab.List className='w-full flex rounded-xl p-1 overflow-x-auto lg:w-fit flex-row lg:min-w-max lg:flex-col'>
                        {Object.keys(education).map((category) => (
                          <Tab
                            key={category}
                            className={({ selected }) =>
                              classNames(
                                'font-medium text-center md:text-left whitespace-nowrap p-4 md:p-2.5',
                                selected
                                  ? 'bg-white'
                                  : 'text-gray-500 hover:bg-white/[0.12] hover:text-gray-800'
                              )
                            }
                          >
                            {category}
                          </Tab>
                        ))}
                      </Tab.List>
                      <Tab.Panels className='w-full'>
                        {Object.values(education).map((locations, idx) => (
                          <Tab.Panel
                            key={idx}
                            className={classNames(
                              'rounded-xl bg-white p-1 min-w-full overflow-auto h-64',
                              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400'
                            )}
                          >
                            <ul>
                              {locations.map((course) => (
                                <li key={course.id} className='relative p-3'>
                                  <span className='text-xl font-medium leading-5'> {course.name} </span>
                                  <br />
                                  <span className='text-l font-medium'> {course.degree} </span>
                                  <br />
                                  <span className='text-sm font-medium'> {course.from} - {course.to} </span>
                                </li>
                              ))}
                            </ul>
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </section>
    )
}

export default Education