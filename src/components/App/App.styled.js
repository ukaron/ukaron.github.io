import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400vw;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  background: repeat-x center/25% url(${props => props.img});
  display: flex;
`;

export const GameWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


export const Button = styled.button`
  display: block;
`;