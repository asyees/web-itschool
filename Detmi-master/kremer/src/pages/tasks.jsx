import styles from "../styles/tasks.module.css";
import Header from "../components/headers/header";
import Footer from "../components/footer/footer";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const Tasks = () =>  {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const token = window.localStorage.getItem('token');
            const response = await axios.get("http://localhost:5000/api/tasks", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response)
            setTasks(response.data.tasks);
        } catch (error) {
            console.error("Ошибка при получении данных", error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);
        return (
        <div>
            <Header />
            <div className={styles.tasks}>
                <h2 className={styles.title}>ЗАДАЧИ</h2>
                <table>
            <thead>
                <tr>
                    <th>Номер задачи</th>
                    <th>Название</th>
                    <th>Рейтинг</th>
                    <th>Статус</th>
                </tr>
            </thead>
            <tbody>
            {tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td><Link to={`/tasks/${task.id}`}>{task.title}</Link></td>
                        <td>{task.rating}</td>
                        <td>{task.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
            </div>
            <Footer />
        </div>
    );
}


export default Tasks;