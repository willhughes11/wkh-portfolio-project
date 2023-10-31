const Skills = (props) => {
  const [skills] = [
    {
      "Web Development": [
        {
          id: 1,
          name: "html",
          title: "HTML",
          logo: "/logos/html.png",
          bgImageClass: "html-png",
        },
        {
          id: 2,
          name: "css",
          title: "CSS",
          logo: "/logos/css.png",
          bgImageClass: "css-png",
        },
        {
          id: 3,
          name: "javascript",
          title: "JavaScript",
          logo: "/logos/javascript.png",
          bgImageClass: "javascript-png",
        },
        {
          id: 4,
          name: "react",
          title: "React",
          logo: "/logos/react.png",
          bgImageClass: "react-png",
        },
        {
          id: 5,
          name: "angular",
          title: "Angular",
          logo: "/logos/angular.png",
          bgImageClass: "angular-png",
        },
      ],
      "Backend Development": [
        {
          id: 1,
          name: "python",
          title: "Python",
          logo: "/logos/python.png",
          bgImageClass: "python-png",
        },
        {
          id: 4,
          name: "java",
          title: "Java",
          logo: "/logos/java.png",
          bgImageClass: "java-png",
        },
        {
          id: 3,
          name: "csharp",
          title: "C#",
          logo: "/logos/csharp.png",
          bgImageClass: "csharp-png",
        },
        {
          id: 6,
          name: "go",
          title: "Go",
          logo: "/logos/golang.png",
          bgImageClass: "golang-png",
        },
        {
          id: 7,
          name: "rust",
          title: "Rust",
          logo: "/logos/rust.png",
          bgImageClass: "rust-png",
        },
        {
          id: 8,
          name: "typescript",
          title: "TypeScript",
          logo: "/logos/typescript.png",
          bgImageClass: "typescript-png",
        },
      ],
      "API Development": [
        {
          id: 1,
          name: "python",
          title: "Python",
          logo: "/logos/python.png",
          bgImageClass: "python-png",
        },
        {
          id: 8,
          name: "typescript",
          title: "TypeScript",
          logo: "/logos/typescript.png",
          bgImageClass: "typescript-png",
        },
        {
          id: 3,
          name: "javascript",
          title: "JavaScript",
          logo: "/logos/javascript.png",
          bgImageClass: "javascript-png",
        },
        {
          id: 6,
          name: "go",
          title: "Go",
          logo: "/logos/golang.png",
          bgImageClass: "golang-png",
        },
        {
          id: 7,
          name: "rust",
          title: "Rust",
          logo: "/logos/rust.png",
          bgImageClass: "rust-png",
        },
      ],
      "Mobile Development": [
        {
          id: 1,
          name: "swift",
          title: "Swift",
          logo: "/logos/swift.png",
          bgImageClass: "swift-png",
        },
        {
          id: 2,
          name: "kotlin",
          title: "Kotlin",
          logo: "/logos/kotlin.png",
          bgImageClass: "kotlin-png",
        },
        {
          id: 3,
          name: "react-native",
          title: "React Native",
          logo: "/logos/react.png",
          bgImageClass: "react-png",
        },
        {
          id: 4,
          name: "flutter",
          title: "Flutter",
          logo: "/logos/react.png",
          bgImageClass: "flutter-png",
        },
      ],
      "Cloud Development": [
        {
          id: 1,
          name: "aws",
          title: "AWS",
          logo: "/logos/aws.png",
          bgImageClass: "aws-png",
        },
        {
          id: 2,
          name: "azure",
          title: "Azure",
          logo: "/logos/azure.png",
          bgImageClass: "azure-png",
        },
        {
          id: 3,
          name: "gcp",
          title: "Google Cloud",
          logo: "/logos/gcp.png",
          bgImageClass: "gcp-png",
        },
        {
            id: 4,
            name: "docker",
            title: "Docker",
            logo: "/logos/docker.png",
            bgImageClass: "docker-png",
          },
          {
            id: 5,
            name: "kubernetes",
            title: "Kubernetes",
            logo: "/logos/kubernetes.png",
            bgImageClass: "kubernetes-png",
          },
      ],
      "Data Science": [
        {
          id: 1,
          name: "python",
          title: "Python",
          logo: "/logos/python.png",
          bgImageClass: "python-png",
        },
        {
          id: 2,
          name: "numpy",
          title: "Numpy",
          logo: "/logos/numpy.png",
          bgImageClass: "numpy-png",
        },
        {
          id: 3,
          name: "pandas",
          title: "Pandas",
          logo: "/logos/pandas.png",
          bgImageClass: "pandas-png",
        },
        {
          id: 4,
          name: "matplotlib",
          title: "Matplotlib",
          logo: "/logos/matplotlib.png",
          bgImageClass: "matplotlib-png",
        },
      ],
      "Database Development": [
        {
          id: 1,
          name: "postgres",
          title: "PostgreSQL",
          logo: "/logos/postgres.png",
          bgImageClass: "postgres-png",
        },
        {
          id: 2,
          name: "mongo",
          title: "MongoDB",
          logo: "/logos/mongo.png",
          bgImageClass: "mongo-png",
        },
        {
            id: 3,
            name: "sqlite",
            title: "SQLite",
            logo: "/logos/sqlite.png",
            bgImageClass: "sqlite-png",
          },
      ],
      "Browser Automation": [
        {
          id: 1,
          name: "selenium",
          title: "Selenium",
          logo: "/logos/selenium.png",
          bgImageClass: "selenium-png",
        },
        {
          id: 2,
          name: "python",
          title: "Python",
          logo: "/logos/python.png",
          bgImageClass: "python-png",
        },
        {
          id: 3,
          name: "javascript",
          title: "JavaScript",
          logo: "/logos/javascript.png",
          bgImageClass: "javascript-png",
        },
      ],
      "AI & Machine Learning": [
        {
          id: 1,
          name: "python",
          title: "Python",
          logo: "/logos/python.png",
          bgImageClass: "python-png",
        },
        {
          id: 2,
          name: "pytorch",
          title: "PyTorch",
          logo: "/logos/pytorch.png",
          bgImageClass: "pytorch-png",
        },
        {
          id: 3,
          name: "tensorflow",
          title: "TensorFlow",
          logo: "/logos/tensorflow.png",
          bgImageClass: "tensorflow-png",
        },
        {
            id: 4,
            name: "chatgpt",
            title: "ChatGPT",
            logo: "/logos/chatgpt.png",
            bgImageClass: "chatgpt-png",
          },
      ],
      "Monitoring & Event Management": [
        {
          id: 1,
          name: "sensu",
          title: "Sensu",
          logo: "/logos/sensu.png",
          bgImageClass: "sensu-png",
        },
        {
          id: 2,
          name: "influxdb",
          title: "InfluxDB",
          logo: "/logos/influxdb.png",
          bgImageClass: "influxdb-png",
        },
        {
          id: 3,
          name: "grafana",
          title: "Grafana",
          logo: "/logos/grafana.png",
          bgImageClass: "grafana-png",
        },
      ],
    },
  ];
  return (
    <section id="skills" className="scroll-m-10 mx-2" ref={props.skillsRef}>
      <div className="container p-0 flex flex-col justify-center min-h-screen w-full lg:w-9/12 lg:mx-auto">
        <hgroup className="relative py-8 text-center">
          <h1 className="p-2 m-2 text-4xl font-thin md:tracking-widest md:text-6xl">
            {" "}
            Skills{" "}
          </h1>
          <hr />
        </hgroup>
        <div className="w-full flex flex-col px-2 py-2 lg:flex-row sm:px-0">
          <div className="flex flex-wrap items-center justify-center">
            {Object.keys(skills).map((skill, index) => (
              <div
                key={`skill-${index}-container`}
                className="bg-neutral-900 p-6 shadow-lg m-3 block rounded-lg h-80 w-80 2xl:h-[21rem] 2xl:w-[21rem]"
              >
                <h1
                  key={`skill-${index}-title`}
                  className="text-center font-medium text-xl my-4"
                >
                  {" "}
                  {skill}{" "}
                </h1>
                <div
                  key={`skill-${index}-logos`}
                  className="flex flex-wrap justify-center"
                >
                  {skills[skill].map((skill) => (
                    <div
                      key={`skill-${index}-img-wrapper-${skill.id}-${skill.name}`}
                      className="group inline-block my-1 mx-2 text-center max-xl:2xl:w-20 max-[320px]:w-1/4"
                    >
                      <div
                        alt={`skill-${index}-logo-${skill.id}-${skill.name}`}
                        key={`skill-${index}-logo-${skill.id}-${skill.name}`}
                        id={`skill-${index}-logo-${skill.id}-${skill.name}`}
                        className={`mx-1 mb-4 ${skill.bgImageClass} bg-repeat-position-size transition ease-in-out group-hover:scale-150 group-hover:duration-300 w-14 h-14 md:w-14`}
                      ></div>
                      <span
                        key={`skill-${index}-title-${skill.id}-${skill.name}`}
                        className="tracking-tighter transition ease-in-out opacity-0 group-hover:duration-500 group-hover:opacity-100"
                      >
                        {skill.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
