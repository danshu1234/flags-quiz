'use client';

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import './home.css';

const Homepage: FC = () => {
  const [btnToSecondLevel, setBtnToSecondLevel] = useState<JSX.Element | null>(null);
  const [btnToThirdLevel, setBtnToThirdLevel] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const openSecond = localStorage.getItem('openSecond');
    const openThird = localStorage.getItem('openThird');

    if (openSecond === 'true') {
      setBtnToSecondLevel(
        <Link href={'/second-level'}>
          <button className="to-second-level">2 уровень</button>
        </Link>
      );
    } else {
      setBtnToSecondLevel(
        <button className="inactive-btn-2">2 уровень</button>
      );
    }

    if (openThird === 'true') {
      setBtnToThirdLevel(
        <Link href={'/third-level'}>
          <button className="to-third-level">3 уровень</button>
        </Link>
      );
    } else {
      setBtnToThirdLevel(
        <button className="inactive-btn-3">3 уровень</button>
      );
    }
  }, []);

  return (
    <div>
      <Link href={'/first-level'}>
        <button className="to-first-level">1 уровень</button>
      </Link>
      {btnToSecondLevel}
      {btnToThirdLevel}
    </div>
  );
}

export default Homepage;
