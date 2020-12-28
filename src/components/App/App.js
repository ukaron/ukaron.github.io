import React, { useEffect, useState } from 'react';
import  * as S  from './App.styled';
import sky from '../../image/background.jpg';
import ground from '../../image/ground.png';
import Header from "../../features/Header/Header";
import MainMenu from "../../features/MainMenu";
import Mario from "../../features/Mario";

const App = () => {
    const [left, setLeft] = useState(0);
    useEffect(()=>{
        window.addEventListener("keydown", (e)=>{
            console.log(e);
            if(e.key === "ArrowRight") setLeft((left)=> left - 1)
            if(e.key === "ArrowLeft") setLeft((left)=> left + 1)
        })
    },[])
    return (
        <S.Wrapper className="App" >
            <S.Sky img={sky}/>
            <Header/>
                <S.GameWrapper left={left} >
                    <MainMenu />
                    <Mario left={left}/>
                    <S.Ground img={ground}/>
                </S.GameWrapper>
        </S.Wrapper>
  );
}

export default App;
