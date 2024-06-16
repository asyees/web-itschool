import styles from '../../styles/headers/header.module.css';
import Logo_img from '../../images/Detmi.png';
import user_img from "../../images/user.png";
import React from 'react';
import {useState, useEffect, } from "react"
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Logout from '../../../logout';
export default function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            // Если хотите перенаправить неаутентифицированных пользователей:
            // navigate('/login');
        }
    }, [navigate]);
    return (
        <header className={styles.header}>
            <div className={styles.container0}>
                <div className={styles['header__inner']}>
                    {/* Используем NavLink для логотипа */}
                    <NavLink to="/" className={styles.logo}>
                        <img className={styles['logo__img']} src={Logo_img} alt="" />
                    </NavLink>
                    
                    <nav className={styles.menu}>
                        <ul className={styles['menu__list']}>
                            <li className={styles['menu__list-item']}>
                            <NavLink to="/courses" className={styles['menu__list-link']}>Каталог курсов</NavLink>
                            </li>                            
                            <li className={styles['menu__list-item']}>
                                <NavLink to="/tasks" className={styles['menu__list-link']}>Задачи</NavLink>
                            </li>
                            <li className={styles['menu__list-item']}>
                                <NavLink to="/leaderboard" className={styles['menu__list-link']}>Таблица лидеров</NavLink>
                            </li>
                        </ul>
                    </nav>
                        <span className={styles.exit}>
                            {isAuthenticated ? (
                                <Logout/>): (
                                    <Link to="/registration">Зарегистрироваться</Link>
                                )
                            }
                            <NavLink to="/personal_account" className={styles.user}>
                    <img className={styles['user__img']} src={user_img} alt="User" />
                </NavLink>
                        </span>
                </div>
            </div>
        </header>
    ); 

}