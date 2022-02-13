import './styles';
import {
    StyledInput,
    StyledLable,
    StyledLoginArea,
    StyledLoginForm,
} from './styles';
import Button from './../../common/components/button';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <StyledLoginArea>
                <StyledLoginForm>
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

                    <Button label="Login" />
                    <Link to="/Signup">
                        <Button label="Sign Up"></Button>
                    </Link>
                </StyledLoginForm>
            </StyledLoginArea>
        </>
    );
}
