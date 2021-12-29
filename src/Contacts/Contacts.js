import React, {useState} from 'react'
import s from './Contacts.module.scss'
import Title from "../common/components/Title/Title";
import Fade from 'react-reveal/Fade';

import {send} from 'emailjs-com';
import {useForm} from "react-hook-form";


function Contacts() {
    const { register, handleSubmit, reset, formState: { errors }} = useForm();

    const onSubmitHandler = (data) => {
        sendFeedback(
            'service_il63oey',
            'template_rcdxn5p',
            {from_name:data.name, reply_to:data.email, message:data.message},
            'user_T5shzWRNLcqnTffqxpgFq'
        )
        console.log(data.email)
        reset();
    };
    const sendFeedback = (serviceID, templateId, variables,userId) => {
        send(
            serviceID, templateId,
            variables,userId
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <Fade bottom>
                    <Title title={'Contact Me'}/>
                    <form onSubmit={handleSubmit(onSubmitHandler)} className={s.formContainer}>
                        <input {...register('name', {required:true})} className={s.formArea} name='name'
                               placeholder={'Name'}/>
                        {errors.name && <span>Name is required</span>}
                        <input {...register('email',{required:'Email is required', pattern: {value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address"}})} className={s.formArea} name='email'
                               placeholder={'@-mail'}/>
                        {errors.email && <span>{errors.email?.message}</span>}
                        <textarea {...register('message', {required:true})} className={s.messageArea} name='message'
                                  placeholder={'Comments'}/>
                        {errors.message && <span>This field is required</span>}
                        <input type={'submit'} className={s.submitBtn} value={'Sumbit'}/>
                    </form>
                </Fade>
            </div>

        </div>
    )
}

export default Contacts