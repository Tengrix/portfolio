import React from "react";
import s from './Projects.module.scss'
import Project from "./project/Project";
import Title from "../common/components/Title/Title";
import todoImg from './../assets/img/Best-To-Do-List-Apps.jpg'
import socialNetImg from './../assets/img/socialNet.jpg'
import Fade from 'react-reveal/Fade';

function Projects() {
    // const projectLinkToSN = () =>{
    //     return <a href='https://tengrix.github.io/profile'/>
    // }
    // const projectLinkToToDo = () =>{
    //     return <a href='https://tengrix.github.io/todolist-incubator/'/>
    // }
    return (
        <div className={s.projectsBlock}>
            <div className={`${s.container} ${s.projectsContainer}`}>
                <Fade bottom>
                    <Title title={'My Projects'}/>
                    <div className={s.projects}>
                        <Project link='https://tengrix.github.io/workproject' style={{backgroundImage: `url(${socialNetImg})`}} title={'Social network'}
                                 description={'Lorem Ipsum is simply dummy text'}/>
                        <Project link='https://tengrix.github.io/todolist-incubator/' style={{backgroundImage: `url(${todoImg})`}} title={'TodoList'}
                                 description={'when an wdsadqedsaqwe unknown printer took a galley of type'}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Projects