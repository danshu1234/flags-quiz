'use client'

import { FC, useEffect, useState } from "react"
import Level from "./Level"
import { FirstCountries } from "@/FirstLevelCountries"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import useCounter from "../useCounter"

interface Store {
    points: number,
}

const FirstLevel: FC = () => {

    const {ques, handleQues} = useCounter()
    const points = useSelector((state: Store) => state.points)
    const dispatch = useDispatch()
    let question;

    switch (ques) {
        case 1:
            question = <Level img={'https://9may.shop/image/cache/data/carnival/pobeda/FlagCCCP/Flag_Rossiya-550x582.jpg'} country = {'Russia'} arrCountries = {FirstCountries} setQues = {handleQues} ques = {ques}/>;
            break; 
        case 2:
            question = <Level img={'https://cdn1.ozone.ru/s3/multimedia-0/c600/6053688420.jpg'} country = {'Germany'} arrCountries = {FirstCountries} setQues = {handleQues} ques = {ques}/>;    
            break; 
        case 3:
            question = <Level img={'https://i.pinimg.com/736x/8c/da/61/8cda6119c6efafb6d450ee62b0085a53.jpg'} country = {'USA'} arrCountries = {FirstCountries} setQues = {handleQues} ques = {ques}/>;   
            break; 
        case 4:
            question = <Level img={'https://sun9-42.userapi.com/impf/cHs7cudRgLqCXnV2Gb08qBb-bL0N-RB4pdHBrQ/XgH7APR0BSA.jpg?size=604x403&quality=96&sign=cf5cf78985762f0187bbbc426d43d5f4&c_uniq_tag=eEXphIV_z6g2UFJ5oIqG5WytIyMJiCOem-17eV61g18&type=album'} country= {'Japan'} arrCountries = {FirstCountries} setQues = {handleQues} ques = {ques}/>;  
            break; 
        case 5:
            question = <Level img={'https://cdn.yeniakit.com.tr/images/album/turk-vatandaslarindan-vize-isteyen-ulkeler-iste-tam-liste-0b61f7.jpg'} country= {'Italy'} arrCountries = {FirstCountries} setQues = {handleQues} ques = {ques}/>;       
            break; 
        case 6:
            question = <Level img={'https://ostkraft.ru/insimgs/2100/img2024.jpg'} country= {'Finland'} arrCountries = {FirstCountries} setQues = {handleQues} ques = {ques}/>          
            break;
        case 7:
            question = <Level img={'https://www.kubaninstrument.ru/images/image/holandia-godlo-panstwa-naklejka-flaga-holandii-6603d2da4c4f8392108899.jpg'} country= {'Nederland'} arrCountries = {FirstCountries} setQues = {handleQues} ques = {ques}/>              
            break;
        case 8:
            question = <Level img={'https://www.congoforum.be/wp-content/uploads/2020/06/Vlag-768x535.jpg'} country= {'Belgium'} arrCountries = {FirstCountries} setQues = {handleQues} ques = {ques}/>    
            break;
        case 9:
            question = <Level img={'https://ir.ozone.ru/s3/multimedia-6/c900/6113202006.jpg'} country= {'SAR'} arrCountries = {FirstCountries} setQues = {handleQues} ques = {ques}/>      
            break;
        case 10:
            question = <Level img={'https://sun9-59.userapi.com/impf/c625625/v625625709/1d1bf/yxL65zo8ikw.jpg?size=600x400&quality=96&sign=fabda08b42be2c73a7294a86d0b81052&type=album'} country= {'South-Korea'} arrCountries = {FirstCountries} setQues = {handleQues} ques = {ques}/>    
            break;
        case 11:
            if (points > 7) {
                question = <div>
                    <h2>Cool!</h2>
                    <Link href={'/'}>Go to home page</Link>
                </div>
            } else {
                question = <div>
                    <h2>You need to dial more than 8 points, try again!</h2>
                    <Link href={'/'}>Go to home page</Link>
                </div>
            }
    }  

    useEffect(() => {
        if (ques === 11) {
            if (points > 7) {
                dispatch({type: 'OPEN_SECOND_LEVEL'})
            }
        }
    }, [ques])

    return (
        <div>
            {question}
        </div>
    )
}

export default FirstLevel

