import style from './Nav.module.scss'
export function Nav(){

    return(
        <nav className={style.navStyling}>
            <div>
            <ul>
                <li><a href="">Hjem</a></li>
                <li>|</li>
                <li><a href="">Advokaterne</a></li>
                <li>|</li>
                <li><a href="">Om LeoLov</a></li>
                <li>|</li>
                <li><a href="">Kontakt</a></li>
            </ul>

            <h3><span>Leo-</span>Lov</h3>
            </div>
            <div className={style.divStyling} ></div>
        </nav>
    )
}