import styles from "./projects.module.css";

export const Project = () => {
    return (
        <div className={styles.container}>
            <div className={styles.projectItem}>
                <img src={'/img/remont.png'} width={"100%"} />
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
                            <li>Найчился разрешать конфликты при выгрузке файлов в общий репозиторий на
                                гитхаб
                            </li>
                            <li>Разработал компоненты, для создания ремонта</li>
                            <li>Реализовал их функционал, с использованием таких библиотек, как:</li>
                        </ul>
                        <p>-react,</p>
                        <p>-redux/@toolkit/createAsyncThunk,</p>
                        <p>-axios,</p>
                        <p>-react-dadata (библиотека для получения адресов),</p>
                        <p>-react-hook-form
                            (библиотека, работы с формами, разработал компонент кастомного инпута для данной библиотеки),</p>
                        <p>-react-spinners (прелоадеры),</p>
                        <p>-react-select,</p>
                        <p>-react-router-dom (навигация)</p>
                        <p>Взаимодействовал с базой данных (получение данных, отправка данных)</p>
                    </div>
                    <br />
                    <div style={{ color: 'red' }}>
                        <div>
                            Ссылки:
                        </div>
                        <div>
                            <a href="https://opyat-remont.ru/" target="_blank">Cайт</a>{"   "}
                            <a href="https://github.com/Renovations-again" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={'/img/burger-shop.png'} width={"100%"} />

                    <div className={styles.positionRelative}>
                        <p>Проект: "Приложение для заказ бургеров"</p>
                        <br />
                        <p>Данный пет проект я разработал самостоятельно с нуля на TypeScript.</p>
                        <br />
                        <p>Вся функциональная часть проекта готова, доделываю адаптивную верстку,
                            и некоторые юзабилити фичи.</p>
                        <br />
                        <p>На данном проекте реализовал сохраниние данных, а именно выбранные позиции пользователя, в localStorage.</p>
                        <p>Так же пользователь может оставить комментарий к конкретному бургеру, и он сохраниться в базе.</p>
                        <br />
                        <p>В качестве базы данных использова сервис mockApi.io, он мне позволил делать запросы (GET, PUT).</p>
                        <br />
                        <p>Реализовал сортировку с запросом в базой данных.</p>
                        <br />
                        <p>Для реализации проекта использовал следующие библиотеки:</p>
                        <div className={styles.ul}>
                            <ul>
                                <li>-@reduxjs/toolkit/RTK query</li>
                                <li>-classnames</li>
                                <li>-react-dadata</li>
                                <li>-react-hook-form</li>
                            </ul>
                            <ul>
                                <li>-react-icons</li>
                                <li>-react-router-dom</li>
                                <li>-react-spinners</li>
                                <li>-sass</li>
                            </ul>
                        </div>
                        <br />
                        <div className={styles.positionRight}>
                            <div>
                                Ссылки:
                            </div>
                            <div>
                                <a href="https://burger-shop-roan.vercel.app/" target="_blank">Деплой</a>{"   "}
                                <a href="https://github.com/ni4egonepridumal/burger-shop" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

