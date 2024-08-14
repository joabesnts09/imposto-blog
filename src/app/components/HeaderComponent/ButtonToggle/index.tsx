'use client'
import { useEffect, useState } from 'react'
import style from './style.module.scss'
import imgMoon from '../../../../../public/images/moonIcon.svg'
import imgSun from '../../../../../public/images/sunIcon.svg'
import Image from 'next/image'

interface IToggleSwitchProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}


export const ButtonToggle = ({ isDarkMode, toggleTheme }: IToggleSwitchProps) => {


    return (
        <>
            <div className={style.toggleContainer}>
                <input
                    type='checkbox'
                    id='theme-toggle'
                    className={style.toggleCheckbox}
                    checked={isDarkMode}
                    onChange={toggleTheme}
                />
                <label htmlFor='theme-toggle' className={style.toggleLabel}>
                <span className={style.toggleSlider}></span>
                    <Image className={style.sun} src={imgMoon} alt='Sun' />
                    <Image className={style.moon} src={imgSun} alt='Moon' />
                </label>
            </div>

        </>
    )
}
