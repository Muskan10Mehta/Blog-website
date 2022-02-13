import styled from 'styled-components';

export const StyledSettingsArea = styled.div`
    display: flex;
`;
export const StyledSettingsWrapper = styled.div`
    flex: 9;
    padding: 20px;
`;

export const StyledSettingsTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledSettingsForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const StyledFormLable = styled.label`
    font-weight: 600px;
    font-size: 20px;
    margin-left: 10px;
    margin-top: 20px;
`;
export const StyledfFormInput = styled.input`
    width: 35%;
    margin: 10px 0;
    border: none;
    border-bottom: 1px solid black;
`;
export const StyledProfilePicture = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
`;
export const StyledProfileImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
`;
