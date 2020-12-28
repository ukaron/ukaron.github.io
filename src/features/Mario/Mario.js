import React,{useEffect}  from "react";
import mario from '../../image/super-mario-bros-3-8-bit-bfad91a72b0e86a1b6ef2632d0cdd263.png';
import { MarioModel } from "./Mario.styled";


const Mario = ({left}) => {
    console.log(left);
    useEffect(()=>{}, [left])
    return (
        <MarioModel src={mario} left={left}/>
    );
}

export default Mario;