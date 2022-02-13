import styled from 'styled-components';

export const StyledSignupArea = styled.div`
    display: flex;
    height: calc(100vh - 50px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('https://images.unsplash.com/photo-1617603567619-f80d651fcc12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=979&q=80');
    background-size: cover;
`;
export const StyledSignupForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 7px;
    padding: 20px;
`;
export const StyledLable = styled.label`
    font-weight: 600px;
    font-size: 20px;
    margin-left: 10px;
    margin-top: 20px;
`;
export const StyledInput = styled.input`
    width: 100%;
    margin: 10px 0;
    border: none;
    border-bottom: 1px solid black;
`;
