import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { AppSelector } from "../../../../components/App/AppSlice";

const Timer = () => {
    const { gameStatus } = useSelector(AppSelector);

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        gameStatus && setTimer(90);
    }, [gameStatus])
    return (
        <h1>Time: {timer}</h1>
    );
}
export default Timer;