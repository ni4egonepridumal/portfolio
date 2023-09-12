import { Link } from "react-router-dom";
import styles from "./repair.module.css"

export const Repair = () => {
    return (
        <div className={styles.position}>
            <div className={styles.container}>
                <div className={styles.projectItem}>
                    <img src={'/img/remont.png'} width={"100%"} />
                </div>
                <div>
                    <div style={{ color: 'red' }}>
                        <div>
                            Ссылки:
                        </div>
                        <div>
                            <a href="https://opyat-remont.ru/" target="_blank">Cайт</a>{"   "}
                            <a href="https://github.com/Renovations-again" target="_blank">GitHub</a>
                        </div>
                    </div>
                    <div className={styles.library}>
                        <p>Используемые библиотеки:</p>
                        <p>-react,</p>
                        <p>-redux/@toolkit/createAsyncThunk,</p>
                        <p>-axios,</p>
                        <p>-react-dadata (библиотека для получения адресов),</p>
                        <p>-react-hook-form
                            (библиотека, работы с формами, разработал компонент кастомного инпута для данной библиотеки),</p>
                        <p>-react-spinners (прелоадеры),</p>
                        <p>-react-select,</p>
                        <p>-react-router-dom (навигация)</p>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "10px" }}>
                <p>OpenSourse: "Приложение для контроля трат на ремонт"</p>
                <br />
                <div>
                    <div>Описание:</div>
                    <p>Проект разрабатывается командой,
                        2 бека, 2 фронта (один из них я),
                        дизайнер, иногда подключаются
                        люди на временные задачи на проект,
                        например для парсинга данных, или разработки телеграмм бота.
                    </p>
                    <br />
                    <p>На данном проекте я реализовал следующий функционал:</p>
                    <br />
                    <ul>
                        <li>-Прокачал навыки взаимодействия с командой разработчиков, с бекенд и дизайном;</li>
                        <li>-Научился разрешать конфликты при выгрузке файлов в общий репозиторий на
                            GitHub;
                        </li>
                        <li>-Разработал отдельные, изолированные компоненты, для страницы создания ремонта, реализовал их функционал, а также верстку;</li>
                        <li></li>
                        <li>-Взаимодействовал с базой данных (получение данных, отправка данных)</li>
                    </ul>

                </div>
                <br />

            </div>
            <button className={styles.button}><Link to={'/projects/burgers'}>Следующий проект {`->`}</Link></button>
        </div>
    );
};

