import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400vw;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  background: repeat url(${props => props.img});
  display: flex;
`;

export const GameWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${props=> props.left}vw;
`;


export const Button = styled.button`
  display: block;
`;
export const Sky = styled.div`
  width: 400vw;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  background-image: url(${props => props.img});
  left: 0;
  position: absolute;
`;
export const Ground = styled.div`
  width: 400vw;
  height: 10vh;
  overflow-x: auto;
  overflow-y: hidden;
  background-image: url(${props => props.img});
  display: flex;
  position: absolute;
  bottom: 0;
  background-size: contain;
`;