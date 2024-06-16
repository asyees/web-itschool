import "./headerPY.css";

// import React from 'react'
import Logo_img from '../images/Detmi.png';
import user_img from "../images/user.png"

export default function Header(){
    return(
        <header className="header">
            <div className="container0">
                <div className="header__inner">
                    <a href="#" className="logo">
                        <img className="logo__img" src={Logo_img} alt=""/>
                    </a>
                    
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <a href="#" className="menu__list-link">Каталог курсов</a>
                                <ul className="submenu">
                                    <li><a href="#">PYTHON</a></li>
                                    <li><a href="#">JavaScript</a></li>
                                    <li><a href="#">С++</a></li>
                                </ul>
                            </li>                            
                            <li className="menu__list-item">
                                <a href="#" className="menu__list-link">Задачи</a>
                            </li>
                            <li className="menu__list-item">
                                <a href="#" className="menu__list-link">Таблица лидеров</a>
                            </li>
                        </ul>
                    </nav>
                    <a href="#"className="user">
                        <img className="user__img" src={user_img} alt=""/>
                    </a>
                </div>
                </div>
        </header>
    )
}