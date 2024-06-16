import styles from "../styles/login.module.css"; // Импорт файла со стилями

import User1_img from "../images/user1.png";
import Detmi_img from "../images/Detmi.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    debugger;

    const handleRegistrationClickButton = (event) => {
        event.preventDefault();
        debugger;
        if (login && password && email) {
           axios.post('http://localhost:5000/api/user/registration', {
                nickname : login,
                password: password,
                email: email,
              })
              .then((response) => {
                debugger;
                console.log(response);
                debugger;
                window.localStorage.setItem('token', response.data.token);
                navigate('/');
              }, (error) => {
                debugger;
                console.log(error);
                setError(error.response.data.message || 'Логин или имейл уже заняты. Попробуйте другие.');
              });
        }
    };

    const handleLoginClickButton = (event) => {
        event.preventDefault();
        debugger;
        if (password && email) {
           axios.post('http://localhost:5000/api/user/login', {
                password: password,
                email: email,
              })
              .then((response) => {
                debugger;
                console.log(response);
                window.localStorage.setItem('token', response.data.token);
                navigate('/');
              }, (error) => {
                debugger;
                console.log(error);
                setError(error.response.data.message || 'Неверный логин или пароль.');
              });
        }
    };

    return (
        <div>
            {error && (
                    <div>
                        <span className={styles.span}>  {error}</span>
                    </div>
                )}
            <div className={styles.container}>
                <a href="#" className={styles.User1}>
                    <img src={User1_img} alt="" className={styles.user1_img} />
                </a>
                <div className={styles['register-box']}>
                    <img src={Detmi_img} alt="" className={styles.Detmi_img} />
                    <h2>Вход в аккаунт</h2>
                    <form>
                        <label htmlFor="email">Email:</label>
                        <input value={email} type="email" id="email" name="email" required autoComplete="email" onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor="password">Пароль:</label>
                        <input value={password} type="password" id="password" name="password" required autoComplete="new-password" onChange={(e) => setPassword(e.target.value)} />


                        <button onClick={handleLoginClickButton} className={styles.registerButton}>Войти</button>
                    </form>
                    <span className={styles.wrapppp}>
                        <p className={styles['login-link']}>Нет аккаунта? 
                        <Link to="/registration" className={styles['login-anchor']}>Зарегистрироваться</Link>
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Login;