import React from "react";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div
      id="portfolio"
      className="black-background portfolioContainer padding-sites"
    >
      <h2 className="white headingProjects">My Work</h2>
      <ProjectCard
        projectImg="/mywebsite/kanban.png"
        reverse={false}
        description="MyKanban ist ein Kanban Board mit React Frontend und Django Backend, das eine effiziente Aufgabenverwaltung ermöglicht. Aufgaben können mit Drag-and-Drop-Funktionen einfach verschoben und organisiert werden."
        linkToProject="https://niki21599.github.io/kanban-frontend/"
        linkToGithub="https://github.com/niki21599/kanban-frontend"
        skills="React | Redux | Material UI | Django"
        projectName="MyKanban"
      />
      <ProjectCard
        projectImg="/mywebsite/chat2.0..jpg"
        reverse={true}
        description="Benutzer können mithilfe der intuitiven Benutzeroberfläche von MyChat einfach neue Chats starten und Nachrichten senden und empfangen. Das Django-Backend gewährleistet dabei eine zuverlässige Verarbeitung der Nachrichten und sorgt für eine reibungslose Benutzererfahrung."
        linkToProject="https://niki21599.github.io/chatFrontend/"
        linkToGithub="https://github.com/niki21599/chatFrontend"
        skills="React | Redux | Material UI | Django"
        projectName="MyChat"
      />
      <ProjectCard
        projectImg="/mywebsite/crm.jpg"
        reverse={false}
        description="MyCRM bietet die Möglichkeit Kundendaten und Verkäufe zu speichern. Die gespeicherten Sales werden im Dashboard anschaulich visualisiert."
        linkToProject="https://niki21599.github.io/react-crm/"
        linkToGithub="https://github.com/niki21599/react-crm"
        skills="React | Redux | Material UI | Django"
        projectName="MyCRM"
      />
      <ProjectCard
        projectImg="/mywebsite/videotube.jpg"
        reverse={true}
        description="MyTube ermöglicht Benutzern das Durchsuchen und Anzeigen von Videos. Mit Hilfe von React und der YouTube-API können Benutzer auf eine große Auswahl an Videos zugreifen."
        linkToProject="https://niki21599.github.io/youtube_clone/"
        linkToGithub="https://github.com/niki21599/youtube_clone"
        skills="React | Material UI | REST-API"
        projectName="MyTube"
      />
    </div>
  );
};

export default Projects;
