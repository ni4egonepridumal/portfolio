import { Link } from "react-router-dom";
import styles from "./testovo1.module.css"

export const Testovoe1 = () => {
    return (
        <div className={styles.position}>
            <div className={styles.container}>
                <div>
                    <img src={'/img/testovoe1.png'} width={"100%"} />
                </div>

                <div >
                    <div className={styles.anchor}>
                        <div>
                            Ссылки:
                        </div>
                        <div>
                            <a href="https://test-task-1-eta.vercel.app/" target="_blank">Деплой</a>{"   "}
                            <a href="https://github.com/ni4egonepridumal/test-task-1" target="_blank">GitHub</a>
                        </div>
                    </div>
                    <div className={styles.ul}>
                        <p>Для реализации проекта использовал следующие библиотеки:</p>
                        <ul>
                            <li>-@reduxjs/toolkit</li>
                            <li>-classnames</li>
                            <li>-react-hook-form</li>
                            <li>-react-router-dom</li>
                            <li>-react-spinners</li>
                            <li>-sass</li>
                        </ul>
                    </div>
                </div>
            </div>
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
                <br />
                <p>Реализовал сортировку с запросом в базу данных по компании и по имени.</p>
                <br />
                <p>Реализовал валидацию на клиенте.</p>
                <br />
                <p>После отправки в консоль также выводятся данные пользователя.</p>
                <br />
                <br />
            </div>
            <Link to={'/projects/comingSoon'}><button className={styles.buttonNext}>Следующий проект {`->`}</button></Link>
            <Link to={'/projects/burgers'}><button className={styles.buttonPrevious}>{`<-`}Предыдущий проект </button></Link>
        </div>
    );
};

