import React from "react";
import s from './References.module.css'

function References(props) {
    return (
        <div className={s.socialMedia}>
            <div className={s.icon}>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default References