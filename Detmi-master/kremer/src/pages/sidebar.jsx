// Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/sidebar.module.css";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <h3></h3>
            <ul>
                <li>
                    <Link to="/videocoursePY">Введение в курс</Link>
                </li>
                <li>
                    <Link to="/videocoursePY1">Базовые операции в языке Python</Link>
                </li>
                <li>
                    <Link to="/course_textPY">ЧИСЛА И ОПЕРАЦИИ НАД НИМИ</Link>
                </li>
                <li>
                    <Link to="/1_1py">Задание №1</Link>
                </li>
                <li>
                    <Link to="/1_2py">Задание №2</Link>
                </li>
                <li>
                    <Link to="/1_3py">Задание №3</Link>
                </li>
                <li>
                    <Link to="/videocoursePY2">Переменные и типы данных</Link>
                </li>
                <li>
                    <Link to="/course_textPY1">ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ PYTHON</Link>
                </li>
                <li>
                    <Link to="/2_1py">Задание №1</Link>
                </li>
                <li>
                    <Link to="/2_2py">Задание №2</Link>
                </li>
                <li>
                    <Link to="/2_3py">Задание №3</Link>
                </li>
                <li>
                    <Link to="/2_3py">Параметры sep и end</Link>
                </li>
                <li>
                    <Link to="/2_1py">Задание №1</Link>
                </li>
                <li>
                    <Link to="/2_2py">Задание №2</Link>
                </li>
                <li>
                    <Link to="/2_3py">Задание №3</Link>
                </li>
                <li>
                    <Link to="/2_3py">Цикл for</Link>
                </li>
                <li>
                    <Link to="/2_1py">Задание №1</Link>
                </li>
                <li>
                    <Link to="/2_2py">Задание №2</Link>
                </li>
                <li>
                    <Link to="/2_3py">Задание №3</Link>
                </li>
                <li>
                    <Link to="/2_3py">Цикл while</Link>
                </li>
                <li>
                    <Link to="/2_1py">Задание №1</Link>
                </li>
                <li>
                    <Link to="/2_2py">Задание №2</Link>
                </li>
                <li>
                    <Link to="/2_3py">Задание №3</Link>
                </li>
                <li>
                    <Link to="/2_3py">Break, continue и else</Link>
                </li>
                <li>
                    <Link to="/2_1py">Задание №1</Link>
                </li>
                <li>
                    <Link to="/2_2py">Задание №2</Link>
                </li>
                <li>
                    <Link to="/2_3py">Задание №3</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
