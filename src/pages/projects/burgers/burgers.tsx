import { Link } from "react-router-dom";
import styles from "./burgers.module.css";
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

export const Burgers = () => {
    return (
        <div className={styles.position}>
            <div className={styles.container}>
                <Gallery>
                    <Item
                        original="/img/burgerShop/burger-shop.png"
                        thumbnail="/img/burgerShop/burger-shop-mini.png"
                        width="1300"
                        height="680"
                    >
                        {({ ref, open }) => (
                            <img ref={ref as React.MutableRefObject<HTMLImageElement>} alt="burgerShop" onClick={open} src="/img/burgerShop/burger-shop-mini.png" />
                        )}
                    </Item>
                    <Item
                        original="/img/burgerShop/burger-cart.png"
                        thumbnail="/img/burgerShop/burger-cart-mini.png"
                        width="1300"
                        height="680"
                    >
                        {({ ref, open }) => (
                            <img ref={ref as React.MutableRefObject<HTMLImageElement>} alt="burgerShop-cart" onClick={open} src="/img/burgerShop/burger-cart-mini.png" />
                        )}
                    </Item>
                    <Item
                        original="/img/burgerShop/oneBurger.png"
                        thumbnail="/img/burgerShop/oneBurger-mini.png"
                        width="1300"
                        height="680"
                    >
                        {({ ref, open }) => (
                            <img ref={ref as React.MutableRefObject<HTMLImageElement>} alt="burgerShop-oneBurger" onClick={open} src="/img/burgerShop/oneBurger-mini.png" />
                        )}
                    </Item>
                </Gallery>
            </div>
            <div className={styles.anchor_inner}>
                <div>
                    <div style={{ color: 'red' }}>
                        Ссылки:
                    </div>
                    <div className={styles.anchor}>
                        <a href="https://burger-shop-roan.vercel.app/" target="_blank"><span style={{ color: "#f2bc12" }}>Деплой</span></a>{"   "}
                        <a href="https://github.com/ni4egonepridumal/burger-shop" target="_blank"><span style={{ color: "#f2bc12" }}>GitHub</span></a>
                    </div>
                </div>
            </div>
            <div className={styles.whatIdo}>
                <div style={{ fontSize: 20 }}>
                    <p>Проект: "Приложение для заказ бургеров"</p>
                    <br />
                    <p>Данный пет проект я разработал самостоятельно с нуля на TypeScript.</p>
                    <p>Вся функциональная часть проекта готова, доделываю некоторые юзабилити фичи.</p>
                    <p>Так как делал в одиночку, то дизайнерские решения могут быть спорными.</p>
                    <br />
                    <p>В качестве базы данных использовал сервис mockApi.io, он мне позволил делать запросы (GET, PUT).</p>
                    <br />
                    <p>Реализовал сортировку на главной странице приложения по цене и алфавиту с запросом в базу данных.</p>
                    <br />
                    <p>На данном проекте реализовал сохранение данных, в localStorage.</p>
                    <p>Корзина пользователя, также сохраняется в localStorage, таким образом можно продолжить оформлять заказ, при обновлении или закрытии браузера.</p>
                    <p>Так же пользователь может оставить комментарий к конкретному бургеру, и он сохраниться в базе данных.</p>
                    <br />
                    <p>Реализована простая валидация, через регулярные выражения, с помощью библиотеки React-Hook-Form на клиенте.</p>
                    <p>После оформления заказ, можно увидеть в консоли.</p>
                </div>
                <div className={styles.library}>
                    <p>Для реализации проекта использовал следующие библиотеки:</p>
                    <ul>
                        <li>-@reduxjs/toolkit/RTK query;</li>
                        <li>-classnames;</li>
                        <li>-react-dadata;</li>
                        <li>-react-hook-form;</li>
                        <li>-react-icons;</li>
                        <li>-react-router-dom;</li>
                        <li>-react-spinners;</li>
                        <li>-sass.</li>
                    </ul>
                </div>
            </div>
            <Link to={'/projects/testovoe1'}><button className={styles.buttonNext}>Следующий проект &#10095;</button></Link>
            <Link to={'/projects/repair'}><button className={styles.buttonPrevious}>&#10094; Предыдущий проект </button></Link>
        </div>
    );
};

