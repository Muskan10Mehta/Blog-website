import React from 'react';
import {
    StyledHeader,
    StyledItems,
    StyledList,
    StyledListItem,
} from './styles';
//import Button from '../button';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <>
            <StyledHeader>
                <StyledItems>
                    <StyledList>
                        <StyledListItem>
                            <Link to="/">Home</Link>
                        </StyledListItem>
                        <StyledListItem>
                            <Link to="/write"> Write</Link>
                        </StyledListItem>

                        {props.user ? (
                            <>
                                <StyledListItem>
                                    <Link to="">Logout</Link>
                                </StyledListItem>
                                <StyledListItem>
                                    <Link to="/settings">User</Link>
                                </StyledListItem>
                            </>
                        ) : (
                            <>
                                <StyledListItem>
                                    <Link to="/login">Login</Link>
                                </StyledListItem>
                                <StyledListItem>
                                    <Link to="/signup">Signup</Link>
                                </StyledListItem>
                            </>
                        )}

                        {/* <StyledListItem>
                            <Link to="/settings">user</Link>
                        </StyledListItem> */}
                    </StyledList>
                </StyledItems>
            </StyledHeader>
        </>
    );
};

export default NavBar;
