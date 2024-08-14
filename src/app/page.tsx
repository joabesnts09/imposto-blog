import styles from './page.module.scss'
import { HeaderComponent } from './components/HeaderComponent'
import { MainComponent } from './components/MainComponent'

export default function Home() {
    return (
        <>
            <HeaderComponent />
            <main className={styles.main}>
                <MainComponent />
            </main>
        </>
    )
}
