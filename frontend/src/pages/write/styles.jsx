import styled, { css } from 'styled-components';

export const StyledWriteArea = styled.div`
    padding-top: 50px;
`;

export const StyledHeaderImage = styled.img`
    margin-left: 150px;
    width: 70%;
    height: 250px;
    object-fit: cover;
    border-radius: 7px;
`;
export const StyledForm = styled.form`
    position: relative;
`;
export const StyledFormGroup = styled.div`
    margin-left: 150px;
    display: flex;
    align-items: center;
`;
export const StyledInput = styled.input`
    font-size: 30px;
    border: none;
    padding: 20px;

    &:focus {
        outline: none;
    }

    ${(props) =>
        props.categories &&
        css`
            width: 80%;
        `}
`;
export const StyledLabel = styled.label`
    cursor: pointer;
    border: 1px solid black;
    border-radius: 5px;
    padding: 3px;
    font-weight: 500;
    margin-left: 5px;
`;
export const StyledTextArea = styled.div``;
