'use client'

import { FC, useState } from "react"
import Level from "../Level"
import { FirstCountries } from "@/FirstLevelCountries"

const FirstLevel: FC = () => {

    const [ques, setQues] = useState <number> (3)
    let question;

    switch (ques) {
        case 1:
            question = <Level img={'https://9may.shop/image/cache/data/carnival/pobeda/FlagCCCP/Flag_Rossiya-550x582.jpg'} country = {'Russia'} arrCountries = {FirstCountries}/>;
            break; 
        case 2:
            question = <Level img={'https://cdn1.ozone.ru/s3/multimedia-0/c600/6053688420.jpg'} country = {'Germany'} arrCountries = {FirstCountries}/>;    
            break; 
        case 3:
            question = <Level img={'https://i.pinimg.com/736x/8c/da/61/8cda6119c6efafb6d450ee62b0085a53.jpg'} country = {'USA'} arrCountries = {FirstCountries}/>;   
            break; 
        case 4:
            question = <Level img={'https://sun9-42.userapi.com/impf/cHs7cudRgLqCXnV2Gb08qBb-bL0N-RB4pdHBrQ/XgH7APR0BSA.jpg?size=604x403&quality=96&sign=cf5cf78985762f0187bbbc426d43d5f4&c_uniq_tag=eEXphIV_z6g2UFJ5oIqG5WytIyMJiCOem-17eV61g18&type=album'} country= {'Japan'} arrCountries = {FirstCountries}/>;  
            break; 
        case 5:
            question = <Level img={'https://cdn.yeniakit.com.tr/images/album/turk-vatandaslarindan-vize-isteyen-ulkeler-iste-tam-liste-0b61f7.jpg'} country= {'Italy'} arrCountries = {FirstCountries}/>;       
            break; 
    }
    
    return (
        <div>
            {question}
        </div>
    )
}

export default FirstLevel