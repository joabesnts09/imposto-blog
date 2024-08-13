import styles from './page.module.scss'
import { HeaderComponent } from './components/HeaderComponent'

export default function Home() {
    return (
        <>
            <HeaderComponent />
            <main className={styles.main}></main>
        </>
    )
}
