import React from "react";
import s from './Main.module.scss'
import Particles from "react-tsparticles";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
import Fade from 'react-reveal/Fade';

function Main() {
    const particlesOpt = {
        fpsLimit: 60,
        particles: {
            color: {
                value: "#000"
            },
            links: {
                enable: true,
                color: "#000"
            },
            move: {
                enable: true
            }
        }
    }
    return (
        <div className={s.mainBlock}>
            <Particles className={s.particles} params={particlesOpt}/>
            <div className={s.container}>
                <Fade left>
                    <div className={s.greeting}>
                        <span>Hi there</span>
                        <span> I am Damir <span>Uakhit</span></span>
                        <ReactTypingEffect text={'Frontend Developer'}/>
                    </div>
                    <div className={s.photo}>
                        <Tilt>
                            <div className={s.image}>
                            </div>
                        </Tilt>
                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default Main