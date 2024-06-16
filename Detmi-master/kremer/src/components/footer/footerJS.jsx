import styles from '../../styles/footers/footerJS.module.css';
import logo_img from "../../images/Detmi.png";
import tg_img from "../../images/qrcodetg.png";

export default function FooterJS() {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer__inner']}>
                <div className={styles['width-wrapper__footer']}>
                    <div className={styles.container}>
                        <nav className={styles['footer__menu']}>
                            <ul className={styles['footer__menu-list']}>
                                <li className={styles['footer__menu-item']}>
                                    <p className={styles['footer__menu-title']}>Курсы</p>
                                </li>
                                <li className={styles['footer__menu-item']}>
                                    <a href="#" className={styles['footer__menu-link']}> Python </a>
                                </li>
                                <li className={styles['footer__menu-item']}>
                                    <a href="#" className={styles['footer__menu-link']}> Javascript </a>
                                </li>
                                <li className={styles['footer__menu-item']}>
                                    <a href="#" className={styles['footer__menu-link']}> C++ </a>
                                </li>
                            </ul>
                            <div className={styles['logo__footer']}>
                                <a href="#" className={styles['logo__footer-link']}>
                                    <img src={logo_img} alt="" className={styles['logo__footer-img']} />
                                </a>
                            </div>
                            <ul className={styles['footer__menu-list']}>
                                <li className={styles['footer__menu-item']}>
                                    <p className={styles['footer__menu-title']}>Наши соц. сети</p>
                                </li>
                                <li className={styles['footer__menu-item']}>
                                    <a href="#">
                                        <img src={tg_img} alt="" className={styles['tg_link']} />
                                    </a>
                                </li>
                                <li className={styles['footer__menu-item']}>
                                    <a href="#" className={styles['footer__menu-link']}></a>
                                </li>
                                <li className={styles['footer__menu-item']}>
                                    <a href="#" className={styles['footer__menu-link']}></a>
                                </li>
                            </ul>
                        </nav>
                        <div className={styles['footer__text']}>
                            <p className={styles['footer__text-item']}>Присоединяйтесь к нашей платформе</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
