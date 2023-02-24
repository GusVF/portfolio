import React from "react";
import DockerTodoCard from "./DockerTodoCard";
import ReactTestCard from "./ReactTestCard";
import SolarSystemCard from "./SolarSystemCard";
import TrybeWalletCard from "./TrybeWalletCard";

function Project() {
  return (
    <div
      id="projects"
      data-scroll-section
      className="has-text-white 
      is-flex
      is-flex-direction-column
      is-align-items-center"
    >
      <p className="project-header is-size-2">Projects</p>
      <div id="projects"
      className="has-text-white 
      is-flex
      is-flex-wrap-wrap
      ">
      <SolarSystemCard />
      <TrybeWalletCard />
      <ReactTestCard />
      <DockerTodoCard />
      </div>
    </div>
  );
}

export default Project;
