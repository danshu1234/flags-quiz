'use client'

import { FC, useEffect, useState } from "react";
import './second-level.css';
import { useDispatch } from "react-redux";

interface Props {
    colors: string[];
    countryFlag: string;
    handleQues: Function;
    ques: number;
    country: string;
}

const SecondLevel: FC<Props> = (props) => {
    const [colorArr, setColorArr] = useState<string[]>([]);
    const [isRight, setIsRight] = useState<string>('');
    const [trueOrNot, setTrueOrNot] = useState<string>('');
    const dispatch = useDispatch();
    let flag;
    let trueOr;

    useEffect(() => {
        if (isRight === 'No') {
            setColorArr(props.colors);
        }
    }, [isRight]);

    useEffect(() => {
        setColorArr([]);
        setIsRight('');
    }, [props.ques]);

    if (trueOrNot === 'true') {
        trueOr = <h1 className="true">✔</h1>;
    } else if (trueOrNot === 'false') {
        trueOr = <h1 className="not">✘</h1>;
    }

    if (colorArr.length === 0) {
        flag = (
            <div className="flag-contain">
                <div className="flag"></div>
                <div className="flag"></div>
                <div className="flag"></div>
            </div>
        );
    } else if (colorArr.length === 1) {
        flag = (
            <div className="flag-contain">
                <div className={colorArr[0]}></div>
                <div className="flag"></div>
                <div className="flag"></div>
            </div>
        );
    } else if (colorArr.length === 2) {
        flag = (
            <div className="flag-contain">
                <div className={colorArr[0]}></div>
                <div className={colorArr[1]}></div>
                <div className="flag"></div>
            </div>
        );
    } else if (colorArr.length === 3) {
        flag = (
            <div className="flag-contain">
                <div className={colorArr[0]}></div>
                <div className={colorArr[1]}></div>
                <div className={colorArr[2]}></div>
            </div>
        );
    }

    return (
        <div className="main-second">
            <div className="contain-second">
                <h2 className="country-name">{props.country}</h2>
                {flag}
                <button onClick={() => setColorArr(colorArr.slice(0, -1))} className="cancel">Отменить</button>
                <div className="colors-contain">
                    <div className="color-white" onClick={() => {
                        if (colorArr.length < 3) {
                            setColorArr([...colorArr, 'white']);
                        }
                    }}></div>
                    <div className="color-black" onClick={() => {
                        if (colorArr.length < 3) {
                            setColorArr([...colorArr, 'black']);
                        }
                    }}></div>
                    <div className="color-blue" onClick={() => {
                        if (colorArr.length < 3) {
                            setColorArr([...colorArr, 'blue']);
                        }
                    }}></div>
                    <div className="color-red" onClick={() => {
                        if (colorArr.length < 3) {
                            setColorArr([...colorArr, 'red']);
                        }
                    }}></div>
                    <div className="color-green" onClick={() => {
                        if (colorArr.length < 3) {
                            setColorArr([...colorArr, 'green']);
                        }
                    }}></div>
                </div>
                <button onClick={() => {
                    const stringFromColorArr = colorArr.join('');
                    const stringFromPropsArr = props.colors.join('');
                    if (stringFromColorArr === stringFromPropsArr) {
                        setIsRight('Right!');
                        dispatch({ type: 'PLUS2' });
                        setTrueOrNot('true');
                    } else {
                        setIsRight('No');
                        setTrueOrNot('false');
                    }
                    setTimeout(() => {
                        props.handleQues();
                        setTrueOrNot('');
                    }, 1500);
                }} className="check-btn">Проверить</button>
                {trueOr}
            </div>
        </div>
    );
}

export default SecondLevel;
