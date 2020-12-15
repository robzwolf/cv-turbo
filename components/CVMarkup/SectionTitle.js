import styles from '../../styles/SectionTitle.module.scss'

export default function SectionTitle(props) {
    return (
        <h2 className={styles.SectionTitle}>
            {props.children}
        </h2>
    )
}
