import React from "react";
import s from './References.module.scss'

function References(props) {
    return (
        <div className={s.socialMedia}>
            <div className={s.icon}>
                <h3>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default References