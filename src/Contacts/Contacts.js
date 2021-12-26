import React from 'react'
import s from './Contacts.module.scss'
import Button from "../common/components/Btn/Button";
import Title from "../common/components/Title/Title";

function Contacts() {

    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <Title title={'Contacts'}/>
                <form className={s.formContainer}>
                    <input type="text" className={s.formArea} placeholder={'Name'}/>
                    <input type="text" className={s.formArea} placeholder={'@-mail'}/>
                    <textarea className={s.messageArea} placeholder={'Comments'}/>
                    <Button text={'Send message'}/>
                </form>
            </div>

        </div>
    )
}

export default Contacts