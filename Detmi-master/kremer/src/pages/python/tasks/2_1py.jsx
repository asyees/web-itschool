
import React, { useState } from 'react';
import styles from "../../../styles/python/tasks.module.css";
import Header from "../../../components/headers/headerPython";
import Footer from "../../../components/footer/footerPY";
import { Link } from 'react-router-dom';
import Sidebar from '../../sidebar';
function Python2_1() {
    const [selectedOptions, setSelectedOptions] = useState(Array(5).fill('')); // Хранение выбранных ответов
    const [submitted, setSubmitted] = useState(false); // Состояние для отслеживания отправки ответов

    // Вопросы и варианты ответов
    const questions = [
        {
            question: ' Какой тип данных используется для хранения целых чисел в Python?',
            options: ['A) int', 'B) float', 'C) str', 'D) bool', 'E) list'],
            correctAnswer: 'A) int',
        },
        {
            question: 'Как объявить переменную в Python?',
            options: ['A)variable = 10', 'B)var 10 = variable', 'C)variable := 10', 'D)variable == 10', 'E)variable -> 10'],
            correctAnswer: 'A)variable = 10',
        },
        {
                question: 'Какой тип данных используется для хранения дробных чисел в Python?',
                options: ['A) int', 'B) float', 'C) str', 'D) list', 'E) bool'],
                correctAnswer: 'B) float' ,
        },
             {   question: 'Какой тип данных используется для хранения текстовой информации в Python?',
                options: ['A) int', 'B) float', 'C) str', 'D) list', 'E) bool'],
                correctAnswer: 'C) str',
        },
            {
                question: 'Какой тип данных используется для хранения логических значений True или False в Python?',
                options: ['A) int', 'B) float', 'C) str', 'D) list', 'E) bool'],
                correctAnswer: 'E) bool',
            }

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
             <Sidebar />
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
                    <Link to="/course_textPY1">
                        <button className={styles["step-button"]}>Шаг назад</button>
                    </Link>
                    <Link to="/2_2py">
                        <button className={styles["step-button"]}>Шаг вперед</button>
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Python2_1;
