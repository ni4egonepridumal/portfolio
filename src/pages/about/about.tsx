import styles from "./about.module.css";
import { LiaBicycleSolid } from "react-icons/lia"
import { GiCampingTent, GiBasketballBall, GiHockey } from "react-icons/gi"
export const About = () => {
    return (
        <div className={styles.container}>
            <p>Если вам вдруг интересно, чем язанимаюсь то вот краткий перечень того, где меня можно встретить:</p>
            <br />
            <p>Я часто катаюсь на <LiaBicycleSolid size={35} />, даже ночью.</p>
            <p>Я любитель <GiCampingTent size={35} />, как пеших походов, так и водных или автомобильных.</p>
            <p>Иногда могу побросать  <GiBasketballBall size={35} /> в кольцо.</p>
            <p>Зимой, я катаюсь на коньках, и даже могу сыграть в <GiHockey size={35} />, так как в прошлом играл в хоккей.</p>
            <p>В остальном, встречи с друзьями, посящение различных развлекательных мест города.</p>
        </div>
    );
};

