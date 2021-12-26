import React from "react";
import s from './References.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


function References(props) {
    return (
        <div className={s.socialMedia}>
            <div className={s.icon}>
                <a href=""><FontAwesomeIcon style={{width:40,height:40}} icon={props.icon}/></a>
                <h3>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default References