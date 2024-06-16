import React, { useState } from 'react';
import styles from "../../../styles/js/tasks.module.css";
import Header from "../../../components/headers/headerJS";
import Footer from "../../../components/footer/footerJS";
import { Link } from 'react-router-dom';
import SidebarJs from '../../sidebarJS';

function JS1_1() {
    const [selectedOptions, setSelectedOptions] = useState(Array(5).fill('')); // Хранение выбранных ответов
    const [submitted, setSubmitted] = useState(false); // Состояние для отслеживания отправки ответов

    // Вопросы и варианты ответов
    const questions = [
        {
            question: 'Какой тип данных используется для представления целых чисел в JavaScript?',
            options: ['A) int', 'B) float', 'C) number', 'D) bool', 'E) list'],
            correctAnswer: 'C) number',
        },
        {
            question: 'Какая операция выполняется для сложения двух чисел в JavaScript?',
            options: ['A) +', 'B) -', 'C) *', 'D) /', 'E) %'],
            correctAnswer: 'A) +',
        },
        {
            question: 'Какой символ используется для операции возведения числа в степень в JavaScript?',
            options: ['A) ^', 'B) **', 'C) //', 'D) %', 'E) ++'],
            correctAnswer: 'B) **',
        },
        {
            question: 'Как называется операция деления двух чисел с получением целой части в JavaScript?',
            options: ['A) /', 'B) %', 'C) //', 'D) **', 'E) *'],
            correctAnswer: 'B) %',
        },
        {
            question: 'Какой метод используется для нахождения квадратного корня числа в JavaScript?',
            options: ['A) sqrt()', 'B) pow()', 'C) sqrt2()', 'D) root()', 'E) Math.sqrt()'],
            correctAnswer: 'E) Math.sqrt()',
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
                <h1 className={styles.title}>Задание №1</h1>
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
                    <Link to="/course_textJS1">
                        <button className={styles["step-button"]}>Шаг назад</button>
                    </Link>
                    <Link to="/1_2js">
                        <button className={styles["step-button"]}>Шаг вперед</button>
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default JS1_1;
