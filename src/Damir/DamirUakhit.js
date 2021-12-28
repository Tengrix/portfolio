import React from 'react'
import s from './DamirUakhit.module.scss'
import References from "./References/References";
import {faFacebook, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import Title from "../common/components/Title/Title";
import Fade from 'react-reveal/Fade';
import {LightSpeed} from "react-reveal";

function DamirUakhit() {

    return (
        <div className={s.DamirUakhitBlock}>
            <div className={`${s.container} ${s.DUContainer}`}>
                <Fade bottom>
                    <Title title={'DAMIR UAKHIT'}/>
                    <div className={s.references}>
                        <References network='https://www.linkedin.com/in/rimad-ten-75b0b9132/' title={'LinkedIn'} icon={faLinkedinIn}/>
                        <References network='https://github.com/Tengrix' title={'GitHub'} icon={faGithub}/>
                        <References network='https://www.facebook.com/profile.php?id=100004856475563' title={'Facebook'} icon={faFacebook}/>
                    </div>
                </Fade>
            </div>
            <LightSpeed left>
                <footer className={s.footer}>
                    2021 All rights reserved
                </footer>
            </LightSpeed>
        </div>
    )
}

export default DamirUakhit