import { Link } from "react-router-dom";
import styles from "./comingSoon.module.css";

export const ComingSoon = () => {
    return (
        <div className={styles.position}>
            <p className={styles.description}>Данные проект, в разработке, по мере появления свободного времени, на нем хочу закрепить свои знания по JSON Web Token (JWT)</p>
            <Link to={'/projects/testovoe1'}><button className={styles.buttonPrevious}>{`<-`}Предыдущий проект </button></Link>
        </div>

    );
};

