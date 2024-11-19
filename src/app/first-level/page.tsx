import { FC } from "react";
import FirstLevel from "./First";
import './level.css'

const First: FC = () => {
    return (
        <div className="first-level-contain">
            <FirstLevel/>
        </div>
    )
}

export default First