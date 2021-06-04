import React from "react";
import s from './Projects.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";

function Projects(){
    return(
        <div className={s.projectsBlock}>
            <div className={ `${styleContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <Project text={'Lorem Ipsum is simply dummy text'}/>
                    <Project text={'when an unknown printer took a galley of type'}/>
                </div>
            </div>
        </div>
    )
}
export default Projects