import React from "react";
import s from './Skills.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/Title/Title";
import {faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import Fade from 'react-reveal/Fade';

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${s.container} ${s.skillsContainer}`}>
                <Fade bottom>
                    <Title title={'Skills'}/>
                    <div className={s.skills}>
                        <Skill title={'JavaScript'} icon={faJs}
                               description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/>
                        <Skill title={'TypeScript'} icon={faCode}
                               description={'when an unknown printer took a galley of type and scrambled centuries'}/>
                        <Skill title={'React'} icon={faReact}
                               description={'but also the leap into electronic typesetting, remaining essentially unchanged.'}/>
                    </div>
                </Fade>
            </div>
        </div>

    )
}

export default Skills