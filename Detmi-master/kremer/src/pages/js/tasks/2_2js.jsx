import React, { useState } from 'react';
import styles from "../../../styles/js/tasks.module.css";
import Header from "../../../components/headers/headerJS";
import Footer from "../../../components/footer/footerJS";
import { Link } from 'react-router-dom';
import SidebarJs from '../../sidebarJS';
function JS2_2(){
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
            <SidebarJs/>
            <div className={styles.content}>
                <div className={styles.task}>
                    <h1>Задача №2</h1>
                    <p>
                    Напишите программу, которая запрашивает у пользователя два числа, складывает их и выводит результат.
                    </p>
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
                    <Link to="/2_1js">
                        <button className={styles["step-button"]}>Шаг назад</button>
                    </Link>
                    <Link to="/courses">
                        <button className={styles["step-button"]}>Шаг вперед</button>
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}
export default JS2_2;
