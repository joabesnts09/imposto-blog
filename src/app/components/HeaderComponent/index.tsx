import { ButtonToggle } from './ButtonToggle'
import style from './style.module.scss'



export const HeaderComponent = () => {

    return (
        <>
            <header className={style.headerContainer}>
                <div>
                    
                    <ButtonToggle/>
                    <div></div>

                </div>
            </header>
        </>
    )
}