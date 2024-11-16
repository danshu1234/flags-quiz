'use client'

import { FC } from "react"
import Link from "next/link";

const Homepage: FC = () => {
  let btnToSecondLevel;
  let btnToThirdLevel;


  const openSecond = localStorage.getItem('openSecond')

   if (openSecond === 'true') {
    btnToSecondLevel = <Link href={'/second-level'}><button>2 уровень</button></Link>
   } else {
    btnToSecondLevel = <button>2 уровень</button>
   }

  const openThird = localStorage.getItem('openThird')

   if (openThird === 'true') {
    btnToThirdLevel = <Link href={'/third-level'}><button>3 уровень</button></Link>
   } else {
    btnToThirdLevel = <button>3 уровень</button>
   }

  return (
    <div>
        <Link href={'/first-level'}><button>1 уровень</button></Link>
      {btnToSecondLevel}
      {btnToThirdLevel}
    </div>
  )
}

export default Homepage