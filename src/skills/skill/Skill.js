import React from "react";
import s from './Skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Skill(props) {
    return (
        <div className={s.skill}>
            <div className={s.iconContainer}>
                <div className={s.icon} >
                    <FontAwesomeIcon style={{width:60,height:60}} icon={props.icon}/>
                </div>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    )
}

export default Skill