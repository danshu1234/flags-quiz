'use client'

import { FC } from "react";
import SecondLevel from "./SecondLevel";
import useCounter from "../useCounter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

interface Store {
    points: number;
    isOpenSecondLevel: boolean;
    points2: number;
    isOpenThirdLevel: boolean;
}

const Second: FC = () => {
    const { ques, handleQues } = useCounter();
    const points2 = useSelector((state: Store) => state.points2);
    const dispatch = useDispatch();
    let question;

    switch (ques) {
        case 1:
            question = (
                <SecondLevel 
                    colors={['blue', 'black', 'white']} 
                    countryFlag={'https://upload.wikimedia.org/wikipedia/commons/thumb/archive/2/2f/20101003093135%21Flag_of_Estonia_%28bordered%29.svg/120px-Flag_of_Estonia_%28bordered%29.svg.png'} 
                    handleQues={handleQues} 
                    ques={ques} 
                    country={'Estonia'} 
                />
            );
            break;

        case 2:
            question = (
                <SecondLevel 
                    colors={['red', 'white', 'blue']} 
                    countryFlag={'https://upload.wikimedia.org/wikipedia/commons/thumb/archive/e/ec/20080105160808%21Flag_of_the_Kingdom_of_Croatia.svg/120px-Flag_of_the_Kingdom_of_Croatia.svg.png'} 
                    handleQues={handleQues} 
                    ques={ques} 
                    country={'Nederlands'} 
                />
            );
            break;

        case 3:
            question = (
                <SecondLevel 
                    colors={['red', 'white', 'red']} 
                    countryFlag={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/POL_Sztum_flag.svg/260px-POL_Sztum_flag.svg.png'} 
                    handleQues={handleQues} 
                    ques={ques} 
                    country={'Austria'} 
                />
            );
            break;

        case 4:
            question = (
                <SecondLevel 
                    colors={['red', 'white', 'green']} 
                    countryFlag={'https://i.pinimg.com/originals/f6/bf/70/f6bf70d47c09ce65367b96478b843c19.gif'} 
                    handleQues={handleQues} 
                    ques={ques} 
                    country={'Hungary'} 
                />
            );
            break;

        case 5:
            question = (
                <SecondLevel 
                    colors={['red', 'blue', 'white']} 
                    countryFlag={'https://pickimage.ru/wp-content/uploads/images/flagi/serbia/serbski5.jpg'} 
                    handleQues={handleQues} 
                    ques={ques} 
                    country={'Serbia'} 
                />
            );
            break;

        case 6:
            if (points2 > 3) {
                question = (
                    <div className="contain-result">
                        <h2 className="succes">Уровень пройден!</h2>
                        <Link href={'/'} className="go-home">Вернуться на главную</Link>
                    </div>
                );
            } else {
                question = (
                    <div className="contain-result">
                        <h2 className="succes">Вам нужно набрать 4 или более очков</h2>
                        <Link href={'/'} className="go-home">Вернуться на главную</Link>
                    </div>
                );
            }
            break;
    }

    useEffect(() => {
        if (ques === 6) {
            if (points2 > 3) {
                localStorage.setItem('openThird', 'true');
                const days = 7;
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                const expires = "expires=" + date.toUTCString();
                document.cookie = `third=true; ${expires}; path=/`;
            } else {
                dispatch({ type: 'NULL_TWO' });
            }
        }
    }, [ques]);

    return (
        <div>
            {question}
        </div>
    );
}

export default Second;
