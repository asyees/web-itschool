import React, { useState } from 'react';
import styles from "../../../styles/python/tasks.module.css";
import Header from "../../../components/headers/headerPython";
import Footer from "../../../components/footer/footerPY";
import { Link } from 'react-router-dom';
import Sidebar from '../../sidebar';
function Python1_2() {
    const [selectedOptions, setSelectedOptions] = useState(Array(5).fill('')); // Хранение выбранных ответов
    const [submitted, setSubmitted] = useState(false); // Состояние для отслеживания отправки ответов

    // Вопросы и варианты ответов
    const questions = [
        {
            question: 'В Python оператор “%” является:',
            options: ['A) Оператором умножения', 'B) Оператором деления', 'C) Оператором остатка от деления', 'D) Оператором вычитания', 'E) Оператором сложения'],
            correctAnswer: 'C) Оператором остатка от деления',
        },
        {
            question: 'Что произойдет при выполнении этого кода: print(3*5)',
            options: ['A) Выведется 3', 'B) Выведется 5', 'C) Выведется 8', 'D) Выведется 15', 'E) Выведется 35'],
            correctAnswer: 'D) Выведется 15',
        },
        {
            question: 'Что произойдет при выполнении этого кода: print(“A” + “B”)',
            options: ['A) Выведется A', 'B) Выведется B', 'C) Выведется AB', 'D) Выведется BA', 'E) Выведется Error'],
            correctAnswer: 'C) Выведется AB',
        },
        {
            question: 'Что произойдет при выполнении этого кода: print(7 % 2)',
            options: ['A) Выведется 7', 'B) Выведется 2', 'C) Выведется 1', 'D) Выведется 0', 'E) Выведется Error'],
            correctAnswer: 'C) Выведется 1',
        },
        {
            question: 'Какой тип данных используется для хранения целых чисел в Python?',
            options: ['A) int', 'B) float', 'C) str', 'D) bool', 'E) list'],
            correctAnswer: 'A) int',
        },
    ];
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
    
    const handleOptionChange = (index, selectedOption) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = selectedOption;
        setSelectedOptions(newSelectedOptions);
    };

    

    const handleResetAnswers = () => {
        setSelectedOptions(Array(5).fill('')); // Сброс выбранных ответов
        setSubmitted(false); // Сброс состояния отправки ответов
    };

    return (
        <div className={styles.container}>
            <Header /> 
            <div className={styles.Allwrapper}>
            <Sidebar />
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
                    <Link to="/1_1py">
                        <button className={styles["step-button"]}>Шаг назад</button>
                    </Link>
                    <Link to="/1_3py">
                        <button className={styles["step-button"]}>Шаг вперед</button>
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Python1_2;
