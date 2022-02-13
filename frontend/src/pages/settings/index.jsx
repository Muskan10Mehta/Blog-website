import './styles';
import {
    StyledfFormInput,
    StyledFormLable,
    StyledProfileImage,
    StyledProfilePicture,
    StyledSettingsArea,
    StyledSettingsForm,
    StyledSettingsTitle,
    StyledSettingsWrapper,
} from './styles';
import SideBar from '../../common/components/sidebar';
import Button from './../../common/components/button';

export default function Settings() {
    return (
        <>
            <StyledSettingsArea>
                <StyledSettingsWrapper>
                    <StyledSettingsTitle>
                        <Button
                            label="Update Account"
                            backgroundColor="white"
                            border="1px solid orange"
                            color="orange"
                            fontWeight="600"
                        />
                        <Button
                            label="Delete Account"
                            backgroundColor="white"
                            border="1px solid red"
                            color="red"
                            fontWeight="600"
                        />
                    </StyledSettingsTitle>
                    <StyledSettingsForm>
                        <StyledFormLable>Profile Picture :</StyledFormLable>
                        <StyledProfilePicture>
                            <StyledProfileImage src="https://images.unsplash.com/photo-1542171696-4a7213cda889?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></StyledProfileImage>

                            <StyledFormLable htmlFor="fileInput">
                                Add
                            </StyledFormLable>
                            <StyledfFormInput
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                            ></StyledfFormInput>
                        </StyledProfilePicture>
                        <StyledFormLable>Username: </StyledFormLable>
                        <StyledfFormInput
                            type="text"
                            placeholder="username"
                        ></StyledfFormInput>
                        <StyledFormLable>Email: </StyledFormLable>
                        <StyledfFormInput
                            type="email"
                            placeholder="email"
                        ></StyledfFormInput>
                        <StyledFormLable>Password: </StyledFormLable>
                        <StyledfFormInput
                            type="password"
                            placeholder="password"
                        ></StyledfFormInput>
                        <Button label="Update" />
                    </StyledSettingsForm>
                </StyledSettingsWrapper>
                <SideBar />
            </StyledSettingsArea>
        </>
    );
}
