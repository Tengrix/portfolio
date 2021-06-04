import React from "react";
import s from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
function Skills(){
    return(
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'}
                           description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/>
                    <Skill title={'TS'}
                           description={'when an unknown printer took a galley of type and scrambled centuries'}/>
                    <Skill title={'React-Redux'}
                           description={'but also the leap into electronic typesetting, remaining essentially unchanged.'}/>
                </div>
            </div>
        </div>
    )
}
export default Skills