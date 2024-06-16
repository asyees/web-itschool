import React, { useEffect } from 'react';
import Header from "../../../components/headers/headerJS";
import Footer from "../../../components/footer/footerJS";
import styles from "../../../styles/js/course_textJS1.module.css";
import { Link } from 'react-router-dom';
import SidebarJs from '../../sidebarJS';
function Course_textJS1() {
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
                    <p><strong>ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ В JAVASCRIPT</strong></p>
                    <p>Переменные:</p>
                    <p>- Переменные в JavaScript используются для хранения данных и значений.</p>
                    <p>- Для объявления переменной используется ключевое слово "let" или "const".</p>
                    <p>- Примеры объявления переменных:</p>
                    <pre className={styles.codeBlock}>
                        let age = 25;<br />
                        const name = "Alice";
                    </pre>
                    <p>Типы данных:</p>
                    <p>JavaScript поддерживает следующие типы данных:</p>
                    <p>- Числа (Numbers): целые числа и числа с плавающей точкой.</p>
                    <pre className={styles.codeBlock}>
                        let num = 10;<br />
                        let pi = 3.14;
                    </pre>
                    <p>- Строки (Strings): последовательности символов в кавычках</p>
                    <pre className={styles.codeBlock}>
                        let message = "Hello, World!";
                    </pre>
                    <p>- Булевый тип (Boolean): логический тип данных, принимает значения true или false.</p>
                    <pre className={styles.codeBlock}>
                        let isStudent = true;
                    </pre>
                    <p>Динамическая типизация:</p>
                    <p>JavaScript является языком с динамической типизацией, что означает, что переменные могут содержать значения различных типов.</p>
                    <pre className={styles.codeBlock}>
                        let value = 42; // value содержит число<br />
                        value = "Hello"; // теперь value содержит строку
                    </pre>
                    <p>Приведение типов:</p>
                    <p>JavaScript автоматически выполняет приведение типов в некоторых случаях, например, при выполнении операций с разными типами данных.</p>
                    <pre className={styles.codeBlock}>
                        let num = 10;<br />
                        let strNum = "20";<br />
                        let sum = num + strNum; // Результат будет "1020", так как произойдет конкатенация строк
                    </pre>
                    <p>- Массивы (Arrays): упорядоченные коллекции элементов.</p>
                    <pre className={styles.codeBlock}>
                        let colors = ["red", "green", "blue"];
                    </pre>
                    <a href="pdf/python1.pdf" download className={styles.downloadLink}>Скачать материал</a>
                </div>
                <div className={styles["stepButtonsContainer"]}>
                    <Link to="/videocourseJS1">
                        <button className={styles.stepButton}>Шаг назад</button>
                    </Link>
                    <Link to="/1_1js">
                        <button className={styles.stepButton}>Шаг вперед</button>
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Course_textJS1;
