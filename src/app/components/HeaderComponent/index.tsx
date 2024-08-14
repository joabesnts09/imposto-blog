'use client'
import { ButtonToggle } from './ButtonToggle'
import style from './style.module.scss'
import imageLogo from '../.../../../../../public/images/image1.png'
import imageMenu from '../.../../../../../public/images/menu-svgrepo-com.svg'
import imageMenuLight from '../.../../../../../public/images/menu-svgrepo-com-light.svg'
import Image from 'next/image'
import { Play } from 'next/font/google'
import { useEffect, useState } from 'react'

const play = Play({
    weight: ['400', '700'],
    subsets: ['latin'],
})


export const HeaderComponent = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem("@ThemeJSTech");
        return savedTheme ? savedTheme === "dark" : false;
      });


      useEffect(() => {

        document.body.className = isDarkMode ? "dark-mode" : "light-mode";
        localStorage.setItem("@ThemeJSTech", isDarkMode ? "dark" : "light");
      }, [isDarkMode]);
    
      const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
      };

    return (
        <>
            <header className={`${play.className} ${style.headerContainer}`}>
                <div className={style.boxContent}>
                    <ButtonToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                    <div className={style.boxLogo}>
                        <span className={style.symbol} >&lt;</span>
                        <Image
                            src={imageLogo}
                            alt='Logo'
                            height={28}
                            width={28}
                        />
                        <p className={style.textLogo}>JS Tech</p>
                        <span className={`${style.symbol} ${style.bar}`}>&frasl;</span>
                        <span className={style.symbol}>&gt;</span>
                    </div>

                    <div>
                        <Image
                            src={isDarkMode? imageMenuLight : imageMenu}
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
