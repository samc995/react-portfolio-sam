function Project({ project }) {
    const { name, repo, link, description, image } = project;
  
    return (
      <div className="p-3">
        <img
          src={require(`../assets/${image}`)}
          alt={name}
          className="project-image"
        />
        <div className="">
          <h3>
            <a href={link}>{name}</a>{' '}
            <a href={repo}>
              <i className="fab fa-github"></i>
            </a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  
  export default Project;