import React from 'react';
import Header from "../../../components/headers/headerPython";
import Footer from  "../../../components/footer/footerPY";
import styles from "../../../styles/python/course_textPY.module.css";
import arrow1_img from "../../../images/arrow1.png";
import { Link } from 'react-router-dom';
import Sidebar from '../../sidebar';
function CourseTextPY() {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <div className={styles.Allwrapper}>
                <Sidebar />
                <div className={styles.widthWrap}>
                <div className={styles.centeredText}>
                    <p><strong>ЧИСЛА И ОПЕРАЦИИ НАД НИМИ</strong></p>
                    <p>
                        Добро пожаловать на курс "Python". Сегодня мы поговорим о числах и операциях
                        над ними в Python. Python поддерживает различные типы чисел, такие как целые числа (int),
                        числа с плавающей запятой (float) и комплексные числа. Давайте рассмотрим основные 
                        операции, которые можно выполнять над этими числами.
                    </p>
                    <pre className={styles.codeBlock}>
                        {`
    a = 5
    b = 3
    print(a + b)
                        `}
                    </pre>
                    <pre className={styles.codeBlock}>
                        {`
    c = 3.14
    d = 2.718 
                        `}
                    </pre>
                    <p>Теперь давайте посмотрим на операции, которые можно выполнять над этими числами:</p>
                    <ul>
                        <li>
                            Сложение (+) и Вычитание (-):
                            <pre className={styles.codeBlock}>
                                {`
    result_sum = a + b
    result_diff = c - d
                                `}
                            </pre>
                        </li>
                        <li>
                            Умножение (*) и Деление (/):
                            <pre className={styles.codeBlock}>
                                {`
    result_mult = a * c
    result_div = b / d
                                `}
                            </pre>
                        </li>
                        <li>
                            Целочисленное деление (//) и Остаток от деления (%):
                            <pre className={styles.codeBlock}>
                                {`
    result_floor_div = a // b
    result_modulo = a % b
                                `}
                            </pre>
                        </li>
                        <li>
                            Возведение в степень () и Квадратный корень (math.sqrt()):
                            <pre className={styles.codeBlock}>
                                {`
    import math
    
    result_power = a ** 2
    result_sqrt = math.sqrt(b)
                                `}
                            </pre>
                        </li>
                    </ul>
                    <p>Это лишь малая часть операций, которые можно выполнять над числами в Python. Помните, что Python также предоставляет множество встроенных функций для работы с числами.</p>
                    <a href="pdf/python1.pdf" download className={styles.footerLink}>Скачать материал</a>
    
                </div>
                <div className={styles.stepButtonsContainer}>
                    <Link to="/videocoursePY1" className={styles.stepButton}>
                        Назад
                    </Link>
                    <Link to="/1_1py" className={styles.stepButton}>
                        Вперед
                    </Link>
                </div>
                </div>
            </div>                          
            <Footer />
        </div>
    );
}
 
export default CourseTextPY;
