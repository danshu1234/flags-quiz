'use client'

import { FC, useEffect } from "react";
import Level from "./Level";
import { FirstCountries } from "@/FirstLevelCountries";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import useCounter from "../useCounter";

interface Store {
   points: number;
}

const FirstLevel: FC = () => {
   const { ques, handleQues } = useCounter();
   const points = useSelector((state: Store) => state.points);
   const dispatch = useDispatch();
   let question;

   switch (ques) {
       case 1:
           question = <Level img={`https://mpsatp.ru/wp-content/uploads/2023/11/10-1536x864.png`} country={'Russia'} arrCountries={FirstCountries} setQues={handleQues} ques={ques} />;
           break;
       case 2:
           question = <Level img={'https://cdn1.ozone.ru/s3/multimedia-0/c600/6053688420.jpg'} country={'Germany'} arrCountries={FirstCountries} setQues={handleQues} ques={ques} />;
           break;
       case 3:
           question = <Level img={'https://digiseller.mycdn.ink/preview/147467/p1_2213209_cd8256a7.jpg'} country={'USA'} arrCountries={FirstCountries} setQues={handleQues} ques={ques} />;
           break;
       case 4:
           question = <Level img={'https://sun9-42.userapi.com/impf/cHs7cudRgLqCXnV2Gb08qBb-bL0N-RB4pdHBrQ/XgH7APR0BSA.jpg?size=604x403&quality=96&sign=cf5cf78985762f0187bbbc426d43d5f4&c_uniq_tag=eEXphIV_z6g2UFJ5oIqG5WytIyMJiCOem-17eV61g18&type=album'} country={'Japan'} arrCountries={FirstCountries} setQues={handleQues} ques={ques} />;
           break;
       case 5:
           question = <Level img={'https://avatars.mds.yandex.net/get-ydo/1384592/2a000001779106527ca1d4840862f7aa3a73/diploma'} country={'Italy'} arrCountries={FirstCountries} setQues={handleQues} ques={ques} />;
           break;
       case 6:
           question = <Level img={'https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/2000px-Flag_of_Finland.svg.png?ssl=1'} country={'Finland'} arrCountries={FirstCountries} setQues={handleQues} ques={ques} />;
           break;
       case 7:
           question = <Level img={'https://img.goodfon.ru/original/5000x3334/1/ce/holland-netherlands-flag-of-netherlands-dutch-flag-flag.jpg'} country={'Nederland'} arrCountries={FirstCountries} setQues={handleQues} ques={ques} />;
           break;
       case 8:
           question = <Level img={'https://i0.wp.com/flagof.ru/wp-content/uploads/2018/10/belgia_flag.jpg'} country={'Belgium'} arrCountries={FirstCountries} setQues={handleQues} ques={ques} />;
           break;
       case 9:
           question = <Level img={'https://i.ytimg.com/vi/1l3kOxqI1Qg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBEgcihCMA8=&amp;rs=AOn4CLCI_-ud0zVAq2xZUE_taT0p1XRRUA'} country={'SAR'} arrCountries={FirstCountries} setQues={handleQues} ques={ques} />;
           break;
       case 10:
           question = <Level img={'https://sun9-59.userapi.com/impf/c625625/v625625709/1d1bf/yxL65zo8ikw.jpg?size=600x400&quality=96&sign=fabda08b42be2c73a7294a86d0b81052&type=album'} country={'South-Korea'} arrCountries={FirstCountries} setQues={handleQues} ques={ques} />;
           break;
       case 11:
           if (points > 7) {
               question = (
                   <div className="contain-result">
                       <h2 className="succes">Уровень пройден!</h2>
                       <Link href={'/'} className="go-home">Вернуться на главную</Link>
                   </div>
               );
           } else {
               question = (
                   <div className="contain-result">
                       <h2 className="succes">Вам нужно набрать 8 или более очков</h2>
                       <Link href={'/'} className="go-home">Вернуться на главную</Link>
                   </div>
               );
           }
           break;
   }

   useEffect(() => {
       if (ques === 11) {
           if (points > 7) {
               localStorage.setItem('openSecond', 'true');
               document.cookie = 'second=true';
           } else {
               dispatch({ type: 'NULL_ONE' });
           }
       }
   }, [ques]);

   return (
       <div>
           {question}
       </div>
   );
}

export default FirstLevel;
