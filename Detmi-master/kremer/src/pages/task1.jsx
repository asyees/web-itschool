import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/headers/header';
import Footer from '../components/footer/footer';
import { Sendcode } from '../compilator';
import styles from '../styles/stylesFortsk.module.css';

function Task1() {
    const { taskId } = useParams();
    const [task, setTask] = useState(null);
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');
    const langid = 71;

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const token = window.localStorage.getItem('token');
                const response = await axios.get(`http://localhost:5000/api/tasks/${taskId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setTask(response.data.task);
            } catch (error) {
                console.error("Ошибка при получении данных", error);
            }
        };
        
        fetchTask();
    }, [taskId]);

    const send = async () => {
        const response = await Sendcode(code, langid, taskId);
        setResult(response);
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.Allwrapper}>
                <div className={styles.content}>
                    <div className={styles.task}>
                        <h1>Задача №1</h1>
                        <span>{task?.text}</span> {/* Используйте опциональную цепочку для избегания ошибок, если task === null */}
                    </div>
                    <div className={styles.compiler}>
                        <h2></h2>
                        <textarea
                            className={styles.codeInput}
                            placeholder="Введите ваш код здесь..."
                            value={code}
                            onChange={e => setCode(e.target.value)}
                        />
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
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Task1;
