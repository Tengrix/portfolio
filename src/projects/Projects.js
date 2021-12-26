import React from "react";
import s from './Projects.module.scss'
import Project from "./project/Project";
import Title from "../common/components/Title/Title";
import todoImg from './../assets/img/Best-To-Do-List-Apps.jpg'
import socialNetImg from './../assets/img/socialNet.jpg'

function Projects() {

    return (
        <div className={s.projectsBlock}>
            <div className={`${s.container} ${s.projectsContainer}`}>
                <Title title={'My Projects'}/>
                <div className={s.projects}>
                    <Project style={{ backgroundImage: `url(${socialNetImg})` }} title={'Social network'} description={'Lorem Ipsum is simply dummy text'}/>
                    <Project style={{ backgroundImage: `url(${todoImg})` }} title={'TodoList'} description={'when an wdsadqedsaqwe unknown printer took a galley of type'}/>
                </div>
            </div>
        </div>
    )
}

export default Projects