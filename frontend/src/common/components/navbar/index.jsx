import React from 'react';
import {
    StyledHeader,
    StyledItems,
    StyledList,
    StyledListItem,
} from './styles';
//import Button from '../button';

const NavBar = () => {
    return (
        <>
            <StyledHeader>
                <StyledItems>
                    <StyledList>
                        <StyledListItem>Home</StyledListItem>
                        <StyledListItem>Write</StyledListItem>
                        <StyledListItem>Logout</StyledListItem>
                    </StyledList>
                </StyledItems>
            </StyledHeader>
        </>
    );
};

export default NavBar;
