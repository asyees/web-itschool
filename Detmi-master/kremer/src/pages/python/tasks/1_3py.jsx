import React, { useState } from 'react';
import styles from "../../../styles/python/tasks.module.css";
import Header from "../../../components/headers/headerPython";
import Footer from "../../../components/footer/footerPY";
import { Link } from 'react-router-dom';
import Sidebar from '../../sidebar';
import { sendTask } from '../../../compilator';
function Python1_3(){
    const input = "1 2"
    const output = "3"
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
            {/* <div class="sec-widget" data-widget="e5b40b2c4700fa274dfd0b5749e6fa98"></div> */}
            <div className={styles.content}>
                <div className={styles.task}>
                    <h1>Задача №3</h1>
                    <p>
        
                        Напишите программу, которая будет считать сумму двух чисел введенных с клавиатуры.
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
                    <Link to="/1_2py">
                        <button className={styles["step-button"]}>Шаг назад</button>
                    </Link>
                    <Link to="/videocoursePY2">
                        <button className={styles["step-button"]}>Шаг вперед</button>
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}
export default Python1_3;
