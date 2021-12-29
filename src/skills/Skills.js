import React from "react";
import s from './Skills.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/Title/Title";
import {faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import Fade from 'react-reveal/Fade';
import {faStar} from "@fortawesome/free-solid-svg-icons";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${s.container} ${s.skillsContainer}`}>
                <Fade bottom>
                    <Title title={'Skills'}/>
                    <div className={s.skills}>
                        <Skill title={'JavaScript'} icon={faJs}
                               description={'Simple things are done simply. Let\'s make web pages alive.'}/>
                        <Skill title={'TypeScript'} icon={faCode}
                               description={'Typescript is a strict superset of Javascript and compiles down to really clean code. '}/>
                        <Skill title={'React'} icon={faReact}
                               description={'ReactJS is a multi-purpose, open-source library that is mainly used in front-end development, focusing on building user interfaces. Learn React Once and Write Everywhere'}/>
                    </div>
                </Fade>
            </div>
        </div>

    )
}

export default Skills