import Header from "../components/headers/header";
//import HeaderJs from "../components/headers/headerJS";
//import HeaderPY from "../components/headers/headerPython";
//import HeaderCPP from "../components/headers/headerCPP";
import Footer from "../components/footer/footer";
import styles from '../styles/UserProfile.module.css';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
const UserProfile = () => {
    const [editNickname, setEditNickname] = useState(false);
    const [nickname, setNickname] = useState(''); // Значение nickname, можно инициализировать по-умолчанию
    const [profilePic, setProfilePic] = useState(null); // Значение profilePic, можно инициализировать по-умолчанию
    const [userRank, setUserRank] = useState('Bronze'); // Текущий ранг пользователя
    const [userPoints, setUserPoints] = useState(0); // Количество баллов пользователя

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const toggleEditNickname = () => {
        setEditNickname(!editNickname);
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.container}>
            <Header />
            <h1></h1>
            
            <div className={styles['register-box']}>
                
                <div className={styles.profileSection}>
                <div className={styles.modalContent}>
                    
                        <p>ЛИЧНЫЙ КАБИНЕТ НАХОДИТСЯ НА СТАДИИ РАЗРАБОТКИ</p>
                    </div>

                    <div className={styles.profilePic}>
                        <img src={profilePic || 'https://via.placeholder.com/150'} alt="Profile" />
                        <input type="file" onChange={handleProfilePicChange} />
                    </div>
                    <div className={styles.nicknameSection}>
                        {editNickname ? (
                            <input
                                type="text"
                                value={nickname}
                                onChange={handleNicknameChange}
                                onBlur={toggleEditNickname}
                            />
                        ) : (
                            <h2 onClick={toggleEditNickname}>{nickname}</h2>
                        )}
                    </div>
                    <div className={styles.rankSection}>
                        <p>Ранг: {userRank}</p>
                        <p>Баллы: {userPoints}</p>
                        <button className={styles.registerButton}>Редактироть профиль</button>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UserProfile;