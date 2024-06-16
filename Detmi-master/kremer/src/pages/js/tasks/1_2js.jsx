import React, { useState } from 'react';
import styles from "../../../styles/js/tasks.module.css";
import Header from "../../../components/headers/headerJS";
import Footer from "../../../components/footer/footerJS";
import { Link } from 'react-router-dom';
import SidebarJs from '../../sidebarJS';

function JS1_2() {
    const [selectedOptions, setSelectedOptions] = useState(Array(5).fill('')); // Хранение выбранных ответов
    const [submitted, setSubmitted] = useState(false); // Состояние для отслеживания отправки ответов

    // Вопросы и варианты ответов
    const questions = [
        {
            question: 'Как объявить переменную в JavaScript?',
            options: ['A) let myVariable', 'B) var myVariable', 'C) const myVariable', 'D) let = myVariable', 'E) list'],
            correctAnswer: 'C) const myVariable',
        },
        {
            question: 'Какое ключевое слово используется для объявления переменной, которая не будет меняться?',
            options: ['A) let', 'B) const', 'C) var', 'D) fixed'],
            correctAnswer: 'B) const',
        },
        {
            question: 'Как объявить массив в JavaScript?',
            options: ['A) let colors = {"red", "green", "blue"}', 'B) var colors = ["red", "green", "blue"];', 'C) array colors = ["red", "green", "blue"];', 'D) colors = ["red", "green", "blue"];'],
            correctAnswer: 'B) var colors = ["red", "green", "blue"];',
        },
        {
            question: 'Какие символы используются для создания комментариев в JavaScript?',
            options: ['A) // и /*', 'B) <!-- и -->', 'C) {} и []', 'D) -- и ++'],
            correctAnswer: 'A) // и /*',
        },
        {
            question: 'Как объединить две строки в JavaScript?',
            options: ['A) join()', 'B) merge()', 'C) concatenate()', 'D) +'],
            correctAnswer: 'D) +',
        },
    ];

    const handleOptionChange = (index, selectedOption) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = selectedOption;
        setSelectedOptions(newSelectedOptions);
    };

    const handleCheckAnswers = () => {
        // Проверка ответов
        const correctAnswers = questions.every((question, index) =>
            question.correctAnswer.trim().toLowerCase() === selectedOptions[index].trim().toLowerCase()
        );

        if (correctAnswers) {
            alert('УМНИЧКА!');
        } else {
            alert('ПОПРОБУЙ ЕЩЕ РАЗ!');
        }

        setSubmitted(true); // Устанавливаем состояние отправки ответов
    };

    const handleResetAnswers = () => {
        setSelectedOptions(Array(5).fill('')); // Сброс выбранных ответов
        setSubmitted(false); // Сброс состояния отправки ответов
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.Allwrapper}>
            <SidebarJs/>
            <div className={styles.content}>
                <h1 className={styles.title}>Задание №2</h1>
                {questions.map((question, index) => (
                    <div key={index} className={styles.question}>
                        <h3>{question.question}</h3>
                        <ul className={styles.options}>
                            {question.options.map((option, optionIndex) => (
                                <li key={optionIndex}>
                                    <label className={`${styles.optionLabel} ${submitted && selectedOptions[index] !== question.correctAnswer && selectedOptions[index] === option && styles.wrong}`}>
                                        <input
                                            type="radio"
                                            value={option}
                                            checked={selectedOptions[index] === option}
                                            onChange={() => handleOptionChange(index, option)}
                                        />
                                        {option}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className={styles.buttonGroup}>
                    <button className={styles.button} onClick={handleCheckAnswers}>Проверить</button>
                    <button className={styles.button} onClick={handleResetAnswers}>Сбросить ответы</button>
                </div>
                <div className={styles["step-buttons-container"]}>
                    <Link to="/1_1js">
                        <button className={styles["step-button"]}>Шаг назад</button>
                    </Link>
                    <Link to="/1_3js">
                        <button className={styles["step-button"]}>Шаг вперед</button>
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default JS1_2;
