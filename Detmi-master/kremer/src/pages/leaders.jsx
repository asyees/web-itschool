import React, { useState, useEffect } from 'react';
import styles from "../styles/leaders.module.css";
import Header from "../components/headers/header";
import Footer from "../components/footer/footer";
import axios from 'axios';

const Leaders = () => {

    const [leaders, setLeaders] = useState([]);

    const fetch = async () =>{
       await axios
        .get("http://localhost:5000/api/leaderboard",{
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            }
        })
        .then((response) => {
            console.log(response.data);
            setLeaders(response.data.leaders);
        });
    }

    useEffect(() => {
        fetch();
     }, []);

    return (
        <div>
            <Header />
            <div className={styles.leaders}>
                <h2 className={styles.title}>Таблица лидеров</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Никнейм</th>
                            <th>Количество баллов</th>
                            <th>Ранг</th>
                        </tr>
                    </thead>
                    <tbody>
                    {leaders.length > 0 && leaders.map((leader) => (
                         <tr>
                         <th>{leader.user.nickname}</th>
                         <th>{leader.rating}</th>
                         <th>{leader.rating > 90 ? "Опытный" : "Новичок"}</th>
                     </tr>
                    ))}
                        
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}

export default Leaders;