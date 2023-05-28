import React from 'react';

function ProjectItem({ name, about, technologies }) {
  const technologiesElements = technologies.map((element, index) => {
    console.log(element);
    return <span key={index}>{element}</span>;
  });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologiesElements}</div>
    </div>
  );
}

export default ProjectItem;
