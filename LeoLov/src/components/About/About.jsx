import style from './About.module.scss'

export function About(props){
    return(
        <section className={style.aboutStyling}>
            {props.children}
        </section>
    )
}