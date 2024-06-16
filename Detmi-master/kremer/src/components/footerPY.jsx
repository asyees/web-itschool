import '../styles/footers/footerPY.module.css'

import logo_img from "../images/Detmi.png"
import tg_img from "../images/qrcodetg.png"

export default function Footer(){
    return(
        <footer className="footer">
                    <div className={styles.footer__inner}>
                    <div className={styles["width-wrapper__footer"]}>
                    <div className={styles.container}>
                        <nav className={styles["footer__menu"]}>
                        <ul className={styles.footer__menu-lis}>
                            <li className="footer__menu-item">
                            <p className="footer__menu-title">Курсы</p>
                            </li>
                            <li className="footer__menu-item">
                            <a href="" className="footer__menu-link"> Python </a>
                            </li>
                            <li className="footer__menu-item">
                            <a href="" className="footer__menu-link"> Javascript </a>
                            </li>
                            <li className="footer__menu-item">
                            <a href="" className="footer__menu-link"> C++ </a>
                            </li>
                        </ul>
                        <div className="logo__footer">
                            <a href="#" className="logo__footer-link">
                            <img src={logo_img} alt="" className="logo__footer-img"/>
                            </a>
                        </div>
                        <ul className="footer__menu-list">
                            <li className="footer__menu-item">
                            <p className="footer__menu-title">Наши соц. сети</p>
                            </li>
                            <li className="footer__menu-item">
                            <a href="">
                                <img src={tg_img} alt="" className="tg_link"/>
                            </a>
                            </li>
                            <li className="footer__menu-item">
                            <a href="" className="footer__menu-link"></a>
                            </li>
                            <li className="footer__menu-item">
                            <a href="" className="footer__menu-link"></a>
                            </li>
                        </ul>
                        </nav>
                        <div className="footer__text">
                        <p className="footer__text-item">Присоединяйтесь к нашей платформе</p>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
        )
        }