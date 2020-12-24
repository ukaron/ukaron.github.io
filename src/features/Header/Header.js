import React from 'react';
import Timer from "./components/Timer/Timer";
import { HeaderWrapper } from "./Header.styled";

const Header = ({ready}) => {
    return (
        <HeaderWrapper>
            <Timer ready={ready} />
        </HeaderWrapper>
    );
}
export default Header;