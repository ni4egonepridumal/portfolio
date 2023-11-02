import { Link } from "react-router-dom";
import styles from "./repair.module.css"
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

export const Repair = () => {
    return (
        <div className={styles.position}>
            <div className={styles.container}>
                <Gallery>
                    <Item
                        original="/img/repair/remont.png"
                        thumbnail="/img/repair/remont-mini.png"
                        width="1300"
                        height="680"
                    >
                        {({ ref, open }) => (
                            <img ref={ref as React.MutableRefObject<HTMLImageElement>} alt="opyat-remont" onClick={open} src="/img/repair/remont-mini.png" />
                        )}
                    </Item>
                    <Item
                        original="/img/repair/repair-register.png"
                        thumbnail="/img/repair/repair-register-mini.png"
                        width="1300"
                        height="680"
                    >
                        {({ ref, open }) => (
                            <img ref={ref as React.MutableRefObject<HTMLImageElement>} alt="opyat-remont2" onClick={open} src="/img/repair/repair-register-mini.png" />
                        )}
                    </Item>
                    <Item
                        original="/img/repair/repair-myRepair.png"
                        thumbnail="/img/repair/repair-myRepair-mini.png"
                        width="1300"
                        height="680"
                    >
                        {({ ref, open }) => (
                            <img ref={ref as React.MutableRefObject<HTMLImageElement>} alt="opyat-remont3" onClick={open} src="/img/repair/repair-myRepair-mini.png" />
                        )}
                    </Item>
                </Gallery>
            </div>
            <div className={styles.aboutRepair}>
                <div style={{ color: 'red' }}>
                    <div>
                        Ссылки:
                    </div>
                    <div className={styles.linkProject}>
                        <a href="https://opyat-remont.ru/" target="_blank"><span style={{ color: '#f2bc12' }}>Сайт</span></a>{"   "}
                        <a href="https://github.com/Renovations-again" target="_blank"><span style={{ color: '#f2bc12' }}>GitHub</span></a>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: "10px" }} className={styles.aboutRepair}>
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
                    <div className={styles.whatIdo}>
                        <div className={styles.skills}>
                            <p>На данном проекте я реализовал следующий функционал:</p>
                            <ul>
                                <li>-Форму для создания нового ремонта, её верстка;</li>
                                <li>-Компонент кнопки для использования во всём приложении.</li>
                            </ul>
                        </div>
                        <div>
                            <p>На данном проекте я приобрел следующие навыки:</p>
                            <ul>
                                <li>-Взаимодействие с базой данных (получение данных, отправка данных);</li>
                                <li>-Взаимодействия с командой разработчиков, с бекенд и дизайном;</li>
                                <li>-Разрешения конфликтов при выгрузке файлов в общий репозиторий на
                                    GitHub.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br />
                <div className={styles.choseLibrary}>
                    <p>Используемые библиотеки:</p>
                    <p>-react;</p>
                    <p>-redux/@toolkit/createAsyncThunk;</p>
                    <p>-axios;</p>
                    <p>-react-dadata (библиотека для получения адресов);</p>
                    <p>-react-hook-form
                        (библиотека, работы с формами, разработал компонент кастомного инпута для данной библиотеки);</p>
                    <p>-react-spinners (прелоадеры);</p>
                    <p>-react-select;</p>
                    <p>-react-router-dom (навигация).</p>
                </div>
            </div>
            <button className={styles.button}><Link to={'/projects/burgers'}>Следующий проект &#10095;</Link></button>
        </div>
    );
};

