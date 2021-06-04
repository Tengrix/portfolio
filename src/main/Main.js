import React from "react";
import s from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'
function Main() {

    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.greeting}>
                    <span>Hi there</span>
                    <h1> I am Damir Uakhit</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>

        </div>
    )
}

export default Main