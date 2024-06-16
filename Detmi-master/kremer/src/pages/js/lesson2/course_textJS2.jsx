import React, { useEffect } from 'react';
import Header from "../../../components/headers/headerJS"; // Проверьте правильность пути
import Footer from "../../../components/footer/footerJS"; // Проверьте правильность пути
import styles from "../../../styles/js/course_textJS1.module.css"; // Проверьте правильность пути
//import arrow1_img from "../../../images/arrow1.png"; // Проверьте правильность пути
import { Link } from 'react-router-dom';
import SidebarJs from '../../sidebarJS';
function Course_textJS2() {
    useEffect(() => {
        // Добавляем класс к body при монтировании компонента
        document.body.classList.add(styles.bodyYellowBackground);

        // Удаляем класс из body при размонтировании компонента
        return () => {
            document.body.classList.remove(styles.bodyYellowBackground);
        };
    }, []);

    return (
        <div>
            <Header />
            <div className={styles.Allwrapper}>
            <SidebarJs/>
            <div className={styles.widthWrap}>
                <div className={styles.centeredText}>
                    <p><strong>МАТЕМАТИЧЕСКИЕ ДЕЙСТВИЯ</strong></p>
                    <p>
                        <p>Сложение</p>
                        <p>Для сложения двух чисел используйте оператор +.</p>
                    </p>
                    <pre className={styles.codeBlock}>
                        let sum = 5 + 3; // sum равен 8
                    </pre>
                    <p>Вычитание</p>
                    <p>Для вычитания одного числа из другого используйте оператор -.</p>
                    <pre className={styles.codeBlock}>
                        let difference = 10 - 4; // difference равен 6
                    </pre>
                    <p>Умножение</p>
                    <p>Для умножения двух чисел используйте оператор *</p>
                    <pre className={styles.codeBlock}>
                        let product = 6 * 7; // product равен 42
                    </pre>
                    <p>Деление</p>
                    <p>Для деления одного числа на другое используйте оператор /</p>    
                    <pre className={styles.codeBlock}>
                        let quotient = 20 / 4; // quotient равен 5
                    </pre>
                    <p>Остаток от деления (Modulo)</p>
                    <p>Для получения остатка от деления используйте оператор %.</p>
                    <pre className={styles.codeBlock}>
                        let remainder = 10 % 3; // remainder равен 1 (остаток от деления 10 на 3)
                    </pre>
                    <p>Возведение в степень</p>
                    <p>Для возведения числа в степень используйте оператор **</p>
                    <pre className={styles.codeBlock}>
                        let power = 2 ** 3; // power равен 8 (2 в третьей степени)
                    </pre>
                    <a href="pdf/python1.pdf" download className={styles.downloadLink}>Скачать материал</a>
                </div>
                <div className={styles.stepButtonsContainer}>
                    <Link to="/videocourseJS2">
                        <button className={styles.stepButton}>Назад</button>
                    </Link>
                    <Link to="/2_1js">
                        <button className={styles.stepButton}>Вперед</button>
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Course_textJS2;
