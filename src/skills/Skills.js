import React from "react";
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/Title/Title";
import Js_img from "../assets/img/js-format.png";
import React_img from "../assets/img/atom.png";
import Ts_img from "../assets/img/programming-language.png";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JavaScript'} icon={faJs}
                           description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/>
                    <Skill title={'TypeScript'} icon={faCode}
                           description={'when an unknown printer took a galley of type and scrambled centuries'}/>
                    <Skill title={'React'} icon={faReact}
                           description={'but also the leap into electronic typesetting, remaining essentially unchanged.'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills