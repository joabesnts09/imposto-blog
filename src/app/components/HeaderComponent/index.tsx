import { ButtonToggle } from './ButtonToggle'
import style from './style.module.scss'
import imageLogo from '../.../../../../../public/images/image1.png'
import imageMenu from '../.../../../../../public/images/menu-svgrepo-com.svg'
import Image from 'next/image'

export const HeaderComponent = () => {
    return (
        <>
            <header className={style.headerContainer}>
                <div className={style.boxContent}>
                    <ButtonToggle />
                    <div className={style.boxLogo}>
                        <span className={style.symbol} >&lt;</span>
                        <Image
                            src={imageLogo}
                            alt='Logo'
                            height={40}
                            width={40}
                        />
                        <p className={style.textLogo}>JS Tech</p>
                        <span className={`${style.symbol} ${style.bar}`}>&frasl;</span>
                        <span className={style.symbol}>&gt;</span>
                    </div>

                    <div>
                        <Image
                            src={imageMenu}
                            alt='Menu'
                            height={22}
                            width={22}
                        />
                    </div>
                </div>
            </header>
        </>
    )
}
