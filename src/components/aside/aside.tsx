import { Link } from "react-router-dom";
import styles from "./aside.module.css";
import { BsTelegram, BsGithub, BsLinkedin, BsMailbox } from 'react-icons/bs';
import { BiLogoReact, BiLogoRedux } from 'react-icons/bi'

export const Aside = () => {

    return (
        <div className={styles.container}>
            <div style={{ textAlign: "center", marginTop: "100px" }}>
                <p>Приветствую !</p>
                <p>Меня зовут Максим</p>
                <p>Я Frontend Developer</p>
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
            <div className={styles.project}><Link to={'/projects'}><BiLogoReact className={styles.react} style={{ color: "#0074a6" }} />Мои проекты</Link><BiLogoRedux style={{ color: "#764abc" }} className={styles.redux} /></div>
            <div className={styles.withoutCode}><Link to={'/aboutMe'}>Вне кода </Link><span style={{ color: "red" }}>*</span></div>
            <div className={styles.homePage}><Link to={'/'}>Домашняя</Link></div>
            <div className={styles.note}>*если вдруг стало интересно</div>
        </div >
    );
};

