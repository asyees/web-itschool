// Courses.jsx
import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/headers/header";
import Footer from  "../components/footer/footer";
import Styles from  "../styles/courses.module.css"

function Courses() {
    return (
        <>
            <Header />
            <h2 className={Styles.title}>Каталог курсов</h2>
            <div className={Styles["courses-container"]}>
            <Link to="/python_promo" className={`${Styles["course-link"]} ${Styles["python"]}`}>
                    <span>Python</span>
                </Link>
                <Link to="/jsintro" className={`${Styles["course-link"]} ${Styles["javascript"]}`}>
                    <span>JavaScript</span>
                </Link>
                <Link to="/cppintro" className={`${Styles["course-link"]} ${Styles["cplusplus"]}`}>
                    <span>C++</span>
                </Link>
            </div>
            <Footer />
        </>
    );
}

export default Courses;
