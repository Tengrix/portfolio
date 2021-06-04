import React from 'react'
import s from './DamirUakhit.module.css'
import styleContainer from "../common/styles/Container.module.css";
import References from "./References/References";

function DamirUakhit() {

    return (
        <div className={s.DamirUakhitBlock}>
            <div className={`${styleContainer.container} ${s.DUContainer}`}>
                <h2 >DAMIR UAKHIT</h2>
                <div className={s.references}>
                    <References title={'Instagram'}/>
                    <References title={'Facebook'}/>
                    <References title={'LinkedIn'}/>
                    <References title={'Github'}/>
                </div>
            </div>
            <div className={s.footer}> 2021 All rights reserved</div>
        </div>
    )
}

export default DamirUakhit