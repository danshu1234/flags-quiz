'use client'

import { FC, useState } from "react";

const useCounter = () => {
    const [ques, setQues] = useState <number> (1)

    const handleQues = () => {
        setQues(ques + 1)
    }

    return {
        ques, 
        handleQues      
    }
}

export default useCounter