import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Education from './Education';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const Experience = (props) => {
    const [experience] = useState({
        'Aperiam Bio': [
          {
            id: 6,
            position: 'Full-Stack Engineer (Part-Time)',
            from: 'December 2022',
            to: 'February 2023',
            tasks: ['Created and managed database models and object-oriented handlers',
            'Built a secure public API for the frontend web app to interact with and perform CRUD operations',
            'Wrote data ingestion scripts and designed data ingestion pipelines',
            'Deployed Flask API to a PAAS', 
            'Resolved limited memory and platform-level timeout issues when requesting large sets of data by implementing parallel processing to improve performance and compressing data for a smaller response size '],
          }
        ],
        'Barracuda Networks': [
          {
            id: 1,
            position: 'Software Engineer',
            from: 'July 2022',
            to: 'Present',
            tasks: ['Responsible for designing pipelines for consuming and validating data coming from existing data sources and storing the data in a data lake',
            'Created and maintained continuous automated and manual testing of the pipelines and the quality of the data flowing through them',
            'Worked with product teams and data analysts to identify defects in the data and how to resolve them',
            'Built, maintained, and upgraded data pipelines that would provide data externally to customers and internally for company network security infrastructure',
            'Worked on ad-hoc requests from sister teams outside normal day-to-day responsibilities',
            'Created, upgraded, maintained cyber security related microservices',
            'Performed data analysis on third-party vendor efficacy, used to make business decisions based on the third-party vendors benefit to the company'],
          },
        ],
        'Flip The Pips LLC': [
            {
                id: 2,
                position: 'Software Engineer (Part-Time)',
                from: 'July 2020',
                to: 'July 2022',
                tasks: ['Managed company technological infrastructure using cloud service provider AWS',
                'Defined and prioritized all product features and capabilities',
                'Built algorithmic trading software to implement the owner/trader\'s trading strategies using a combination of technical indicators, moving averages, sentiment analysis, simple web scraping, and a proprietary trading algorithm',
                'Responsible for building, updating, and maintaining the data models of all tables in the database',
                'Created a multi-threaded data management application that handled user data, subscriptions, and services while interacting with external APIs and internal databases',
                'Built a secure public API for the frontend web app to interact with and perform various CRUD operations',
                'Designed frontend web app in React that utilizes global state, handles backend logic, interacts with our API, and allows for users to view and manage their account data, services, and subscriptions through a UI',
                'Built a data pipeline that web scraped news articles, stored the data in a NoSQL database, queried and performed sentiment analysis on the stored data to generate trade signals',
                'Setup CI/CD pipelines to automate our software delivery process'],
            },
        ],
        'Priority Technology Holdings': [
          {
            id: 3,
            position: 'API Engineer / Application Solutions Engineer',
            from: 'July 2021',
            to: 'July 2022',
            tasks: ['Resolved payment processing API related tickets, while adhering to SLAs for various clients',
            'SME for enterprise and legacy payment platform APIs, Vortex EOS, and MX Merchant respectively',
            'Updated documentation for all for all PRTH products, including API references and API guide videos',
            'Supported new customer API integrations',
            'API SDK: Created an API SDK library to support PRTH\'s payment processing API in a language-idiomatic way, to reduce complexity without sacrificing API functionality',
            'Integration Hours Analysis: Designed a client integration monitoring system, to track integration hours/time spent on tickets for different clients, using a combination of API requests and web scraping for data, storing data in a NoSQL database, and writing queries and functions to return the data in the desired format. This information would then be used to conceptualize, implement, enforce a new business plan to improve our integration process'],
          }
        ],
        'Noble Systems': [
            {
                id: 4,
                position: 'Support Technician',
                from: 'July 2020',
                to: 'May 2021',
                tasks: ['KPI Migration Project: Migrated MSSQL database that stored key performance Indicator data to PostgreSQL',
                'Adhered to strict SLAs for various clients of differing configurations, products, and practices',
                'Documented all activities in ticketing system in a clear and concise manner',
                'Used Linux and Windows Server operating systems to conduct the following duties:'],
                taskId: 3,
                subTasks: ['Troubleshooting of Dialogic, Aculab, and Asterisk telephony systems (VOIP & T1s)',
                'Using Informix, PostgreSQL, and Microsoft SQL Server Database Query Languages',
                'Using BASH Scripting to parse logs and adjust scripts Configuration and implementation of SSL/TLS Certificates',
                'Configuration of web-based applications in Windows IIS and Apache webservers',
                'Troubleshooting software applications within Cloud and Premise environments',
                'Saving and analyzing network packet captures for UDP/TCP communication']
            },
        ],
        'GE Digital': [
            {
                id: 5,
                position: 'Lifecycle Operations Specialist (Site Reliability Engineer)',
                from: 'July 2019',
                to: 'July 2020',
                tasks: ['Created/Edited 100+ browser automation scripts with XPath query-based actions in Selenium WebDriver',
                'Managed 30+ Private Minion Servers, which extended our synthetics coverage to 5 geographical locations, that allowed SAAS Based New Relic Synthetics UI, to connect to and interact with GE\'s internal applications',
                'Developed an Account Search tool in React for the Application Monitoring Team self-service portal to allow customers and other SRE\'s to more easily find the different accounts in New Relic',
                'Made charts in React to visualize monitoring team metrics such as ticket queue efficiency, average time to close ticket by SRE and cost by business unit',
                'Modified the Application Monitoring Team\'s Selenium WebDriver base script to improve descriptions common errors, capture and store data related to errors, and added new features to existing functions per customer request',
                'Wrote Sensu checks, that monitored critical message brokers, visualization applications, time-series databases, monitoring dashboards, web servers, in-memory databases and data centers used in GE\'s Event Management infrastructure monitoring system','Designed dashboards in Grafana that visualized monitoring data flow, uptime, availability, application health, and asset health'],
            },
            {
                id: 6,
                position: 'Data Analyst Intern (Full Stack Web Developer)',
                from: 'January 2019',
                to: 'July 2019',
                tasks: ['Upgraded a GE Asset Search Tool by optimizing SQL queries to improve performance and modified the front-end web design to better fit with the GE standard',
                'Developed 2 search tools and a KPI/SLA Dashboard that provided GE employees with information needed to locate company assets, determine the legal status of devices, measure leasing data, and different hardware ticket metrics that our team was responsible for tracking'],
            },
        ]
      })
    return (
        <section id='experience' className='scroll-m-10' ref={props.experienceRef}>
            <div className='container p-0 flex flex-col justify-center min-h-screen w-full mx-2 lg:w-9/12 lg:mx-auto'>
                <hgroup className='relative my-8 text-center'>
                    <h1 className='p-2 m-2 text-4xl font-thin md:tracking-widest md:text-6xl'> Experience </h1>
                    <hr />
                </hgroup>
                <div className='bg-white w-full flex flex-col px-2 py-2 lg:flex-row lg:shadow-lg sm:px-0'>
                    <Tab.Group>
                      <Tab.List className='w-full break-normal flex rounded-xl p-1 overflow-x-auto lg:w-fit flex-row lg:min-w-max lg:flex-col'>
                        {Object.keys(experience).map((category) => (
                          <Tab
                            key={category}
                            className={({ selected }) =>
                              classNames(
                                'w-full font-medium text-left whitespace-nowrap p-4 md:p-2.5',
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
                      <Tab.Panels>
                        {Object.values(experience).map((jobs, idx) => (
                          <Tab.Panel
                            key={idx}
                            className={classNames(
                              'rounded-xl bg-white p-1 overflow-auto h-52 md:h-56 lg:h-72 xl:h-[18rem] 2xl:h-[22rem]',
                              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400'
                            )}
                          >
                            <ul>
                              {jobs.map((job) => (
                                <li key={job.id} className='relative p-3'>
                                  <span className='text-xl font-medium leading-5'> {job.position} </span>
                                  <br />
                                  <span className='text-sm font-medium leading-5'> {job.from} - {job.to} </span>
                                  <ul className='mt-1 text-xs font-normal list-disc'>
                                    {job.tasks.map((task, index) => (
                                        <li key={`${job.id}-task-${index}`} className='mx-4 my-2'>
                                            {task}
                                            {job.subTasks && index === job.taskId ? (<ul className='mt-1 text-xs font-normal list-[circle]'>
                                                {job.subTasks.map((subResponsibility,index) => (
                                                    <li key={`${job.id}-subtask-${index}`} className='mx-4 my-2'>{subResponsibility}</li>
                                                ))}
                                            </ul>) : (<div></div>)}
                                        </li>
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
                <Education />
            </div>
        </section>
        
    )
}

export default Experience