import React from 'react'
import s from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.scss";

function Contacts() {

    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.formContainer}>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="mail"
                               aria-label="Recipient's username with two button addons"/>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="topic"
                               aria-label="Recipient's username with two button addons"/>
                    </div>
                    <textarea className={'textA'} placeholder={'Comments'}></textarea>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contacts