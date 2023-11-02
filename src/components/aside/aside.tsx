import { useState } from 'react'
import { Link } from "react-router-dom";
import styles from "./aside.module.css";
import { BsTelegram, BsGithub, BsLinkedin, BsMailbox } from 'react-icons/bs';
import { BiLogoReact, BiLogoRedux } from 'react-icons/bi';


export const Aside = () => {
    const [isMobileHidden, setIsMobileHidden] = useState<boolean>(false)
    return (
        <div className={styles.aboutMe}>
            <div className={styles.container}>
                <div style={{ textAlign: "center", paddingTop: "50px" }}>
                    <p>Приветствую !</p>
                    <p>Меня зовут Максим</p>
                    <p>Я Frontend Developer.</p>
                    <br></br>
                    <p>Мой возраст 32 года;</p>
                    <p>Образование:</p>
                    <p>ЮУрГУ: Юрист 2008-2013</p>
                </div>
                <div className={styles.img} ></div>
                <div className={styles.contact_inner}>
                    <ul className={styles.contact_item}>
                        <li><BsTelegram className={styles.position} /><a href="https://t.me/ni4egonepridumal" target="_blank">Telegram</a></li>
                        <li><BsGithub className={styles.position} /><a href="https://github.com/ni4egonepridumal" target="_blank">GitHub</a></li>
                        <li><BsLinkedin className={styles.position} /><a href="https://www.linkedin.com/in/maxim-shalagin/" target="_blank">Linkedin</a></li>
                        <li><BsMailbox className={styles.position} /><a href="mailto:apc-mv@yandex.ru" target="_blank">Email</a></li>
                    </ul>
                </div>
                <div className={styles.project}><Link to={'/projects/repair'}><BiLogoReact className={styles.react} style={{ color: "#0074a6" }} />Мои проекты</Link><BiLogoRedux style={{ color: "#764abc" }} className={styles.redux} /></div>
                <div className={styles.withoutCode}><Link to={'/aboutMe'}>Вне кода </Link><span style={{ color: "red" }}>*</span></div>
                <div className={styles.homePage}><Link to={'/'}>Домашняя</Link></div>
                <div className={styles.note}>*если вдруг стало интересно</div>
            </div >
            <div className={styles.isMobile}>
                {!isMobileHidden ?
                    <div className={styles.mobileMenuHidden} onClick={() => setIsMobileHidden(!isMobileHidden)}> Контакты</div>
                    :
                    <div className={styles.mobileMenuOpen} onClick={() => setIsMobileHidden(!isMobileHidden)}>
                        <div style={{ textAlign: "center", paddingTop: "50px" }}>
                            <p>Приветствую !</p>
                            <p>Меня зовут Максим</p>
                            <p>Я Frontend Developer.</p>
                            <br></br>
                            <p>Мой возраст 32 года;</p>
                            <p>Образование:</p>
                            <p>ЮУрГУ: Юрист 2008-2013</p>
                        </div>
                        <div className={styles.img_mobile} ></div>
                        <div className={styles.contact_inner_mobile}>
                            <ul className={styles.contact_item_mobile}>
                                <li><BsTelegram className={styles.position} /><a href="https://t.me/ni4egonepridumal" target="_blank">Telegram</a></li>
                                <li><BsGithub className={styles.position} /><a href="https://github.com/ni4egonepridumal" target="_blank">GitHub</a></li>
                                <li><BsLinkedin className={styles.position} /><a href="https://www.linkedin.com/in/maxim-shalagin/" target="_blank">Linkedin</a></li>
                                <li><BsMailbox className={styles.position} /><a href="mailto:apc-mv@yandex.ru" target="_blank">Email</a></li>
                            </ul>
                        </div>
                        <div className={styles.project_mobile}>

                            <Link to={'/projects/repair'}>
                                <span style={{ position: "relative" }}>
                                    <BiLogoReact className={styles.react_mobile} style={{ color: "#0074a6" }} />
                                    Мои проекты
                                </span>
                            </Link>
                            <span style={{ position: "relative" }}>
                                <BiLogoRedux style={{ color: "#764abc" }} className={styles.redux_mobile} />
                            </span>
                        </div>
                        <div className={styles.withoutCode}><Link to={'/aboutMe'}>Вне кода </Link><span style={{ color: "red" }}>*</span></div>
                        <div className={styles.homePage}><Link to={'/'}>Домашняя</Link></div>
                        <div className={styles.note}>*если вдруг стало интересно</div>
                    </div >
                }
            </div>

        </div >
    );
};

