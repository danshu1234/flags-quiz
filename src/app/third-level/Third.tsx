'use client'

import { FC, useState } from "react";
import Link from "next/link";
import Win from "./Win";
import './third.css'

const Third: FC = () => {
    const [countryOne, setCountryOne] = useState<string | null>(null);
    const [countryTwo, setCountryTwo] = useState<string | null>(null);
    const [countryThree, setCountryThree] = useState<string | null>(null);
    const [countryFour, setCountryFour] = useState<string | null>(null);
    const [countryFive, setCountryFive] = useState<string | null>(null);
    const [showResult, setShowResult] = useState<string>('');
    const [show, setShow] = useState<string>('level');
    const [countriesArr, setCountriesArr] = useState<string[]>(['UK', 'Canada', 'Mexico', 'China', 'Portugal']);
    let result;
    let showEl;

    if (showResult === 'right') {
        result = <div className="all-right"><h2>Правильно!</h2></div>
    } else if (showResult === 'mistake') {
        result = (
            <div>
                <div className="true-order">
                    <h3>Правильный ответ:</h3>
                </div>
                <div className="result-contain">
                    <div className="true-contain">
                        <img src="https://advanced-television.com/wp-content/uploads/2018/10/Mexico.jpg" className="flag-result" />
                        <p className="true-country">Mexico</p>
                    </div>
                    <div className="true-contain">
                        <img src="https://freevse.narod.ru/flagi/flagj/china-f.jpg" className="flag-result" />
                        <p className="true-country">China</p>
                    </div>
                    <div className="true-contain">
                        <img src="https://4miles.ru/wp-content/uploads/2018/11/flag-Kanady.gif" className="flag-result" />
                        <p className="true-country">Canada</p>
                    </div>
                    <div className="true-contain">
                        <img src="https://www.topclass-education.ru/wp-content/uploads/2022/11/en.jpg" className="flag-result" />
                        <p className="true-country">UK</p>
                    </div>
                    <div className="true-contain">
                        <img src="https://cdn1.ozone.ru/s3/multimedia-7/6822025351.jpg" className="flag-result" />
                        <p className="true-country">Portugal</p>
                    </div>
                </div>
                <div className="ok-btn">
                    <button onClick={() => {
                        setShow('finish')
                        const getAttemps = localStorage.getItem('attemps');
                        if (!getAttemps) {
                            setShow('two');
                        } else if (getAttemps === '2') {
                            setShow('one');
                        } else if (getAttemps === '1') {
                            setShow('loose');
                        }
                    }} className="ok">Понятно</button>
                </div>
            </div>
        )
    }

    if (show === 'level') {
        showEl = (
            <div>
                <ul className="countries-list">
                    {countriesArr.map((item, index) => {
                        return (
                            <li key={index} draggable onDragStart={(event: React.DragEvent<HTMLLIElement>) => {
                                const target = event.target as HTMLParagraphElement;
                                event.dataTransfer.setData('country', target.innerText)
                            }} className="country">
                                <h3>{item}</h3>
                            </li>
                        )
                    })}
                </ul>

                <div className="flags-and-drops">
                    <div className="flag-drop-container">
                        <img src="https://advanced-television.com/wp-content/uploads/2018/10/Mexico.jpg" className="flag" />
                        <div className="dropped-el" onDrop={(event: React.DragEvent<HTMLDivElement>) => {
                            setCountryOne(event.dataTransfer.getData('country'));
                            const filteredArr = countriesArr.filter(item => item !== event.dataTransfer.getData('country'));
                            setCountriesArr(filteredArr);
                        }} onDragOver={(event: React.DragEvent<HTMLDivElement>) => event.preventDefault()}>
                            <h3 className="dropped-p">{countryOne}</h3>
                        </div>
                    </div>

                    <div className="flag-drop-container">
                        <img src="https://freevse.narod.ru/flagi/flagj/china-f.jpg" className="flag" />
                        <div className="dropped-el" onDrop={(event: React.DragEvent<HTMLDivElement>) => {
                            setCountryTwo(event.dataTransfer.getData('country'));
                            const filteredArr = countriesArr.filter(item => item !== event.dataTransfer.getData('country'));
                            setCountriesArr(filteredArr);
                        }} onDragOver={(event: React.DragEvent<HTMLDivElement>) => event.preventDefault()}>
                            <h3 className="dropped-p">{countryTwo}</h3>
                        </div>
                    </div>

                    <div className="flag-drop-container">
                        <img src="https://4miles.ru/wp-content/uploads/2018/11/flag-Kanady.gif" className="flag" />
                        <div className="dropped-el" onDrop={(event: React.DragEvent<HTMLDivElement>) => {
                            setCountryThree(event.dataTransfer.getData('country'));
                            const filteredArr = countriesArr.filter(item => item !== event.dataTransfer.getData('country'));
                            setCountriesArr(filteredArr);
                        }} onDragOver={(event: React.DragEvent<HTMLDivElement>) => event.preventDefault()}>
                            <h3 className="dropped-p">{countryThree}</h3>
                        </div>
                    </div>

                    <div className="flag-drop-container">
                        <img src="https://www.topclass-education.ru/wp-content/uploads/2022/11/en.jpg" className="flag" />
                        <div className="dropped-el" onDrop={(event: React.DragEvent<HTMLDivElement>) => {
                            setCountryFour(event.dataTransfer.getData('country'));
                            const filteredArr = countriesArr.filter(item => item !== event.dataTransfer.getData('country'));
                            setCountriesArr(filteredArr);
                        }} onDragOver={(event: React.DragEvent<HTMLDivElement>) => event.preventDefault()}>
                            <h3 className="dropped-p">{countryFour}</h3>
                        </div>
                    </div>

                    <div className="flag-drop-container">
                        <img src="https://cdn1.ozone.ru/s3/multimedia-7/6822025351.jpg" className="flag" />
                        <div className="dropped-el" onDrop={(event: React.DragEvent<HTMLDivElement>) => {
                            setCountryFive(event.dataTransfer.getData('country'));
                            const filteredArr = countriesArr.filter(item => item !== event.dataTransfer.getData('country'));
                            setCountriesArr(filteredArr);
                        }} onDragOver={(event: React.DragEvent<HTMLDivElement>) => event.preventDefault()}>
                            <h3 className="dropped-p">{countryFive}</h3>
                        </div>
                    </div>
                </div>

                <div className="check-contain">
                    <button onClick={() => {
                        setCountriesArr([])
                        if (countryOne === 'Mexico' && countryTwo === 'China' && countryThree === 'Canada' && countryFour === 'UK' && countryFive === 'Portugal') {
                            setShowResult('right');
                            setTimeout(() => {
                                setShow('win');
                            }, 1000);
                        } else {
                            setShowResult('mistake');
                        }
                    }} className="check-btn">Проверить</button>
                </div>
                {result}
            </div>
        )
    } else if (show === 'two') {
        localStorage.setItem('attemps', '2');
        showEl = (
            <div className="attemps-contain">
                <h3 className="attemps-count">У вас осталось 2 попытки</h3>
                <Link href={'/'} className="go-home">Понятно</Link>
            </div>
        )
    } else if (show === 'one') {
        localStorage.setItem('attemps', '1');
        showEl = (
            <div className="attemps-contain">
                <h3 className="attemps-count">У вас осталась 1 попытка</h3>
                <Link href={'/'} className="go-home">Понятно</Link>
            </div>
        )
    } else if (show === 'loose') {
        localStorage.setItem('openSecond', 'false');
        localStorage.setItem('openThird', 'false');
        localStorage.removeItem('attemps');
        showEl = (
            <div className="attemps-contain">
                <h3 className="attemps-count">Попытки закончились, вам придется начать игру сначала</h3>
                <Link href={'/'} className="go-home">Понятно</Link>
            </div>
        )
    } else if (show === 'win') {
        showEl = <Win />;
    }

    return (
        <div>
            {showEl}
        </div>
    )
}

export default Third;
