import Head from 'next/head';
import React, { Component } from 'react';
import About from '../components/About';
import Introduction from '../components/Introduction';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import { 
    ApolloClient, 
    InMemoryCache,
    createHttpLink,
    gql
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

class Home extends Component {
    constructor () {
        super()
        this.state = {
            pinnedItems: []
        };
    }

    componentDidMount = () => {
        const pinnedItems = getPinnedItems()
        if (!pinnedItems) {
            setPinnedItems(this.props.pinnedItems)
            this.setState({ pinnedItems: this.props.pinnedItems })
        } else {
            this.setState({pinnedItems: pinnedItems})
        }

        if (this.state.pinnedItems !== this.props.pinnedItems) {
            this.setState({pinnedItems: this.props.pinnedItems})
        }
    }

    render() {
        return (
            <div className='app'>
                <Head>
                    <title>William Hughes</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <main className='w-full min-h-screen md:bg-gray-50'>
                    <Introduction homeRef={this.props.myRefs.home}/>
                    <About aboutRef={this.props.myRefs.about}/>
                    <Experience experienceRef={this.props.myRefs.experience}/>
                    <Skills skillsRef={this.props.myRefs.skills}/>
                    <Projects projectsRef={this.props.myRefs.projects} pinnedItems={this.props.pinnedItems}/>
                    <Contact contactRef={this.props.myRefs.contact}/>
                </main>
            </div>
        )
    }
}

export const getStaticProps = async () => {
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
              repository(name: "wkh-portfolio-project") {
                id
                forkCount
                stargazerCount
                url
              }
              pinnedItems(first: 6) {
                totalCount
                edges {
                  node {
                    ... on Repository {
                      id
                      name
                      description
                      stargazerCount
                      forkCount
                      url
                      languages(first: 10) {
                        edges {
                          node {
                            id
                            name
                          }
                        }
                      }
                      primaryLanguage {
                        id
                        name
                      }
                      repositoryTopics(first: 10) {
                        edges {
                          node {
                            topic {
                              id
                              name
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
    })

    const { user } = data
    const pinnedItems = user.pinnedItems.edges.map(({ node }) => node)
    const repository = user.repository

    return {
        props: {
            pinnedItems,
            repository
        }
    }
}

export const setPinnedItems = (items) => {
    sessionStorage.setItem('pinnedItems', JSON.stringify(items));
}

export const getPinnedItems = () => {
    let pinnedItems
    try {
        pinnedItems = JSON.parse(sessionStorage.getItem('pinnedItems'));
    } catch {
        pinnedItems = []
    }
    
    return pinnedItems
};

Home.layout = "L1";
export default Home