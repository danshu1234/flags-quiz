'use client'

import { FC, useEffect, useState } from "react";

interface Props {
    img: string,
    country: string,
    arrCountries: string[],
}

const Level: FC <Props> = (props) => {

    const [randomList, setRandomList] = useState <string[]> ([])
    const [right, setRight] = useState <string> ('')
 
    useEffect(() => {
        const newRandomList: string[] = [props.country]
        for (let i = 0; i < 3; i++) {         
            if (i === 0) {
                const randomNum = Math.floor(Math.random() * props.arrCountries.length)
                newRandomList.push(props.arrCountries[randomNum])
            } else if (i === 1) {
                const filteredArr = props.arrCountries.filter(item => item !== newRandomList[1])
                const randomNum = Math.floor(Math.random() * filteredArr.length)
                newRandomList.push(filteredArr[randomNum])
            } else if (i === 2) {
                const filteredArr = props.arrCountries.filter(item => item !== newRandomList[1] && item !== newRandomList[2])
                const randomNum = Math.floor(Math.random() * filteredArr.length)
                newRandomList.push(filteredArr[randomNum])
            }         
        }
        console.log(newRandomList)
        const resultList: string[] = []
        for (let i = 0; i < 4; i++) {
            if (i === 0) {
                const randomNum = Math.floor(Math.random() * newRandomList.length);
                resultList.push(newRandomList[randomNum])
            } else if (i === 1) {
                const filteredArr = newRandomList.filter(item => item !== resultList[0])
                const randomNum = Math.floor(Math.random() * filteredArr.length);
                resultList.push(filteredArr[randomNum])
                console.log(resultList)
            } else if (i === 2) {
                const filteredArr = newRandomList.filter(item => item !== resultList[0] && item !== resultList[1])
                const randomNum = Math.floor(Math.random() * filteredArr.length);
                resultList.push(filteredArr[randomNum])
            } else if (i === 3) {
                const filteredArr = newRandomList.filter(item => item !== resultList[0] && item !== resultList[1] && item !== resultList[2])
                const randomNum = Math.floor(Math.random() * filteredArr.length);
                resultList.push(filteredArr[randomNum])
            }
        }
        console.log(resultList)
        setRandomList(resultList)
    }, [props.country])
    return (
        <div>
            <ul>
                {randomList.map((item, index) => <li key={index} onClick={() => {
                    if (props.country === item) {
                        setRight('Right!')
                    } else {
                        setRight('No')
                    }                
                }}>{item}</li>)}
            </ul>
            <img src= {props.img}/>   
            {right}        
        </div>
    )
}

export default Level