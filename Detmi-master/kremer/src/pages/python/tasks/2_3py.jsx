import React, { useState } from 'react';
import styles from "../../../styles/python/tasks.module.css";
import Header from "../../../components/headers/headerPython";
import Footer from "../../../components/footer/footerPY";
import { Link } from 'react-router-dom';
import Sidebar from '../../sidebar';
import { sendTask } from '../../../compilator';
function Python2_3(){
    const input = "10"
    const output = "55"
    const langid = 71
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');

    
    const send = async () => {
        const response = await sendTask(input, output, code, langid)
        console.log(response)
        setResult(response)
    }
    

    return (
        <div className={styles.container}>
            <Header /> 
            <div className={styles.Allwrapper}>
            <Sidebar />
            <div className={styles.content}>
                <div className={styles.task}>
                    <h1>Задача №3</h1>
                    <p>
        Напишите программу, которая посчитает сумму чисел от 1 до n, n вводится с клавиатуры
                
                    </p>
                </div>
                <div className={styles.compiler}>
                    <h2></h2>
                    <textarea
                    

                        className={styles.codeInput}
                        placeholder="Введите ваш код здесь..."
                        value={code}
                        onChange={e => setCode(e.target.value)}>
                    </textarea>
                    <div>
                        <button className={styles.compileButton} onClick={send}>Выполнить</button>
                        <div className={styles.result}>
                            <h3>Результат:</h3>
                            <textarea
                                value={result}
                                readOnly
                                rows="10"
                                cols="50"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles["step-buttons-container"]}>
                    <Link to="/2_2py">
                        <button className={styles["step-button"]}>Шаг назад</button>
                    </Link>
                    <Link to="/courses">
                        <button className={styles["step-button"]}>Шаг вперед</button>
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}
export default Python2_3;
