import React, { useContext } from "react";
import { TranslateContext } from "../context/TranslateContext";
import AllForOne from "./AllForOneCard";
import DockerTodoCard from "./DockerTodoCard";
import OneForAll from "./OneForAll";
import ReactTestCard from "./ReactTestCard";
import SolarSystemCard from "./SolarSystemCard";
import TrybeWalletCard from "./TrybeWalletCard";
import StoreManager from "./StoreManageCard";
import BlogsAPI from "./BlogsAPICard";
import TrybeSmithCard from './TrybeSmithCard';
import TrybersAndDragonsCard from './TrybersNDragonsCard';

function Project() {
  const { translate } = useContext(TranslateContext);
  return (
    <div
      id="projects"
      data-scroll-section
      className="has-text-white 
      is-flex
      is-flex-direction-column
      is-align-items-center"
    >
      <p className="project-header is-size-2">{ translate ? 'Projects' : 'Projetos'}</p>
      <div id="projects"
      className="has-text-white 
      is-flex
      is-flex-wrap-wrap"
      >
      <SolarSystemCard />
      <TrybeWalletCard />
      <ReactTestCard />
      <DockerTodoCard />
      <AllForOne />
      <OneForAll />
      <StoreManager />
      <BlogsAPI />
      <TrybeSmithCard />
      <TrybersAndDragonsCard />
      </div>
    </div>
  );
}

export default Project;
