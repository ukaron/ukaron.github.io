import React from 'react';
import  * as S  from './App.styled';
import img from '../../mario-background-png.png';
import Header from "../../features/Header/Header";
import { useDispatch } from "react-redux";
import { gameInit } from "./AppSlice";

const App = () => {
    const dispatch = useDispatch();
    return (
        <S.Wrapper className="App" img={img}>
                <Header/>
                <S.GameWrapper>
                    <S.Button onClick={() => dispatch(gameInit())}>Start</S.Button>
                </S.GameWrapper>
        </S.Wrapper>
  );
}

export default App;
