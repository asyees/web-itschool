import React, { useState } from 'react';
import styles from "../../../styles/js/tasks.module.css";
import Header from "../../../components/headers/headerJS";
import Footer from "../../../components/footer/footerJS";
import { Link } from 'react-router-dom';
import SidebarJs from '../../sidebarJS';

function JS2_1() {
    const [selectedOptions, setSelectedOptions] = useState(Array(5).fill('')); // Хранение выбранных ответов
    const [submitted, setSubmitted] = useState(false); // Состояние для отслеживания отправки ответов

    // Вопросы и варианты ответов
    const questions = [
        {
            question: 'Какой оператор используется для сложения двух чисел в JavaScript?',
            options: ['A) +', 'B) -', 'C) *', 'D) /', 'E) %'],
            correctAnswer: 'A) +',
        },
        {
            question: 'Какой оператор используется для вычитания одного числа из другого в JavaScript?',
            options: ['A) +', 'B) -', 'C) *', 'D) /', 'E) %'],
            correctAnswer: 'B) -',
        },
        {
            question: 'Какой оператор используется для умножения двух чисел в JavaScript?',
            options: ['A) +', 'B) -', 'C) *', 'D) /', 'E) %'],
            correctAnswer: 'C) *',
        },
        {
            question: 'Какой оператор используется для деления одного числа на другое в JavaScript?',
            options: ['A) +', 'B) -', 'C) *', 'D) /', 'E) %'],
            correctAnswer: 'D) /',
        },
        {
            question: 'Какой оператор используется для получения остатка от деления одного числа на другое в JavaScript?',
            options: ['A) +', 'B) -', 'C) *', 'D) /', 'E) %'],
            correctAnswer: 'E) %',
        },
        {
            question: 'Какой оператор используется для возведения числа в степень в JavaScript?',
            options: ['A) **', 'B) ^', 'C) //', 'D) %', 'E) ++'],
            correctAnswer: 'A) **',
        },
        {
            question: 'Какой метод используется для нахождения квадратного корня числа в JavaScript?',
            options: ['A) Math.sqrt()', 'B) sqrt()', 'C) Math.pow()', 'D) root()', 'E) Math.square()'],
            correctAnswer: 'A) Math.sqrt()',
        },
        {
            question: 'Как называется операция, при которой остаток от деления числа возвращается?',
            options: ['A) Деление', 'B) Модульное деление', 'C) Умножение', 'D) Сложение', 'E) Вычитание'],
            correctAnswer: 'B) Модульное деление',
        },
        {
            question: 'Что произойдет, если вы сложите число и строку в JavaScript?',
            options: ['A) Произойдет ошибка', 'B) Число будет приведено к строке и произойдет конкатенация', 'C) Строка будет приведена к числу и произойдет сложение', 'D) Ничего не произойдет', 'E) Результат будет undefined'],
            correctAnswer: 'B) Число будет приведено к строке и произойдет конкатенация',
        },
        {
            question: 'Какой оператор используется для инкрементации значения переменной на 1?',
            options: ['A) ++', 'B) --', 'C) **', 'D) %', 'E) +'],
            correctAnswer: 'A) ++',
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
        setSelectedOptions(Array(10).fill('')); // Сброс выбранных ответов
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
                    <Link to="/course_textJS2">
                        <button className={styles["step-button"]}>Шаг назад</button>
                    </Link>
                    <Link to="/2_2js">
                        <button className={styles["step-button"]}>Шаг вперед</button>
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default JS2_1;
