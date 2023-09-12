import { Link } from "react-router-dom";
import styles from "./burgers.module.css";

export const Burgers = () => {
    return (
        <div className={styles.position}>
            <div className={styles.container}>
                <div>
                    <img src={'/img/burger-shop.png'} width={"100%"} />
                </div>

                <div >
                    <div className={styles.anchor}>
                        <div>
                            Ссылки:
                        </div>
                        <div>
                            <a href="https://burger-shop-roan.vercel.app/" target="_blank">Деплой</a>{"   "}
                            <a href="https://github.com/ni4egonepridumal/burger-shop" target="_blank">GitHub</a>
                        </div>
                    </div>
                    <div className={styles.ul}>
                        <p>Для реализации проекта использовал следующие библиотеки:</p>
                        <ul>
                            <li>-@reduxjs/toolkit/RTK query</li>
                            <li>-classnames</li>
                            <li>-react-dadata</li>
                            <li>-react-hook-form</li>
                            <li>-react-icons</li>
                            <li>-react-router-dom</li>
                            <li>-react-spinners</li>
                            <li>-sass</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{ fontSize: 20, fontWeight: 600 }}>
                <p>Проект: "Приложение для заказ бургеров"</p>
                <br />
                <p>Данный пет проект я разработал самостоятельно с нуля на TypeScript.</p>
                <br />
                <p>Вся функциональная часть проекта готова, доделываю адаптивную верстку,
                    и некоторые юзабилити фичи.</p>
                <br />
                <p>Так как делал в одиночку, то дизайнерские решения могут быть спорными.</p>
                <br />
                <p>На данном проекте реализовал сохранение данных, а именно выбранные позиции пользователя, в localStorage.</p>
                <p>Так же пользователь может оставить комментарий к конкретному бургеру, и он сохраниться в базе данных.</p>
                <br />
                <p>В качестве базы данных использовал сервис mockApi.io, он мне позволил делать запросы (GET, PUT).</p>
                <br />
                <p>Реализовал сортировку на главной странице приложения по цене и алфавиту с запросом в базу данных.</p>
                <br />
                <p>Корзина пользователя, также сохраняется в localStorage, таким образом можно продолжить оформлять заказ, при обновлении или закрытии браузера.</p>
                <br />
                <p>Реализована простая валидация, через регулярные выражения, с помощью библиотеки React-Hook-Form на клиенте.</p>
                <br />
                <p>После оформления заказ, можно увидеть в консоли.</p>
                <br />
                <br />
            </div>
            <Link to={'/projects/testovoe1'}><button className={styles.buttonNext}>Следующий проект {`->`}</button></Link>
            <Link to={'/projects/repair'}><button className={styles.buttonPrevious}>{`<-`}Предыдущий проект </button></Link>
        </div>
    );
};

