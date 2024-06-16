import React, { useEffect } from 'react';
import Header from "../../../components/headers/headerCPP";
import Footer from "../../../components/footer/footerCPP";
import styles from "../../../styles/cpp/CPPcourseText.module.css";
import arrow1_img from "../../../images/arrow1.png";
import pdf from "../../../images/Python1.pdf";
import { Link } from 'react-router-dom';
import SidebarCPP from '../../sidebarCPP';
function Course_textC1() {
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
            <SidebarCPP/>
            <div className={styles.widthWrap}>
                <div className={styles.centeredText}>
                    <p><strong>СЛОЖНЫЕ КОНСТРУКЦИИ. ОПЕРАТОРЫ IF-ELSE, SWITCH-CASE</strong></p>
                    <p>Оператор if-else</p>
                    <p><strong>- Синтаксис оператора if:</strong></p>
                    <pre className={styles.codeBlock}>
                        <p>if (условие)</p>
                    </pre>
                    <p><strong>Оператор else позволяет выполнить другой блок кода, если условие оператора if ложно.</strong></p>
                    <p>- Синтаксис оператора if-else:</p>
                    <pre className={styles.codeBlock}>
                        <p>if (условие) &#123;</p>
                        <p>    // код, если условие истинно</p>
                        <p>&#125; else &#123;</p>
                        <p>    // код, если условие ложно</p>
                        <p>&#125;</p>
                    </pre>
                    <p><strong>Примеры использования</strong></p>
                    <pre className={styles.codeBlock}>
                        <p>int number = 10;</p>
                        <p>float pi = 3.14;</p>
                        <p>char letter = 'A';</p>
                        <p>bool isTrue = true;</p>
                    </pre>
                    <pre className={styles.codeBlock}>
                        <p>- Взаимодействие с переменными:</p>
                        <p>int a = 5;</p>
                        <p>int b = 3;</p>
                        <p>int sum = a + b;</p>
                        <p>float average = (a + b) / 2.0;</p>
                    </pre>
                    <p><strong>Приведение типов (Type Casting)</strong></p>
                    <pre className={styles.codeBlock}>
                        <p>- Явное приведение типов позволяет изменить тип переменной.</p>
                        <p>- Пример явного приведения типа:</p>
                        <p>double num1 = 3.14;</p>
                        <p>int num2 = static_cast&lt;int&gt;(num1);</p>
                        <p>char letter = 'A';</p>
                        <p>bool isTrue = true;</p>
                    </pre>
                    <div className={styles.pdf}>
                        <a href={pdf} download>Скачать материал</a>
                    </div>
                </div>
                <div className={styles.stepButtonsContainer}>
                    <Link to="/videocourseCPP2">
                        <button className={styles.stepButton}>Шаг назад</button>
                    </Link>
                    <Link to="/2_1cpp">
                        <button className={styles.stepButton}>Шаг вперед</button>
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Course_textC1;
