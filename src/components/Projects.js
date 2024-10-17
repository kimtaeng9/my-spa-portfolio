import React from "react";
import "./Project.css"

const projectData = [
    {
        id: 1,
        title: "Hotel Web", 
        description: "Hotel Reservation Website built with Java, Spring Boot, JPA, H2, Mustache ",
        link: "https://github.com/kimtaeng9/HotelWeb",
        image: "/path/to/image1.jpg"
    },
    {
        id: 2, 
        title: "My Portfolio Application", 
        description: "My Portfolio Application built with React, JavaScript",
        link: "https://github.com/kimtaeng9/my-spa-portfolio",
        image: "/path/to/image1.jpg"
    }
];

function Projects() {
    return(
        <section className="container projects-section">
            <h2>My Projects</h2>
            <div className="projects-container">
            {projectData.map((project) =>(
            <div className="project-card" key={project.id}>
                <img src={project.image} alt={project.title}></img>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link}>LEARN MORE</a>
            </div>
            ))}
            </div>
        </section>
    );
}

export default Projects;