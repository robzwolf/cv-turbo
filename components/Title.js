import styles from "../styles/Title.module.scss";

export default function Title(props) {
    return (
        <h1 className={styles.Title}>
            {props.children}
        </h1>
    )
}
