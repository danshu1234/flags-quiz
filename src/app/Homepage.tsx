'use client'

import { FC } from "react"
import Link from "next/link";
import { useSelector } from "react-redux";

interface Store {
    points: number,
    isOpenSecondLevel: boolean
}

const Homepage: FC = () => {
  const isOpenSecondLevel = useSelector((state: Store) => state.isOpenSecondLevel)
  let btnToSecondLevel;
   if (isOpenSecondLevel) {
    btnToSecondLevel = <Link href={'second-level'}><button>2 уровень</button></Link>
   } else {
    btnToSecondLevel = <button>2 уровень</button>
   }

  return (
    <div>
        <Link href={'/first-level'}><button>1 уровень</button></Link>
      {btnToSecondLevel}
    </div>
  )
}

export default Homepage