'use client'

import { FC } from "react"
import Link from "next/link";
import './home.css'

const Homepage: FC = () => {
  let btnToSecondLevel;
  let btnToThirdLevel;

  const openSecond = localStorage.getItem('openSecond')

   if (openSecond === 'true') {
    btnToSecondLevel = <Link href={'/second-level'}><button className="to-second-level">2 уровень</button></Link>
   } else {
    btnToSecondLevel = <button className="inactive-btn-2">2 уровень</button>
   }

  const openThird = localStorage.getItem('openThird')

   if (openThird === 'true') {
    btnToThirdLevel = <Link href={'/third-level'}><button className="to-third-level">3 уровень</button></Link>
   } else {
    btnToThirdLevel = <button className="inactive-btn-3">3 уровень</button>
   }

  return (
    <div>
      <Link href={'/first-level'}><button className="to-first-level">1 уровень</button></Link>
      {btnToSecondLevel}
      {btnToThirdLevel}
    </div>
  )
}

export default Homepage