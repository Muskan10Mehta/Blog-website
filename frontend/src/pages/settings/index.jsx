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
import Button from './../../common/components/button';
import { Context } from '../../context/Context';
import { useContext, useState } from 'react';
import axios from 'axios';

export default function Settings() {
    const { user, dispatch } = useContext(Context);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [file, setFile] = useState(null);
    const publicFolder = 'http://localhost:3001/postImages/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_START' });

        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };

        if (file) {
            const data = new FormData();

            //creates unique filename,if user adds file with same name again it won't create conflict
            const fileName = Date.now() + file.name;
            data.append('name', fileName);
            data.append('file', file);
            updatedUser.profilePicture = fileName;

            try {
                await axios.post('/upload', data);
                setSuccess(true);
            } catch (err) {}
        }

        try {
            const response = await axios.put('/users/' + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: 'UPDATE_SUCCESS', payload: response.data });
        } catch (err) {
            dispatch({ type: 'UPDATE_FAILURE' });
        }
    };

    const handleDelete = async (e) => {
        try {
            await axios.delete('/users/' + user._id, {
                data: { userId: user._id },
            });
            dispatch({ type: 'LOGOUT' });
        } catch (error) {}
    };

    return (
        <>
            <StyledSettingsArea>
                <StyledSettingsWrapper>
                    <StyledSettingsTitle>
                        <Button
                            label="Delete Account"
                            backgroundColor="white"
                            border="1px solid red"
                            color="red"
                            fontWeight="600"
                            onClick={handleDelete}
                        />
                    </StyledSettingsTitle>
                    <StyledSettingsForm onSubmit={handleSubmit}>
                        <StyledFormLable>Profile Picture :</StyledFormLable>
                        <StyledProfilePicture>
                            <StyledProfileImage
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : publicFolder + user.profilePicture
                                }
                            ></StyledProfileImage>

                            <StyledFormLable htmlFor="fileInput">
                                Add/Change
                            </StyledFormLable>
                            <StyledfFormInput
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                onChange={(e) => setFile(e.target.files[0])}
                            ></StyledfFormInput>
                        </StyledProfilePicture>
                        <StyledFormLable>Username: </StyledFormLable>
                        <StyledfFormInput
                            type="text"
                            placeholder={user.username}
                            onChange={(e) => setUsername(e.target.value)}
                        ></StyledfFormInput>
                        <StyledFormLable>Email: </StyledFormLable>
                        <StyledfFormInput
                            type="email"
                            placeholder={user.email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></StyledfFormInput>
                        <StyledFormLable>Password: </StyledFormLable>
                        <StyledfFormInput
                            type="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        ></StyledfFormInput>
                        <Button
                            label="Update Account"
                            backgroundColor="white"
                            border="1px solid orange"
                            color="orange"
                            fontWeight="600"
                            type="submit"
                        />
                        {success && <h4>Profile Updated!</h4>}
                    </StyledSettingsForm>
                </StyledSettingsWrapper>
            </StyledSettingsArea>
        </>
    );
}
