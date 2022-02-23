import React from 'react';
import {
    StyledHeader,
    StyledItems,
    StyledList,
    StyledListItem,
    StyledImage,
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
                <StyledItems>
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

                        {user ? (
                            <>
                                <StyledListItem onClick={handleLogout}>
                                    <Link to="/login" className="link">
                                        Logout
                                    </Link>
                                </StyledListItem>
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
