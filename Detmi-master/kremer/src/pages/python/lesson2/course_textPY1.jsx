import React from 'react';
import Header from "../../../components/headers/headerPython";
import Footer from  "../../../components/footer/footerPY";
import styles from "../../../styles/python/course_textPY.module.css";
import arrow1_img from "../../../images/arrow1.png";
import { Link } from 'react-router-dom';
import Sidebar from '../../sidebar';
function Course_textPY1() {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <div className={styles.Allwrapper}>
            <Sidebar />
            
            <div className={styles.widthWrap}>
            <div className={styles.centeredText}>
                <p><strong>ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ PYTHON</strong></p>
                <p>
                    Переменная в Python - это имя, которое связывается с объектом (значением)
                    в памяти компьютера. В Python переменные не требуют объявления 
                    типа данных; тип данных определяется автоматически при присваивании 
                    значения переменной.
                </p>
        
                <pre className={styles.codeBlock}>
                    {`
x = 5  # x является целым числом (int)
name = "Alice"  # name является строкой (str) 
is_student = True  # is_student является логическим значением (bool)
my_list = [1, 2, 3]  # my_list является списком (list)
my_dict = {"key value"}  # my_dict является словарем (dict)
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
            </div>

            <div className={styles.stepButtonsContainer}>
                <Link to="/videocoursePY2">
                    <button className={styles.stepButton}>Шаг назад</button>
                </Link>
                <Link to="/2_1py">
                    <button className={styles.stepButton}>Шаг вперед</button>
                </Link>
            </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Course_textPY1;
