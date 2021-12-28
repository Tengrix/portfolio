import s from './Button.module.scss'
export default function Button(props){

    return(
        <a href={`${props.link}`} className={s.btn}>{props.text}</a>
    )
}