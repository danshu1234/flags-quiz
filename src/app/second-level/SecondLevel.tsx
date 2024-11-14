'use client'

import { FC, useEffect, useState } from "react"
import './second-level.css'
import { useDispatch } from "react-redux"

interface Props{
  colors: string[],
  countryFlag: string,
  handleQues: Function,
  ques: number,
  country: string,
}

const SecondLevel: FC <Props> = (props) => {

  const [colorArr, setColorArr] = useState <string[]> ([])
  const [isRight, setIsRight] = useState <string> ('')
  const dispatch = useDispatch()
  let flag;
  let trueAsk;

    if (isRight === 'No') {
      trueAsk = <div>
        <p>This is true flag:</p>
        <img src= {props.countryFlag}/>
      </div>
    }

  useEffect(() => {
    setColorArr([])
    setIsRight('')
  }, [props.ques])

  if (colorArr.length === 0) {
    flag = 
    <div className="flag-contain">
    <div className="flag"></div>
    <div className="flag"></div>
    <div className="flag"></div>
  </div>
  } else if (colorArr.length === 1) {
    flag = 
    <div className="flag-contain">
    <div className= {colorArr[0]}></div>
    <div className="flag"></div>
    <div className="flag"></div>
  </div>
  } else if (colorArr.length === 2) {
    flag = 
    <div className="flag-contain">
    <div className = {colorArr[0]}></div>
    <div className = {colorArr[1]}></div>
    <div className="flag"></div>
  </div>
  } else if (colorArr.length === 3) {
    flag = 
    <div className="flag-contain">
    <div className = {colorArr[0]}></div>
    <div className = {colorArr[1]}></div>
    <div className = {colorArr[2]}></div>
  </div>
  }

    return (
          <div>
          <h2>{props.country}</h2>
          <button onClick={() => {
            setColorArr(colorArr.slice(0, -1))                      
          }}>Отменить</button>
          {flag}           
          <div className="colors-contain">
          <div className="color-white" onClick={() => {
            if (colorArr.length < 3) {
              setColorArr([...colorArr, 'white'])
            }
          }}></div>
          <div className="color-black" onClick={() => {
            if (colorArr.length < 3) {
              setColorArr([...colorArr, 'black'])
            }
          }}></div>
          <div className="color-blue" onClick={() => {
            if (colorArr.length < 3) {
              setColorArr([...colorArr, 'blue'])
            }
          }}></div>
          <div className="color-red" onClick={() => {
            if (colorArr.length < 3) {
              setColorArr([...colorArr, 'red'])
            }
          }}></div>
          <div className="color-green" onClick={() => {
            if (colorArr.length < 3) {
              setColorArr([...colorArr, 'green'])
            }
          }}></div>
          </div>
          <button onClick={() => {
            const stringFromColorArr = colorArr.join('')
            const stringFromPropsArr = props.colors.join('')
            if (stringFromColorArr === stringFromPropsArr) {
              setIsRight('Right')
              dispatch({type: 'PLUS2'})
            } else {
              setIsRight('No')
            }     
            setTimeout(() => {
              props.handleQues()
            }, 2000);
          }}>Проверить</button>
          {isRight}
          {trueAsk}
        </div>
    )
}

export default SecondLevel