import React from "react";
import s from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";
function Nav() {
    return (
        <div className={s.nav}>
            <Link
                activeClass={s.active}
                to="main"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            >Main</Link>
            <Link
                activeClass={s.active}
                to="skill_id"
                spy={true}
                smooth={true}
                offset={-80}
                duration= {500}
            >Skills</Link>
            {/*<a href="#projects_id">Projects</a>*/}
            <Link
                activeClass={s.active}
                to="projects_id"
                spy={true}
                smooth={true}
                offset={-80}
                duration= {500}
            >Projects</Link>
            <Link
                activeClass={s.active}
                to="contacts_id"
                spy={true}
                smooth={true}
                offset={-80}
                duration= {500}
            >Contacts</Link>
        </div>
    );
}

export default Nav;
