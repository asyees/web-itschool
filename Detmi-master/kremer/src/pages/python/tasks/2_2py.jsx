
import React, { useState } from 'react';
import styles from "../../../styles/python/tasks.module.css";
import Header from "../../../components/headers/headerPython";
import Footer from "../../../components/footer/footerPY";
import { Link } from 'react-router-dom';
import Sidebar from '../../sidebar';
function Python2_2() {
    const [selectedOptions, setSelectedOptions] = useState(Array(5).fill('')); // Хранение выбранных ответов
    const [submitted, setSubmitted] = useState(false); // Состояние для отслеживания отправки ответов

    // Вопросы и варианты ответов
    const questions = [
        {
            question: 'Какой символ используется для присваивания значения переменной в Python?',
            options: ['A) =', 'B) ==', 'C) :', 'D) ->', 'E) :='],
            correctAnswer: 'A) =',
        },
        {
            question: 'Какие из перечисленных типов данных в Python относятся к неизменяемым типам?',
            options: ['A) int', 'B) float', 'C) str', 'D) list', 'E) tuple'],
            correctAnswer: 'E) tuple',
         } ,
        {
            question: 'Что произойдет, если попытаться сложить переменные разных типов данных в Python?',
            options: ['A) Ошибка', 'B) Преобразование типов', 'C) Интерпретатор выберет тип автоматически', 'D) Результат будет равен 0', 'E) Результат будет равен 1'],
            correctAnswer: 'B) Преобразование типов',
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
                    <Link to="/2_1py">
                        <button className={styles["step-button"]}>Шаг назад</button>
                    </Link>
                    <Link to="/2_3py">
                        <button className={styles["step-button"]}>Шаг вперед</button>
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Python2_2;
