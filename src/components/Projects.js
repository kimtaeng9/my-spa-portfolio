import React from "react";
import "./Project.css"

const projectData = [
    {
        id: 1,
        title: "Hotel Web", 
        description: "호텔 예약 사이트 Java, Spring Boot, JPA, H2, Mustache ",
        link: "https://github.com/kimtaeng9/HotelWeb",
        image: process.env.PUBLIC_URL + "/images/img1.jpg"
    },
    {
        id: 2, 
        title: "My Portfolio Application", 
        description: "내 포트폴리오 애플리케이션 React, JavaScript, AWS",
        link: "https://github.com/kimtaeng9/my-spa-portfolio",
        image: process.env.PUBLIC_URL + "/images/img2.png"
    }
];


function Projects() {
    return(
        <section className="container projects-section">
            <h2>My Projects</h2>
            <div className="projects-container">
            {projectData.map((project) =>(
                <div className="project-card" key={project.id}>
                <img src={project.image} alt={project.title}className="project-image" />
                    <div className="project-details">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link}>LEARN MORE</a>
                    </div>
            </div>
            ))}
            </div>
        </section>
    );
}

export default Projects;