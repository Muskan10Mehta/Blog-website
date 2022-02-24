import React from 'react';
import {
    StyledHeader,
    StyledList,
    StyledListItem,
    StyledImage,
    StyledItemsLeft,
    StyledItemsRight,
} from './styles';
//import Button from '../button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../../context/Context';

const NavBar = () => {
    const { user, dispatch } = useContext(Context);
    const publicFolder = 'http://localhost:3001/postImages/';

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };
    return (
        <>
            <StyledHeader>
                <StyledItemsLeft>
                    <StyledList>
                        <StyledListItem>
                            <Link to="/" className="link">
                                Home
                            </Link>
                        </StyledListItem>
                        <StyledListItem>
                            <Link to="/write" className="link">
                                Write
                            </Link>
                        </StyledListItem>
                    </StyledList>
                </StyledItemsLeft>
                <StyledItemsRight>
                    <StyledList>
                        {user ? (
                            <>
                                <StyledListItem username>
                                    <Link to="/settings" className="link">
                                        {user.username}
                                        <StyledImage
                                            src={
                                                publicFolder +
                                                user.profilePicture
                                            }
                                        />
                                    </Link>
                                </StyledListItem>
                                <StyledListItem onClick={handleLogout} logout>
                                    <Link to="/login" className="link">
                                        Logout
                                    </Link>
                                </StyledListItem>
                            </>
                        ) : (
                            <>
                                <StyledListItem>
                                    <Link to="/login" className="link">
                                        Login
                                    </Link>
                                </StyledListItem>
                                <StyledListItem>
                                    <Link to="/signup" className="link">
                                        Signup
                                    </Link>
                                </StyledListItem>
                            </>
                        )}
                    </StyledList>
                </StyledItemsRight>
            </StyledHeader>
        </>
    );
};

export default NavBar;
