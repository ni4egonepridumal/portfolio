import styles from "./home.module.css";
import React from "react";

export const Home = () => {
    const [showStack, setShowStack] = React.useState(false)
    const [showExperience, setShowExperience] = React.useState(true)

    const hendlePopup = () => {
        if (showExperience) {
            setShowStack(!showStack);
            setShowExperience(!showExperience);
        } else {
            setShowStack(!showStack);
            setShowExperience(!showExperience);
        }

    }
    return (
        <div className={styles.container}>
            {showExperience && <>
                <div style={{ fontSize: "25px" }} className={styles.container_inner}>
                    <p>Занимаюсь разработкой более 3х лет, <span className={styles.more} onClick={hendlePopup}>тут</span> перечислил основные технологии, которыми владею</p>
                    <br />
                    <p>Про свой опыт рассказываю более подробно в каждом из разработанных мной проектах, если вкратце то ...</p>
                    <br />
                    <p style={{ textDecoration: "underline" }}>Опыт:</p>
                    <br />
                    <p>Имею опыт командной разработки - Open Sourse проект, с января 2022 по настоящее время разрабатываем проект по ведению Ремонтов, в данном проеке, разрабатывал отдельные компоненты, верстал их, адаптировал под нужды команды, запросы к базе данных, отправка в базу данных.</p>
                    <br />
                    <p>Прошел курсы от Udemy:</p>
                    <br />
                    <ul>
                        <ol>"TypeScript с нуля - полный курс и паттерны проектирования"</ol>
                        <ol>"Next.js 13 - с нуля, React TypeScript, Hooks, SSR и CSS Grid</ol>
                    </ul>
                    <br />
                    <p style={{ textDecoration: "underline" }}>Самостоятельно изучил следующие технологии:</p>
                    <br />
                    <p>JavaScript по ресурсу "https://learn.javascript.ru/"</p>
                </div>
            </>}

            {showStack && <>
                <p>Стек технологий, которые я использую:</p>
                <p style={{ marginBottom: "15px" }}> Основное:</p>
                <div className={styles.general}>
                    <div className={styles.img}>
                        <label>JavaScript</label>
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                        />
                    </div>
                    <div className={styles.img}>
                        <label>TypeScript</label>
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                            alt="typescript"
                            width="40"
                            height="40"
                        />
                    </div>
                    <div className={styles.img}>
                        <label>HTML5</label>
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                        />
                    </div>
                    <div className={styles.smallText}>
                        <label>CSS</label>
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                        />
                    </div>
                    <div className={styles.img}>
                        <label>Docker</label>
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                            alt="docker"
                            width="40"
                            height="40"
                        />
                    </div>
                    <div className={styles.exSmallText}>
                        <label>GIT</label>
                        <img
                            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                            alt="git"
                            width="40"
                            height="40"
                        />
                    </div>
                    <div className={styles.smallText}>
                        <label>NPM</label>
                        <img
                            src="https://camo.githubusercontent.com/0c9b1ff1b3149f3349f3f186c494aa138a1250a92773a083a0c3569423e7b4cc/68747470733a2f2f6272616e646570732e636f6d2f69636f6e2d646f776e6c6f61642f4e2f4e706d2d69636f6e2d766563746f722d30352e737667"
                            alt="git"
                            width="35"
                            height="35"
                        />
                    </div>
                    <div className={styles.img}>
                        <label>GITHub</label>
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
                            alt="git"
                            width="40"
                            height="40"
                        />
                    </div>
                </div>
                <p style={{ margin: "15px 0px" }}> Библиотеки:</p>
                <div className={styles.general}>
                    <div className={styles.smallText}>
                        <label>React</label>
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                            alt="react"
                            width="40"
                            height="40"
                        />
                    </div>
                    <div className={styles.img}>
                        <label>Redux</label>
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                            alt="redux"
                            width="40"
                            height="40"
                        />
                    </div>
                    <div className={styles.img}>
                        <label>NextJS</label>
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                            alt="nextjs"
                            width="40"
                            height="40"
                        />
                    </div>
                </div>
                <p style={{ margin: "15px 0px" }}> Сборщики:</p>
                <div className={styles.general}>
                    <div className={styles.img}>
                        <label>Webpack</label>
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
                            alt="webpack"
                            width="40"
                            height="40"
                        />
                    </div>
                    <div className={styles.smallText}>
                        <label>Gulp</label>
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg"
                            alt="gulp"
                            width="40"
                            height="40"
                        />
                    </div>
                    <div className={styles.smallText}>
                        <label>Vite</label>
                        <img
                            src="https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667"
                            alt="vite"
                            width="40"
                            height="40"
                        />
                    </div>
                </div>
                <p style={{ margin: "15px 0px" }}> Красота:</p>
                <div className={styles.general}>
                    <div className={styles.smallText}>
                        <label>SCSS</label>
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                            alt="sass"
                            width="40"
                            height="40"
                        />
                    </div>
                    <div className={styles.img}>
                        <label>Tailwind</label>
                        <img
                            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                            alt="tailwind"
                            width="40"
                            height="40"
                        />
                    </div>
                    <div className={styles.img}>
                        <label>Bootstrap</label>
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                            alt="bootstrap"
                            width="40"
                            height="40"
                        />
                    </div>
                </div>
                <p style={{ margin: "15px 0px" }}> Тесты:</p>
                <div className={styles.general}>
                    <div className={styles.smallText}>
                        <label>Jest</label>
                        <img
                            src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
                            alt="jest"
                            width="40"
                            height="40"
                        />
                    </div>
                </div>
                <p style={{ margin: "15px 0px" }}> А также:</p>
                <div className={styles.general}>
                    <div className={styles.img}>
                        <label>Postman</label>
                        <img
                            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                            alt="postman"
                            width="40"
                            height="40"
                        />
                    </div>
                    <div className={styles.smallText}>
                        <label>Figma</label>
                        <img
                            src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                            alt="figma"
                            width="40"
                            height="40"
                        />
                    </div>
                    <div className={styles.img}>
                        <label>Photoshop</label>
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
                            alt="photoshop"
                            width="40"
                            height="40"
                        />
                    </div>
                </div>
                <button style={{ marginTop: "45px" }} className={styles.backToExpirience} onClick={hendlePopup}> {`<-`}Вернуться к опыту</button>
            </>}

        </div>
    );
};

