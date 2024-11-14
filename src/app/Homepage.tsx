'use client'

import { FC } from "react"
import Link from "next/link";
import { useSelector } from "react-redux";

interface Store {
    points: number,
    isOpenSecondLevel: boolean,
    isOpenThirdLevel: boolean,
}

const Homepage: FC = () => {
  const isOpenSecondLevel = useSelector((state: Store) => state.isOpenSecondLevel)
  const isOpenThirdLevel = useSelector((state: Store) => state.isOpenThirdLevel)
  let btnToSecondLevel;
  let btnToThirdLevel;
   if (isOpenSecondLevel) {
    btnToSecondLevel = <Link href={'/second-level'}><button>2 уровень</button></Link>
   } else {
    btnToSecondLevel = <button>2 уровень</button>
   }

   if (isOpenThirdLevel) {
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