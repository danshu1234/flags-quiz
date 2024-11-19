import { FC } from "react";
import Second from "./Second";
import './second-level.css'

const SecondLevel: FC = () => {
    return (
        <div className="second-level-contain">
            <Second/>
        </div>
    )
}

export default SecondLevel