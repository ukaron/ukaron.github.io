import styled from "styled-components";

export const MarioModel = styled.img`
  position: absolute;
  width: 5vw;
  bottom: 10vh;
  left: ${props=> props.left}vw;
`;