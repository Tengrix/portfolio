import s from './Button.module.scss'
export default function Button(props){
    return(
        <a href="" className={s.btn}>{props.text}</a>
    )
}