import React from 'react'
import s from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.scss";

function Contacts() {

    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.formContainer}>
                        <input type="text" placeholder={'Name'}/>

                        <input type="text" placeholder={'@-mail'}/>

                    <textarea className={'textA'} placeholder={'Comments'}/>
                    <div>
                        <button className={s.submitBtn}>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contacts