import React from "react";
import s from './Main.module.scss'

function Main() {

    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.greeting}>
                    <span>Hi there</span>
                    <span> I am Damir <span>Uakhit</span></span>
                    <h1>Frontend Developer</h1>
                </div>
                <div className={s.photo}>
                    <div className={s.image}>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main