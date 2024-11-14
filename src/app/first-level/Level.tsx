'use client'

import { FC, useEffect, useState } from "react";
import './level.css'
import { useDispatch } from "react-redux";

interface Props {
    img: string,
    country: string,
    arrCountries: string[],
    setQues: Function,
    ques: number,
}

const Level: FC <Props> = (props) => {

    const [randomList, setRandomList] = useState <string[]> ([])
    const [ask, setAsk] = useState <boolean> (false)
    const dispatch = useDispatch()
 
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
        const resultList: string[] = []
        for (let i = 0; i < 4; i++) {
            if (i === 0) {
                const randomNum = Math.floor(Math.random() * newRandomList.length);
                resultList.push(newRandomList[randomNum])
            } else if (i === 1) {
                const filteredArr = newRandomList.filter(item => item !== resultList[0])
                const randomNum = Math.floor(Math.random() * filteredArr.length);
                resultList.push(filteredArr[randomNum])
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
        setRandomList(resultList)
    }, [props.country])

    return (
        <div>
            <ul>
                {randomList.map((item, index) => {
                    if (ask === false) {
                        return <li key={index} onClick={() => {
                            if (item === props.country) {                               
                                setAsk(true)
                                dispatch({type: 'PLUS'})
                                setTimeout(() => {
                                    props.setQues()
                                    setAsk(false)
                                }, 1000)
                            } else {
                                setAsk(true)
                                setTimeout(() => {
                                    props.setQues()
                                    setAsk(false)
                                }, 1000)
                            }
                        }}>
                            <div>
                                <p>{item}</p>
                            </div>
                        </li>
                    } else {
                        if (item === props.country) {
                            return <li key={index}>
                                <div className="true-country">
                                    <p>{item}</p>
                                </div>
                            </li>
                        } else {
                            return <li key={index}>
                                <div className="false-country">
                                    <p>{item}</p>
                                </div>
                            </li>
                        }
                    }
                })}
            </ul>
            <img src= {props.img}/>        
        </div>
    )
}

export default Level