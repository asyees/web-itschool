import React, { useState } from 'react';
import styles from "../../../styles/cpp/tasks.module.css";
import Header from "../../../components/headers/headerCPP";
import Footer from "../../../components/footer/footerCPP";
import { Link } from 'react-router-dom';
import SidebarCPP from '../../sidebarCPP';
function CPP2_1() {
    const [selectedOptions, setSelectedOptions] = useState(Array(5).fill('')); // Хранение выбранных ответов
    const [submitted, setSubmitted] = useState(false); // Состояние для отслеживания отправки ответов

    // Вопросы и варианты ответов
    const questions = [
        {
            question: 'Какой оператор используется для проверки условия в C++?',
            options: ['A) if', 'B) for', 'C) while', 'D) switch', 'E) case'],
            correctAnswer: 'A) if',
        },
        {
            question: 'Какой оператор используется для выполнения кода, если условие оператора if ложно?',
            options: ['A) else', 'B) elseif', 'C) else if', 'D) otherwise', 'E) endif'],
            correctAnswer: 'A) else',
        },
        {
            question: 'Какой оператор используется для проверки множественных условий в C++?',
            options: ['A) if', 'B) else', 'C) switch', 'D) while', 'E) for'],
            correctAnswer: 'C) switch',
        },
        {
            question: 'Какой оператор используется для завершения выполнения текущей итерации цикла и перехода к следующей итерации?',
            options: ['A) break', 'B) continue', 'C) return', 'D) exit', 'E) pass'],
            correctAnswer: 'B) continue',
        },
        {
            question: 'Как называется оператор, используемый для выхода из цикла или блока switch в C++?',
            options: ['A) break', 'B) continue', 'C) return', 'D) exit', 'E) pass'],
            correctAnswer: 'A) break',
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
            <SidebarCPP/>
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
                    <Link to="/course_textC1">
                        <button className={styles["step-button"]}>Шаг назад</button>
                    </Link>
                    <Link to="/2_2cpp">
                        <button className={styles["step-button"]}>Шаг вперед</button>
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default CPP2_1;
