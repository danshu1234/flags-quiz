'use client'

import Link from "next/link";
import { FC } from "react";
import './win.css'

const Win: FC = () => {
    return (
        <div className="win-contain">
            <img 
                src="https://taom.academy/upload/1690774577_voivod-club-p-multyashnii-feierverk-vkontakte-54.png" 
                className="win-img" 
                alt="Поздравляем, вы выиграли!" 
            />
            <h2 className="win-text">Поздравляем, вы выиграли!</h2>
            <Link 
                href={'/'} 
                onClick={() => {
                    localStorage.setItem('openSecond', 'false');
                    localStorage.setItem('openThird', 'false');
                    localStorage.removeItem('attemps');
                }} 
                className="go-home"
            >
                На домашнюю (вы сможете начать игру сначала)
            </Link>
        </div>
    )
}

export default Win;
