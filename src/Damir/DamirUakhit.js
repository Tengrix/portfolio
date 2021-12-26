import React from 'react'
import s from './DamirUakhit.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import References from "./References/References";
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

function DamirUakhit() {

    return (
        <div className={s.DamirUakhitBlock}>
            <div className={`${styleContainer.container} ${s.DUContainer}`}>
                <h2>DAMIR UAKHIT</h2>
                <div className={s.references}>
                    <References title={'LinkedIn'} icon={faLinkedinIn}/>
                    <References title={'GitHub'} icon={faGithub}/>
                    <References title={'Facebook'} icon={faFacebook}/>
                </div>
            </div>
            <footer className={s.footer}>
                2021 All rights reserved
            </footer>
        </div>
    )
}

export default DamirUakhit