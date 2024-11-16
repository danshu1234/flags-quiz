'use client'

import Link from "next/link";
import { FC } from "react";

const Win: FC = () => {
    return (
        <div>
            <h2>Поздравляем, вы выиграли!</h2>
            <Link href={'/'}><button onClick={() => {
                localStorage.setItem('openSecond', 'false')
                localStorage.setItem('openThird', 'false')
                localStorage.removeItem('attemps')
            }}>На домашнюю (вы сможете начать игру сначала)</button></Link>
        </div>
    )
}

export default Win