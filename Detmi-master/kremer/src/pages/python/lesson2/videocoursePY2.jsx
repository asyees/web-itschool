import React, { useEffect } from 'react';
import Header from "../../../components/headers/headerPython";
import Footer from "../../../components/footer/footerPY";
import styles from "../../../styles/python/videocoursePY.module.css";
import arrow1_img from "../../../images/arrow1.png";
import python from "../../../images/python2.mp4";
import { Link } from 'react-router-dom';
import Sidebar from '../../sidebar';

function VideocoursePY1() {
    useEffect(() => {
        // Добавляем класс к body при монтировании компонента
        document.body.classList.add(styles.bodyGreenBackground);

        // Удаляем класс из body при размонтировании компонента
        return () => {
            document.body.classList.remove(styles.bodyGreenBackground);
        };
    }, []);

    return (
        <div>
            <Header />
            <div className={styles.Allwrapper}>
            <Sidebar />
            <main className={styles.main}>
                <section className={styles.top}>
                    <div className={styles.container1}>
                        <div className={styles.top__wrapper}>
                            <div className={styles.zaeb}>
                                
                                <h1 className={styles.greetings}>Переменные и типы данных</h1>
                                <div className={styles["content-wrapper"]}>
                                    <video controls className={styles.video}>
                                        <source src={python} type="video/mp4" />
                                        Ваш браузер не поддерживает видео в формате MP4.
                                    </video>
                                </div>
                                <div className={styles["step-buttons-container"]}>
                                <Link to="/1_3py">
                                           <button className={styles["step-button"]}>Шаг назад</button>
                                        </Link>
                                        <Link to="/course_textPY1">
                                           <button className={styles["step-button"]}>Шаг вперед</button>
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            </div>
            <Footer />
        </div>
    );
}

export default VideocoursePY1;
