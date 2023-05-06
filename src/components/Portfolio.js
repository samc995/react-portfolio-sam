import Project from "../components/Project";

function Portfolio() {
  // fill in the required data, image file should be in the assets folder and name should match exactly including extension
  const projects = [
    {
      name: "project 1",
      description: "MERN Stack",
      link: "https://google.com",
      repo: "https://github.com",
      image: "IMG_1611.jpeg",
    },
    {
      name: "project 2",
      description: "MERN Stack",
      link: "https://github.com",
      repo: "https://github.com",
      image: "IMG_1611.jpeg",
    },
  ];

  // for each project, use the Project component to build a project
  return (
    <div>
      <div className="d-flex">
        {projects.map((project) => (
          <Project project={project} key={"project=" + project.name} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;