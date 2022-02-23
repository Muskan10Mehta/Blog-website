import './styles';
import {
    StyledInput,
    StyledLable,
    StyledLoginArea,
    StyledLoginForm,
} from './styles';
import Button from './../../common/components/button';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        try {
            const response = await axios.post('/auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE' });
        }
    };

    return (
        <>
            <StyledLoginArea>
                <StyledLoginForm onSubmit={handleSubmit}>
                    <StyledLable>Username</StyledLable>
                    <StyledInput
                        type="text"
                        placeholder="Enter your username"
                        ref={userRef}
                    ></StyledInput>
                    <StyledLable>Password</StyledLable>
                    <StyledInput
                        type="password"
                        placeholder="Enter your password"
                        ref={passwordRef}
                    ></StyledInput>

                    <Button
                        label="Login"
                        type="submit"
                        disabled={isFetching || false}
                    />
                    <Link to="/Signup">
                        <Button label="Sign Up"></Button>
                    </Link>
                </StyledLoginForm>
            </StyledLoginArea>
        </>
    );
}
