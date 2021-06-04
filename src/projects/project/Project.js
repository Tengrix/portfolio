import React from "react";
import s from './Project.module.css'
function Project(props){
    return(
        <div className={s.project}>
            <img src={'https://file.liga.net/images/general/2020/09/08/20200908171549-5386.jpg?v=1599578314'} className={s.icon}></img>
            <button className={s.viewBtn}>View</button>
            <span className={s.description}>{props.text}</span>
        </div>
    )
}
export default Project