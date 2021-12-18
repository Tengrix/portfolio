import React from "react";
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/Title/Title";
import Js_img from "../assets/img/js.png";
import React_img from "../assets/img/react.png";
import Ts_img from "../assets/img/typescript.png";
function Skills(){
    return(
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
               <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill style={{ backgroundImage: `url(${Js_img})` }}
                           description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/>
                    <Skill style={{ backgroundImage: `url(${Ts_img})` }}
                           description={'when an unknown printer took a galley of type and scrambled centuries'}/>
                    <Skill title={'React-Redux'} style={{ backgroundImage: `url(${React_img})` }}
                           description={'but also the leap into electronic typesetting, remaining essentially unchanged.'}/>
                </div>
            </div>
        </div>
    )
}
export default Skills