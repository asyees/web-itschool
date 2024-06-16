import React, { useState } from 'react';
import styles from "../../../styles/cpp/tasks.module.css";
import Header from "../../../components/headers/headerCPP";
import Footer from "../../../components/footer/footerCPP";
import { Link } from 'react-router-dom';
import SidebarCPP from '../../sidebarCPP';

function CPP1_2() {
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');

    const handleChange = (event) => {
        setCode(event.target.value);
    };

    const handleSubmit = () => {
        // Ваша логика для компиляции и выполнения кода здесь
        // Предположим, что результат компиляции или выполнения будет записан в переменную result
        setResult('Результат выполнения вашего кода здесь...');
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.Allwrapper}>
            <SidebarCPP/>
            <div className={styles.content}>
                <div className={styles.task}>
                    <h1>Задача №2</h1>
                    <p>
                    Напишите программу на C++, которая принимает три различных значения от пользователя, определяет их типы данных и выводит результат.
                    </p>
                    <p>Пример:</p>

                    <p>Ввод: "Hello", 123, true</p>
                    <p>Вывод:</p>
                    <p>Значение: Hello, Тип данных: string</p>
                    <p>Значение: 123, Тип данных: int</p>
                    <p>Значение: true, Тип данных: bool</p>
                </div>
                <div className={styles.compiler}>
                    <h2></h2>
                    <textarea
                        className={styles.codeInput}
                        placeholder="Введите ваш код здесь..."
                        value={code}
                        onChange={handleChange}
                    ></textarea>
                    <div>
                        <button className={styles.compileButton} onClick={handleSubmit}>Выполнить</button>
                        <div className={styles.result}>
                            <h3>Результат:</h3>
                            <p>{result}</p>
                        </div>
                    </div>
                </div>
                <div className={styles["step-buttons-container"]}>
                    <Link to="/1_1cpp">
                        <button className={styles["step-button"]}>Шаг назад</button>
                    </Link>
                    <Link to="/videocourseCPP2">
                        <button className={styles["step-button"]}>Шаг вперед</button>
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default CPP1_2;
