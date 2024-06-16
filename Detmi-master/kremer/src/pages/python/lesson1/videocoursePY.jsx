import React, { useState, useEffect } from 'react';
import Header from "../../../components/headers/headerPython";
import Footer from "../../../components/footer/footerPY";
import styles from "../../../styles/python/videocoursePY.module.css"; 
import python from "../../../images/python.mp4";
import { Link } from 'react-router-dom';
import Sidebar from '../../sidebar';
function VideocoursePY() {
    const [isPanelOpen, setPanelOpen] = useState(false);

    useEffect(() => {
        // Добавляем класс к body при монтировании компонента
        document.body.classList.add(styles.bodyGreenBackground);

        // Удаляем класс из body при размонтировании компонента
        return () => {
            document.body.classList.remove(styles.bodyGreenBackground);
        };
    }, []);

    const togglePanel = () => {
        setPanelOpen(!isPanelOpen);
    };

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
                                <h1 className={styles.greetings}>ВВЕДЕНИЕ В КУРС</h1>
                                <div className={styles["content-wrapper"]}>
                                    <video controls className={styles.video}>
                                        <source src={python} type="video/mp4" />
                                        Ваш браузер не поддерживает видео в формате MP4.
                                    </video>
                                </div>
                                <div className={styles["step-buttons-container"]}>
                                <Link to='/courses'>
                                    <button className={styles["step-button"]}>Назад</button>
                                    </Link>
                                    <Link to="/videocoursePY1">
                                        <button className={styles["step-button"]}>Далее</button>
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

export default VideocoursePY;
