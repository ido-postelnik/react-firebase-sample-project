import React from 'react'

const ProjectDetails = (props) => {
  console.log("props: ", props);
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            impedit iusto enim cum nulla porro, magnam esse corrupti incidunt
            fugit expedita earum? Qui natus velit necessitatibus ipsa sapiente.
            Laboriosam, nulla.
          </p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By Ido</div>
          <div>2nd Sep, 2am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails
