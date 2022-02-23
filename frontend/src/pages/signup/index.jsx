import './styles';
import {
    StyledSignupArea,
    StyledInput,
    StyledLable,
    StyledSignupForm,
    StyledError,
} from './styles';
import Button from './../../common/components/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        // prevents reload of page when form is empty
        e.preventDefault();
        setError(false);
        try {
            const response = await axios.post('/auth/signup', {
                username,
                email,
                password,
            });

            //if there is data from signup form, change to login page for user to login
            if (response.data) {
                window.location.replace('/login');
            }
        } catch (err) {
            setError(true);
        }
    };
    return (
        <>
            <StyledSignupArea>
                {error && (
                    <StyledError>
                        Username/email is already registered or try filling all
                        the fields before signing up.
                    </StyledError>
                )}
                <StyledSignupForm onSubmit={handleSubmit}>
                    <StyledLable>Username</StyledLable>
                    <StyledInput
                        type="text"
                        placeholder="Enter a username"
                        onChange={(val) => setUsername(val.target.value)}
                    ></StyledInput>
                    <StyledLable>Email</StyledLable>
                    <StyledInput
                        type="email"
                        placeholder="Enter your email"
                        onChange={(val) => setEmail(val.target.value)}
                    ></StyledInput>
                    <StyledLable>Password</StyledLable>
                    <StyledInput
                        type="password"
                        placeholder="Enter your password"
                        onChange={(val) => setPassword(val.target.value)}
                    ></StyledInput>

                    <Button label="Sign up" type="submit" />
                    <Link to="/login">
                        <Button label="Login"></Button>
                    </Link>
                </StyledSignupForm>
            </StyledSignupArea>
        </>
    );
}
