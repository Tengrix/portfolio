import React from 'react'
import s from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

function Contacts() {

    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <div>
                    <form action="">
                        <div>
                            <input type="text" placeholder={'mail'}/>
                        </div>
                        <div>
                            <input type="text" placeholder={'topic'}/>
                        </div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default Contacts