import React from 'react'
import s from './DamirUakhit.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import References from "./References/References";

function DamirUakhit() {

    return (
        <div className={s.DamirUakhitBlock}>
            <div className={`${styleContainer.container} ${s.DUContainer}`}>
                <h2 >DAMIR UAKHIT</h2>
                <div className={s.references}>
                    <References title={''}/>
                    <References title={''}/>
                    <References title={''}/>
                    <References title={''}/>
                </div>
            </div>
            <footer className={s.footer}> 2021 All rights reserved
            </footer>
        </div>
    )
}

export default DamirUakhit