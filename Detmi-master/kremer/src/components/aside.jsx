import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/python/python_introduce.module.css';
import Header from "./headers/headerPython";
import Footer from "./footer/footerPY";

export default function AsideIntro(props) {
    return (
        <aside className={styles['aside-right']} id="asidee">
            <Header />

            <div className={styles['button__wrapper']}>
                <Link to="/videocoursePY" className={styles['button__link']}>
                    <button 
                        className={styles['button__link-to-course']} 
                        type="button" 
                        id="button__course"
                    >
                        ПЕРЕЙТИ НА КУРС
                    </button>
                </Link>
            </div>
            
            <div className={styles['course-info']}>
                <div>
                    <h1 className={styles.title}>
                   
                        Курс по Python
                       
                    </h1>
                    
                </div>
                <div className={styles['intro-block']}>
                    <p><strong>Что вас ждет:</strong></p>
                    <p>Данный курс является вводным по языку Python, в нем рассматриваются базовые структуры. После каждой темы идут практические задания.</p>
                </div>
                <div className={styles['for-whom-block']}>
                    <p><strong>Для кого подойдет данный курс?</strong></p>
                    <p>Данный курс подойдет для тех, кто еще совсем не знаком с данным языком программирования, но имеет огромное желание изучить его. Данный курс станет для вас путеводителем в него.</p>
                </div>
                <div className={styles['course-program']}>
                    <p><strong>Программа курса:</strong></p>
                    <ul>
                        <li>Общая информация о курсе</li>
                        <li>Основные типы данных</li>
                        <li>Как проходить курс?</li>
                        <li>Для преподавателей и работы в группах</li>
                        <li>Введение. Знакомство с Python</li>
                        <li>Команды print и input</li>
                        <li>Параметры sep и end</li>
                        <li>Целочисленная арифметика. Часть 1</li>
                        <li>Целочисленная арифметика. Часть 2</li>
                        <li>Цикл for</li>
                        <li>Цикл for: функция range</li>
                        <li>Частые сценарии</li>
                        <li>Цикл while</li>
                        <li>Цикл while: обработка цифр числа</li>
                        <li>break, continue и else</li>
                        <li>Поиск ошибок и ревью кода</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </aside>
    );
}
