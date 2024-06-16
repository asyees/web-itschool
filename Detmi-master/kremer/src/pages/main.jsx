//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/headers/header";
//import HeaderJs from "../components/headers/headerJS";
//import HeaderPY from "../components/headers/headerPython";
//import HeaderCPP from "../components/headers/headerCPP";
import Footer from "../components/footer/footer";
import styles from "../styles/style_for_main.module.css"
import Programmer_img from "../images/programmer.png"
import Languages_img from "../images/languages.png"
import top2_img from "../images/4.png"
import Languages_img2 from "../images/7.png"
import Some_img3 from "../images/3.png"
import Some_img2 from "../images/2.png"
import Some_img1 from "../images/1.png"
import Some_img4 from "../images/8.png"
import React from 'react';
import { NavLink } from 'react-router-dom';

function MainPage() {
    return (
    <div>
        <Header/>
        <div className={styles.background}>
        <div className={styles["width-wrapper"]}> 
        <main className={styles.main}>
         <section className={styles.top}>
            <div className={styles.container1}>
                <div className={styles["top__wrapper"]}>
                <div className={styles["zaeb"]}>
                    <div className={styles["section_1_item-1"]}>
                        <h1 className={styles["section_1_text-1"]}>
                            ПРИСОЕДИНЯЙТЕСЬ К НАМ И ОТКРОЙТЕ ДЛЯ СЕБЯ НОВЫЕ ГОРИЗОНТЫ ВОЗМОЖНОСТЕЙ
                            ГДЕ ТОЛЬКО ВАША ФАНТАЗИЯ СТАВИТ ПРЕДЕЛЫ
                        </h1>
                    </div>
                   
                        <div className={styles["section_1_item-2-wrapper"]}>
                            <img src={Languages_img} alt="" className={styles["languages_img"]}/>
                    <div className={styles["section_1_item-2"]}>
                            <h2 className={styles["section_1_text-2"]}>
                                Здесь вы найдете все, что нужно для того, чтобы стать профессионалом в мире технологий.
                                Мы предлагаем обучение с нуля для новичков и углубленную программу для тех,
                                кто уже имеет опыт в программировании.
                            </h2>
                        </div>
                    </div>
                    <div className={styles["section_1_item-3"]}>
                        
                            <NavLink to="/courses" className={styles["section_1_item-3_link"]} href="#"> Узнать подробнее</NavLink>
                        
                    </div>
            </div>
            
            <div className={styles["top__img-wrapper"]}>
            <img src={Programmer_img} alt="" className={styles["top__img"]}/>
            </div>
        </div>
        </div>
         </section>
         <section className={styles.top2}>
            <div className={styles.container}>
                <div className={styles["top2__wrapper"]}>
                        <div className={styles["section_2_item-1"]}>
                            <div className={styles["section_2_item_1_img"]}>
                                <h3 className={styles["section_2_item_1"]}>
                                    НАШИ КУРСЫ
                                </h3>
                                  <img src={top2_img} alt="" className={styles["top1__img"]}/>
                            </div>
                        </div>
                        <div className={styles["help"]}>
                        <div className={styles["box1"]}>
                            <div className={styles["text"]}>PYTHON</div>
                        </div>
                        <div className={styles["box2"]}>
                            <div className={styles["text"]}>JavaScript</div>
                        </div>
                        <div className={styles["box3"]}>
                            <div className={styles["text"]}>С++</div>
                        </div>
                      </div>
                </div>
            </div>
        </section>
        
         <section className={styles.top3}>
            <div className={styles.container3}>
                <div className={styles["top3__wrapper"]}>
                    <div className={styles["kek"]}>
                        <div className={styles["section_3_item-1-wrapper"]}>
                            <div className={styles["section_3_item-1"]}>
                                <h4 className={styles["section_3_item_1"]}>
                                    ЧТО ВАС ЖДЕТ?
                                </h4>
                                <img src={Languages_img2} alt="" className={styles["top7__img"]}/>
                            </div>
                        </div>
                </div>
                    <div className={styles.container3}>
                        <div className={styles["top2__img-wrapper"]}>
                            </div>
                       <div className={styles["box4"]}>
                            <div className={styles["text"]}>Интерейснейшие курсы по языкам программирования на выбор, на данный момент доступны такие языки как:
                             Python, C++ и JavaScript. Курсы состоят из разделов, к каждому разделу подготовлен
                              видео-ролик для ознакомления с основными аспектами и понятиями, а также краткий
                               конспект для повторения материала. В завершении каждого раздела  ожидаютс
                               я практические и теоретические задания для закрепления полученных знаний
                            </div>
                      </div>
                      <div className={styles.container4}>
                        <img src={Some_img1} alt="" className={styles["top4__img"]}/>
                        <img src={Some_img2} alt="" className={styles["top5__img"]}/>
                        <img src={Some_img3} alt="" className={styles["top6__img"]}/>
                    </div>
                    </div>
                    </div>
                    </div>
                    
         </section>
               <section className={styles.top4}>
                <div className={styles.container5}>
                    <div className={styles["top4__wrapper"]}>
                        <div className={styles["lol"]}>
                            <div className={styles["section_4_item-1"]}>
                                <h5 className={styles["section_4_item_1"]}>
                                    ЗАДАЧИ
                                </h5>
                            </div>
                            <div className={styles.container6}>
                                <img src={Some_img4} alt="" className={styles["top8__img"]}/>
                           
                            <div className={styles["box5"]}>
                                <div className={styles["text"]}>
                                    <p className={styles["box5_par"]}>Раздел “Задачи” - Ваш путь к успеху!</p>
                                    <h2 className={styles["box5_text"]}>В разделе “Задачи” будут две категории, “обычный” и “соревновательный”.
                                    Вас ждут три уровня сложности - легкий, средний и жесткий!
                                    Здесь вы сможете прокачать свой навык, решая множество интересных и разнообразных задач,
                                    а также получить рейтинг, тем самым став лучшим в таблице лидеров, заняв первое место!</h2>
                          </div>
                        </div>
                        </div>    
                        </div>    
                    </div>
                </div>
               </section>
               <section className={styles.top5}>
                <div className={styles.container7}>
                    <div className={styles["top5__wrapper"]}>
                        <div className={styles["pyk"]}>
                            <div className={styles["section_5_item-1"]}>
                                <h5 className={styles["section_5_item_1"]}>
                                    ЛИДЕРЫ КУРСА
                                </h5>
                            </div>
                        </div>
                        <div className={styles.container7}>
                            <div className={styles["firstboth"]}>
                                <div className={styles["box6"]}>
                                    <div className={styles["text"]}>В таблицу лидеров курса попадают только те, 
                                        кто набрал большее количество рейтинга </div>
                                        </div>
                                <div className={styles["box7"]}>
                                    <div className={styles["text"]}>Задачи могут быть самыми разными 
                                        - от простых до сложных</div>
                                </div>
                            </div>
                            
                            <div className={styles["secondboth"]}>
                                <div className={styles["box8"]}>
                                    <div className={styles["text"]}>Каждый участник курса имеет шанс занять первое место в этой таблице. 
                                        Это стимул для всех , 
                                        ведь победа в таблице лидеров означает признание их мастерства и знаний</div>
                                </div>
                                <div className={styles["box9"]}>
                                    <div className={styles["text"]}>Но именно преодоление этих испытаний позволяет участникам 
                                        продемонстрировать свое мастерство и стать лидером</div>
                                </div>
                            </div>
                            <div className={styles["box10-wrapper"]}>
                                <div className={styles["box10"]}>
                                    <div className={styles["text"]}>Чтобы достичь вершины, вам придется приложить немало усилий
                                         и потратить немало времени на решение разнообразных задач.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </section>
        
        </main>
        </div>
        </div>
        <Footer/>
    </div>
    )
}
export default MainPage
