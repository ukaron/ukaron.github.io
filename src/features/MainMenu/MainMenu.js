import React from "react";
import * as S from "./MainMenu.styled";
import { gameInit } from "../../components/App/AppSlice";
import { useDispatch } from "react-redux";

const MainMenu = () => {
    const dispatch = useDispatch();
    return (
        <S.Button onClick={() => dispatch(gameInit())}>Start</S.Button>
    );
}

export default MainMenu;