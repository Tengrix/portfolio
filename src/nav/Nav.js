import React from "react";
import s from './Nav.module.scss';

function Nav() {
    return (
        <div className={s.nav}>
            <a href='#main'>Main</a>
            <a href='#skill_id'>Skills</a>
            <a href="#projects_id">Projects</a>
            <a href="#contacts_id">Contacts</a>
            <a href="#references_id">References</a>
        </div>
    );
}

export default Nav;
