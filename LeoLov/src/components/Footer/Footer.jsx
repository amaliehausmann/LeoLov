import style from './Footer.module.scss'

export function Footer(){
    return(
        <footer className={style.footerStyling} id='kontakt'>
            <div>
                <h3>Adresse</h3>
                <p>Find os her:</p>
                <p>Maldive rd. 22,</p>
                <p>Seycehlle Islands</p>
            </div>
            <div>
                <h3>Kontakt</h3>
                <p>Kontakt os her:</p>
                <p>email@mail.dk</p>
                <p>Tlf: 0192 3023</p>
            </div>
            <div>
                <h3>Politik</h3>
                <p>Vores politikker:</p>
                <p>Privatlivspolitik</p>
                <p>Cookiepolitik</p>
                <p>Generalle betingelser</p>
            </div>
            <div>
                <h3>Sociale medier</h3>
                <img src="../src/assets/facebook.svg" alt="" />
                <img src="../src/assets/linkedin.svg" alt="" />
            </div>
        </footer>
    )
}