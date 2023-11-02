import { Link } from "react-router-dom";
import styles from "./testovo1.module.css"
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

export const Testovoe1 = () => {
    return (
        <div className={styles.position}>
            <div className={styles.container}>
                <Gallery>
                    <Item
                        original="/img/testovoe1/testovoe1.png"
                        thumbnail="/img/testovoe1/testovoe1-mini.png"
                        width="1300"
                        height="680"
                    >
                        {({ ref, open }) => (
                            <img ref={ref as React.MutableRefObject<HTMLImageElement>} alt="burgerShop" onClick={open} src="/img/testovoe1/testovoe1-mini.png" />
                        )}
                    </Item>
                    <Item
                        original="/img/testovoe1/testovoe1-isActive.png"
                        thumbnail="/img/testovoe1/testovoe1-isActive-mini.png"
                        width="1300"
                        height="680"
                    >
                        {({ ref, open }) => (
                            <img ref={ref as React.MutableRefObject<HTMLImageElement>} alt="burgerShop-cart" onClick={open} src="/img/testovoe1/testovoe1-isActive-mini.png" />
                        )}
                    </Item>
                    <Item
                        original="/img/testovoe1/testovoe1-user.png"
                        thumbnail="/img/testovoe1/testovoe1-user-mini.png"
                        width="1300"
                        height="680"
                    >
                        {({ ref, open }) => (
                            <img ref={ref as React.MutableRefObject<HTMLImageElement>} alt="burgerShop-oneBurger" onClick={open} src="/img/testovoe1/testovoe1-user-mini.png" />
                        )}
                    </Item>
                </Gallery>
            </div>
            <div className={styles.anchor_inner}>
                <div style={{ color: 'red' }}>
                    Ссылки:
                </div>
                <div className={styles.anchor}>
                    <a href="https://test-task-1-eta.vercel.app/" target="_blank"><span style={{ color: "#f2bc12" }}>Деплой</span></a>{"   "}
                    <a href="https://github.com/ni4egonepridumal/test-task-1" target="_blank"><span style={{ color: "#f2bc12" }}>GitHub</span></a>
                </div>
            </div>
            <div className={styles.whatIdo}>
                <div>
                    <p>Проект: "Тестовое задание, найденное на просторах интернета"</p>
                    <br />
                    <p>Данный пет проект я разработал самостоятельно с нуля на TypeScript.</p>
                    <br />
                    <p>Задание на выполнение тут приводить не стану, оно полностью описано на GitHub ссылка есть выше.</p>
                    <br />
                    <p>На данном проекте реализовал отображение юзеров получаемых с JSONPlaceholder.</p>
                    <p>По клику на конкретного юзера открывается предзаполненная таблица с данными, которые также приходят с JSONPlaceholder.</p>
                    <p>Редактировать данные можно после, того, как нажать на соответствующую кнопку, до этого поля только для чтения</p>
                    <br />
                    <p>Для получения данных использовал сервис JSONPlaceholder.</p>
                    <p>Реализовал сортировку с запросом в базу данных по компании и по имени.</p>
                    <p>Реализовал валидацию на клиенте.</p>
                    <p>После отправки в консоль также выводятся данные пользователя.</p>
                </div>
                <div className={styles.library}>
                    <p>Для реализации проекта использовал следующие библиотеки:</p>
                    <ul>
                        <li>-@reduxjs/toolkit;</li>
                        <li>-classnames;</li>
                        <li>-react-hook-form;</li>
                        <li>-react-router-dom;</li>
                        <li>-react-spinners;</li>
                        <li>-sass.</li>
                    </ul>
                </div>
            </div>
            {/* <Link to={'/projects/comingSoon'}><button className={styles.buttonNext}>Следующий проект &#10095;</button></Link> */}
            <Link to={'/projects/burgers'}><button className={styles.buttonPrevious}>&#10094; Предыдущий проект </button></Link>
        </div>
    );
};

