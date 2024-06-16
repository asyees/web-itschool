import React, { useEffect } from 'react';
import Header from "../../../components/headers/headerCPP";
import Footer from '../../../components/footer/footerCPP';
import styles from "../../../styles/cpp/CPPcourseText.module.css";
import arrow1_img from "../../../images/arrow1.png";
import { Link } from 'react-router-dom';
import SidebarCPP from '../../sidebarCPP';
function Course_textC() {
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
                    <p><strong>ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ C++</strong></p>
                    <p>
                        Переменная - это именованное место
                        в памяти, которое хранит значение определенного типа.
                        Для объявления переменной в C++ используется следующий
                        синтаксис: тип_данных имя_переменной
                    </p>
                    <pre className={styles.codeBlock}>int age;</pre>
                    <p><strong>Типы данных в C++</strong></p>
                    <p><strong>Целочисленные типы данных</strong></p>
                    <pre className={styles.codeBlock}>
                        <p>- int: целое число.</p>
                        <p>- short: короткое целое число.</p>
                        <p>- long: длинное целое число.</p>
                        <p>- long long: очень длинное целое число.</p>
                    </pre>
                    <p><strong>Типы данных с плавающей запятой</strong></p>
                    <pre className={styles.codeBlock}>
                        <p>- float: число с плавающей запятой одинарной точности.</p>
                        <p>- double: число с плавающей запятой двойной точности.</p>
                    </pre>
                    <p><strong>Символьные типы данных</strong></p>
                    <pre className={styles.codeBlock}><p>- char: символ.</p></pre>
                    <p><strong>Логический тип данных</strong></p>
                    <pre className={styles.codeBlock}><p>- bool: логическое значение (true или false).</p></pre>
                    <p><strong>Примеры использования</strong></p>
                    <pre className={styles.codeBlock}>
                        <p>- Объявление переменных различных типов:</p>
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
                        <p>int num2 = static_cast(num1);</p>
                        <p>char letter = 'A';</p>
                        <p>bool isTrue = true;</p>
                    </pre>
                    {/*<div src={pdf} className="pdf">
                        <a href="/Python1.pdf" download>Скачать материал</a>
                    </div>*/}
                </div>
                <div className={styles.stepButtonsContainer}>
                    <Link to="/videocourseCPP1">
                        <button className={styles.stepButton}>Шаг назад</button>
                    </Link>
                    <Link to="/1_1cpp">
                        <button className={styles.stepButton}>Шаг вперед</button>
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Course_textC;
