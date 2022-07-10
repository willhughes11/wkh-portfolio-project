import { useState } from 'react';
import { Tab } from '@headlessui/react';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const Experience = () => {
    let [experience] = useState({
        'Barracuda Networks': [
          {
            id: 1,
            position: 'Software Engineer',
            from: 'July 2022',
            to: 'Present',
            responsibilities: [],
          },
        ],
        'Flip The Pips LLC': [
            {
                id: 2,
                position: 'Software Engineer (Part-Time)',
                from: 'July 2020',
                to: 'Present',
                responsibilities: ['Managed company technological infrastructure using cloud service provider AWS',
                'Built algorithmic trading software to implement the owner/trader\'s trading strategies using a combination of technical indicators, moving averages, sentiment analysis, simple web scraping, and a proprietary trading algorithm',
                'Responsible for building, updating, and maintaining the data models of all tables in the database',
                'Created a multi-threaded data management application that handled user data, subscriptions, and services while interacting with external APIs and internal databases',
                'Built a secure public API for the frontend web app to interact with and perform various CRUD operations',
                'Designed frontend web app in React that utilizes global state, handles backend logic, interacts with our API, and allows for users to view and manage their account data, services, and subscriptions through a UI',
                'Built a data pipeline that web scraped news articles, stored the data in a NoSQL database, queried and performed sentiment analysis on the stored data to generate trade signals',
                'Setup CI/CD pipelines to automate our software delivery process'
            ],
            },
        ],
        'Priority Technology Holdings': [
          {
            id: 3,
            position: 'API Engineer / Application Solutions Engineer',
            from: 'July 2021',
            to: 'July 2022',
            responsibilities: [],
          }
        ],
        'Noble Systems': [
            {
                id: 4,
                position: 'Support Technician',
                from: 'July 2020',
                to: 'May 2021',
                responsibilities: [],
            },
          ],
          'GE Digital': [
            {
                id: 5,
                position: 'Lifecycle Operations Specialist (Site Reliability Engineer)',
                from: 'July 2019',
                to: 'July 2020',
                responsibilities: [],
            },
            {
                id: 6,
                position: 'Data Analyst Intern (Full Stack Web Developer)',
                from: 'January 2019',
                to: 'July 2019',
                responsibilities: [],
            },
          ]
      })
    return (
        <section id='about'>
            <div className='container w-6/12 mx-auto min-h-screen p-0 flex flex-col justify-center'>
                <hgroup className='relative py-8 text-center'>
                    <h1 className='p-2 m-2 text-4xl font-thin md:tracking-widest md:text-6xl'> Experience </h1>
                    <hr />
                </hgroup>
                <div className='w-full flex flex-row px-2 py-2 sm:px-0 h-96'>
                    <Tab.Group>
                      <Tab.List className='flex flex-col rounded-xl p-1 w-fit min-w-max'>
                        {Object.keys(experience).map((category) => (
                          <Tab
                            key={category}
                            className={({ selected }) =>
                              classNames(
                                'w-full p-2.5 font-medium text-blue-700 text-left',
                                selected
                                  ? 'bg-white'
                                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                              )
                            }
                          >
                            {category}
                          </Tab>
                        ))}
                      </Tab.List>
                      <Tab.Panels>
                        {Object.values(experience).map((jobs, idx) => (
                          <Tab.Panel
                            key={idx}
                            className={classNames(
                              'rounded-xl bg-white p-1',
                              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400'
                            )}
                          >
                            <ul>
                              {jobs.map((job) => (
                                <li key={job.id} className='relative p-3'>
                                  <span className='text-xl font-medium leading-5'> {job.position} </span>
                                  <br />
                                  <span className='text-sm font-medium leading-5'> {job.from} - {job.to} </span>
                                  <ul className='mt-1 text-xs font-normal list-disc text-gray-500'>
                                    {job.responsibilities.map((responsibility) => (
                                        <li className='mx-4 my-2'>{responsibility}</li>
                                    ))}
                                  </ul>
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

export default Experience