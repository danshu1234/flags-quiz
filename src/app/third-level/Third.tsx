'use client'

import { FC, useState } from "react";
import Link from "next/link";
import Win from "./Win";
import './third.css'



const Third: FC = () => {
    
    const [countryOne, setCountryOne] = useState <string | null> (null)
    const [countryTwo, setCountryTwo] = useState <string | null> (null)
    const [countryThree, setCountryThree] = useState <string | null> (null)
    const [countryFour, setCountryFour] = useState <string | null> (null)
    const [countryFive, setCountryFive] = useState <string | null> (null)
    const [showResult, setShowResult] = useState <string> ('')
    const [show, setShow] = useState <string> ('level')
    const [countriesArr, setCountriesArr] = useState <string[]> (['UK', 'Canada', 'Mexico', 'China', 'Portugal'])
    let result;
    let showEl;

    if (showResult === 'right') {
        result = <h2>All right</h2>
    } else if (showResult === 'mistake') {
        result = <div>
            <h3>This is true order:</h3>
            <div>
                <img src="https://advanced-television.com/wp-content/uploads/2018/10/Mexico.jpg"/>
                <p>Mexico</p>
            </div>
            <div>
                <img src="https://freevse.narod.ru/flagi/flagj/china-f.jpg"/>
                <p>China</p>
            </div>
            <div>
                <img src="https://4miles.ru/wp-content/uploads/2018/11/flag-Kanady.gif"/>
                <p>Canada</p>
            </div>
            <div>
                <img src="https://sun9-2.userapi.com/f7ByRMhm1Gha-WdsAKcVzykC_86evvMHdfpVeQ/JYjWo9dZOL0.jpg"/>
                <p>UK</p>
            </div>
            <div>
                <img src="https://www.fidnarlojistik.com/upload/ulke_bayrak_portekiz.png"/>
                <p>Portugal</p>
            </div>
            <button onClick={() => setShow('finish')}>Понятно</button>
        </div>
    }

    if (show === 'level') {
        showEl = <div>
            
        <ul className="countries-list">
            {countriesArr.map((item, index) => {
                return <li key={index} draggable onDragStart={(event: React.DragEvent<HTMLLIElement>) => {
                    const target = event.target as HTMLParagraphElement;
                    event.dataTransfer.setData('country', target.innerText)
                }} className="country"><h3>{item}</h3></li>
            })}
        </ul>

        <div className="flags-contain">
            <img src="https://advanced-television.com/wp-content/uploads/2018/10/Mexico.jpg" className="flag"/>
            <img src="https://freevse.narod.ru/flagi/flagj/china-f.jpg" className="flag"/>
            <img src="https://4miles.ru/wp-content/uploads/2018/11/flag-Kanady.gif" className="flag"/>
            <img src="https://sun9-2.userapi.com/f7ByRMhm1Gha-WdsAKcVzykC_86evvMHdfpVeQ/JYjWo9dZOL0.jpg" className="flag"/>
            <img src="https://www.fidnarlojistik.com/upload/ulke_bayrak_portekiz.png" className="flag"/>
        </div>

        <div className="drop-contain">  
        <div className="dropped-el" onDrop={(event: React.DragEvent<HTMLDivElement>) => {
            setCountryOne(event.dataTransfer.getData('country'))
            const filteredArr = countriesArr.filter(item => item !== event.dataTransfer.getData('country'))
            setCountriesArr(filteredArr)
        }} onDragOver={(event: React.DragEvent<HTMLDivElement>) => event.preventDefault()}>
            <p>{countryOne}</p>
        </div>      

        <div className="dropped-el" onDrop={(event: React.DragEvent<HTMLDivElement>) => {
            setCountryTwo(event.dataTransfer.getData('country'))
            const filteredArr = countriesArr.filter(item => item !== event.dataTransfer.getData('country'))
            setCountriesArr(filteredArr)
        }} onDragOver={(event: React.DragEvent<HTMLDivElement>) => event.preventDefault()}>
            <p>{countryTwo}</p>
        </div>  

        <div className="dropped-el" onDrop={(event: React.DragEvent<HTMLDivElement>) => {
            setCountryThree(event.dataTransfer.getData('country'))
            const filteredArr = countriesArr.filter(item => item !== event.dataTransfer.getData('country'))
            setCountriesArr(filteredArr)
        }} onDragOver={(event: React.DragEvent<HTMLDivElement>) => event.preventDefault()}>
            <p>{countryThree}</p>
        </div>  

        <div className="dropped-el" onDrop={(event: React.DragEvent<HTMLDivElement>) => {
            setCountryFour(event.dataTransfer.getData('country'))
            const filteredArr = countriesArr.filter(item => item !== event.dataTransfer.getData('country'))
            setCountriesArr(filteredArr)
        }} onDragOver={(event: React.DragEvent<HTMLDivElement>) => event.preventDefault()}>
            <p>{countryFour}</p>
        </div>  

        <div className="dropped-el" onDrop={(event: React.DragEvent<HTMLDivElement>) => {
            setCountryFive(event.dataTransfer.getData('country'))
            const filteredArr = countriesArr.filter(item => item !== event.dataTransfer.getData('country'))
            setCountriesArr(filteredArr)
        }} onDragOver={(event: React.DragEvent<HTMLDivElement>) => event.preventDefault()}>
            <p>{countryFive}</p>
        </div>  
        </div>   

        <button onClick={() => {
            if (countryOne === 'Mexico' && countryTwo === 'China' && countryThree === 'Canada' && countryFour === 'UK' && countryFive === 'Portugal') {
                setShowResult('right')
                setTimeout(() => {
                    setShow('win')
                }, 1000);
            } else {
                setShowResult('mistake')              
                const getAttemps = localStorage.getItem('attemps')       
                if (!getAttemps) {
                    setShow('two')
                } else if (getAttemps === '2') {
                    setShow('one')
                } else if (getAttemps === '1') {                   
                    setShow('loose')
                }   
            }
        }}>Check</button> 
        {result}
    </div>
    } else if (show === 'two') {
            localStorage.setItem('attemps', '2')        
            showEl = <div>
                <h3>У вас осталось 2 попытки</h3>
                <Link href={'/'}><button>Понятно</button></Link>
                </div>          
    } else if (show === 'one') {
            localStorage.setItem('attemps', '1')
            showEl = <div>
                <h3>У вас осталась 1 попытка</h3>
                <Link href={'/'}><button>Понятно</button></Link>
                </div> 
    } else if (show === 'loose') {
            localStorage.setItem('openSecond', 'false')
            localStorage.setItem('openThird', 'false')
            localStorage.removeItem('attemps')
            showEl = <div>
                <h3>Попытки закончились, вам придется начать игру сначала</h3>
                <Link href={'/'}><button>Понятно</button></Link>
                </div>
    } else if (show === 'win') {
        showEl = <Win/>
    }

    return (
        <div>
            {showEl}
        </div>
    )
}

export default Third