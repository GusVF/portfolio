import React, { useContext } from "react";
import { TranslateContext } from "../context/TranslateContext";
import AllForOne from "./AllForOneCard";
import DockerTodoCard from "./DockerTodoCard";
import OneForAll from "./OneForAll";
import ReactTestCard from "./ReactTestCard";
import TrybeWalletCard from "./TrybeWalletCard";
import StoreManager from "./StoreManageCard";
import BlogsAPI from "./BlogsAPICard";
import TrybeSmithCard from './TrybeSmithCard';
import TrybersAndDragonsCard from './TrybersNDragonsCard';
import TrybeFutebolClube from './TrybeFutebolClube';
import RestaurantOrders from './RestaurantOrders';
import TrybeIsNotGoogle from './TING';
import Portfilio from './Portfolio';
import TodoList from './TodoList';
import GusGPT from './GusGPT';

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
      <Portfilio />
      <TodoList />
      <GusGPT />
      <TrybeWalletCard />
      <ReactTestCard />
      <DockerTodoCard />
      <AllForOne />
      <OneForAll />
      <StoreManager />
      <BlogsAPI />
      <TrybeSmithCard />
      <TrybersAndDragonsCard />
      <TrybeFutebolClube />
      <RestaurantOrders />
      <TrybeIsNotGoogle />
      </div>
    </div>
  );
}

export default Project;
