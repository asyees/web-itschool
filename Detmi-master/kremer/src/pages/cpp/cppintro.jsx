import React from "react";
import { Link } from "react-router-dom";
import styles from '../../styles/cpp/cpp_introduce.module.css';
import Header from "../../components/headers/headerCPP";
import Footer from "../../components/footer/footerCPP";

export default function CPPIntro(props) {
    return (
        <aside className={styles['aside-right']} id="asidee">
            <Header />

            <div className={styles['button__wrapper']}>
                <Link to="/videocourseCPP" className={styles['button__link']}>
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
                        Курс по C++
                    </h1>
                </div>
                <div className={styles['intro-block']}>
                    <p className={styles.parah}><strong>Что вас ждет:</strong></p>
                    <p className={styles.about}>Данный курс является вводным по языку C++, в нем рассматриваются базовые структуры. После каждой темы идут практические задания.</p>
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
                        <li>Введение. Знакомство с C++</li>
                        <li>Основные операторы</li>
                        <li>Целочисленная арифметика и числа с плавающей точкой</li>
                        <li>Работа со строками</li>
                        <li>Циклы for и while</li>
                        <li>Функции и их использование</li>
                        <li>Указатели и ссылки</li>
                        <li>Классы и объекты</li>
                        <li>Наследование и полиморфизм</li>
                        <li>Шаблоны и стандартная библиотека шаблонов (STL)</li>
                        <li>Работа с файлами</li>
                        <li>Отладка и тестирование кода</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </aside>
    );
}
