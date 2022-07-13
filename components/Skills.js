import Image from 'next/image'

const Skills = () => {
    const [skills] = [{
        'Front-End Development': [
          {
            id: 1,
            name: 'html',
            title: 'HTML',
            logo: '/logos/html.png'
          },
          {
            id: 2,
            name: 'css',
            title: 'CSS',
            logo: '/logos/css.png'
          },
          {
            id: 3,
            name: 'javascript',
            title: 'JavaScript',
            logo: '/logos/javascript.png'
          },
          {
            id: 4,
            name: 'react',
            title: 'React',
            logo: '/logos/react.png'
          },
          {
            id: 5,
            name: 'angular',
            title: 'Angular',
            logo: '/logos/angular.png'
          },
        ],
        'Back-End Development': [
            {
              id: 1,
              name: 'python',
              title: 'Python',
              logo: '/logos/python.png'
            },
            {
                id: 2,
                name: 'node',
                title: 'Node.js',
                logo: '/logos/node.png'
              },
              {
                id: 3,
                name: 'csharp',
                title: 'C#',
                logo: '/logos/csharp.png'
              },
              {
                id: 4,
                name: 'java',
                title: 'Java',
                logo: '/logos/java.png'
              },
              {
                id: 5,
                name: 'php',
                title: 'PHP',
                logo: '/logos/php.png'
              },
        ],
        'Mobile Development': [
            {
              id: 1,
              name: 'swift',
              title: 'Swift',
              logo: '/logos/swift.png'
            },
            {
                id: 2,
                name: 'kotlin',
                title: 'Kotlin',
                logo: '/logos/kotlin.png'
              },
              {
                id: 3,
                name: 'react-native',
                title: 'React Native',
                logo: '/logos/react.png'
              },
        ],
        'Data Science': [
            {
                id: 1,
                name: 'python',
                title: 'Python',
                logo: '/logos/python.png'
            },
            {
                id: 2,
                name: 'numpy',
                title: 'Numpy',
                logo: '/logos/numpy.png'
            },
            {
                id: 3,
                name: 'pandas',
                title: 'Pandas',
                logo: '/logos/pandas.png'
            },
            {
                id: 4,
                name: 'matplotlib',
                title: 'Matplotlib',
                logo: '/logos/matplotlib.png'
            },
        ],
        'Browser Automation': [
            {
                id: 1,
                name: 'selenium',
                title: 'Selenium',
                logo: '/logos/selenium.png'
            },     
            {
                id: 2,
                name: 'python',
                title: 'Python',
                logo: '/logos/python.png'
            },
            {
                id: 3,
                name: 'node',
                title: 'Node.js',
                logo: '/logos/node.png'
            },
        ],
        'Artificial Intelligence': [  
            {
                id: 1,
                name: 'python',
                title: 'Python',
                logo: '/logos/python.png'
            },
            {
                id: 2,
                name: 'pytorch',
                title: 'PyTorch',
                logo: '/logos/pytorch.png'
            },
            {
                id: 3,
                name: 'tensorflow',
                title: 'TensorFlow',
                logo: '/logos/tensorflow.png'
            },
        ],
        'Event Management': [  
            {
                id: 1,
                name: 'sensu',
                title: 'Sensu',
                logo: '/logos/sensu.png'
            },
            {
                id: 2,
                name: 'inlfuxdb',
                title: 'InfluxDB',
                logo: '/logos/influxdb.png'
            },
            {
                id: 3,
                name: 'grafana',
                title: 'Grafana',
                logo: '/logos/grafana.png'
            },
        ],
      }]
    return (
        <section id='skills'>
            <div className='container p-0 flex flex-col justify-center min-h-screen w-full lg:w-9/12 lg:mx-auto'>
                <hgroup className='relative py-8 text-center'>
                    <h1 className='p-2 m-2 text-4xl font-thin md:tracking-widest md:text-6xl'> Skills </h1>
                    <hr />
                </hgroup>
                <div className='w-full flex flex-col px-2 py-2 lg:flex-row sm:px-0'>
                    <div className='flex flex-wrap items-center justify-center'>
                        {Object.keys(skills).map((skill,index) => (
                            <div key={`skill-${index}-container`} className='p-6 shadow-lg m-4 block h-64 w-64 2xl:h-80 2xl:w-80'>
                            <h1 key={`skill-${index}-title`} className='text-center font-medium text-xl my-4'> {skill} </h1>
                            <div key={`skill-${index}-logos`} className='w-full'>
                                {skills[skill].map((skill) =>  (
                                    <div className='inline-block m-3 w-10 2xl:w-16'>
                                        <img 
                                            src={skill.logo} 
                                            alt={`skill-${index}-logo-${skill.id}-${skill.name}`} 
                                            key={`skill-${index}-logo-${skill.id}-${skill.name}`}
                                            id={`skill-${index}-logo-${skill.id}-${skill.name}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills