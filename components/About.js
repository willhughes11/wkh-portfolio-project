const About = (props) => {
    return (
        <section id="about" className="scroll-m-10 mx-2" ref={props.aboutRef}>
            <div className="container min-h-screen p-0 flex flex-col justify-center md:mx-auto lg:w-6/12">
                <hgroup className="relative py-8 text-center">
                    <h1 className="p-2 m-2 text-4xl font-thin md:tracking-widest md:text-6xl">About Me</h1>
                    <hr />
                </hgroup>
                <div className="relative py-4 flex justify-center">
                    <div className="max-w-xl text-l font-medium md:max-w-2xl md:text-xl">
                        <p>
                            Hi, my name is William and I am  software engineer. My programming journey began back in 2018, 
                            when I enrolled in the Year Up program under the Java Programming track. In this learning track I was exposed to
                            backend languages such as Java and Python. Through this program I was also able to land my first internship at GE Digital. 
                            For 6 months I worked as a full-stack web developer with the PHP and SQL, and did some data analyst work in Tableau.
                        </p>
                        <br />
                        <p>
                            Fast-forward to today and I have gained different levels of programming experience inside and outside of my full-time positions. In
                            each of my roles, regardless of the title or job responsibilities, I have found a way to practice and apply my programming skills to
                            complete tasks.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About