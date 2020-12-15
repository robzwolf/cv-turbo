import styles from "../../styles/Layout.module.scss";
import Head from 'next/head'

export default function Layout({children}) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

            </Head>
            <div className={styles.Layout}>
                {children}
            </div>
        </>
    )
}
