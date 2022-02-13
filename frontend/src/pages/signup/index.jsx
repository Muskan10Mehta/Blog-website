import './styles';
import {
    StyledSignupArea,
    StyledInput,
    StyledLable,
    StyledSignupForm,
} from './styles';
import Button from './../../common/components/button';
import { Link } from 'react-router-dom';

export default function Signup() {
    return (
        <>
            <StyledSignupArea>
                <StyledSignupForm>
                    <StyledLable>Username</StyledLable>
                    <StyledInput
                        type="text"
                        placeholder="Enter a username"
                    ></StyledInput>
                    <StyledLable>Email</StyledLable>
                    <StyledInput
                        type="email"
                        placeholder="Enter your email"
                    ></StyledInput>
                    <StyledLable>Password</StyledLable>
                    <StyledInput
                        type="password"
                        placeholder="Enter your password"
                    ></StyledInput>

                    <Button label="Sign up" />
                    <Link to="/login">
                        <Button label="Login"></Button>
                    </Link>
                </StyledSignupForm>
            </StyledSignupArea>
        </>
    );
}
