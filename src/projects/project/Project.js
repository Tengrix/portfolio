import React from "react";
import s from './Project.module.scss'
import Button from "../../common/components/Btn/Button";

function Project(props){
    return(
        <div className={s.project}>
            <div className={s.image} style={props.style}>
                <Button text={'View'}/>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
            </div>
    )
}
export default Project