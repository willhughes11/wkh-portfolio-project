import React, { Component } from 'react';
import Head from 'next/head';
import { 
    ApolloClient, 
    InMemoryCache,
    createHttpLink,
    gql
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import moment from 'moment';


class ProjectsPage extends Component {
    render() {
        return(
            <div className='projects'>
            <Head>
                <title>William Hughes - Projects</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className='w-full min-h-screen bg-gray-50'>
                <div className='container my-2 md:mx-auto'>
                    <table className='table-auto w-full mx-4 text-left'>
                        <thead>
                            <tr className='p-4'>
                                <th>Created</th>
                                <th>Title</th>
                                <th>Languages</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.repositories.map((repo,index) => (
                                <tr>
                                    <td>
                                        {moment(repo.createdAt).format('MM/DD/YYYY')}
                                    </td>
                                    <td>{formatText(repo.name)}</td>
                                    <td className='space-x-3'>
                                        {repo.languages.edges.map((topic,index) => (
                                            <span key={topic.node.name} className='text-sm'>{topic.node.name}</span>
                                        ))}
                                    </td>
                                    <td>
                                        <a href={repo.url}>
                                            <svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                                              <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                                              <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
                                            </svg>
                                        </a>
                                    </td>
                               </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
        )
    }
}

export const getServerSideProps = async ({ req,res }) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
      });
      
      const authLink = setContext((_, { headers }) => {
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
          }
        }
      });
      
    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache()
    });

    const { data } = await client.query({
        query: gql`
        {
            user(login: "willhughes11") {
              repositories(first: 60, orderBy: {field: CREATED_AT, direction: DESC}) {
                edges {
                  node {
                    id
                    forkCount
                    name
                    createdAt
                    languages(first: 10) {
                      edges {
                        node {
                          id
                          name
                        }
                      }
                    }
                    url
                  }
                }
              }
            }
          }
        `
    })

    const { user } = data
    const repositories = user.repositories.edges.map(({ node }) => node)

    return {
        props: {
            repositories
        }
    }
}

const formatText = (string) => {
    const header = capitalizeFirstLetter(string.split(/(?=[A-Z])/).join(' ').replace(/-/g, ' ').replace(/ +(?= )/g,''))

    let arr = header.split(' ')
    arr.forEach((element,index) => {
        console.log(arr[index])
        if (element === 'Api' || element === 'api') {
            arr[index] = element.toUpperCase()
        } else if (element === 'Ios'){
            arr[index] = 'iOS'
        } else if (element === 'Postgresql'){
                arr[index] = 'PostgreSQL'
        } else if (element === 'db') {
            arr[index] = 'DB'
        } else {
            arr[index] = capitalizeFirstLetter(element)
        }
    });

    return arr.join(' ')
}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

ProjectsPage.layout = 'L2';
export default ProjectsPage