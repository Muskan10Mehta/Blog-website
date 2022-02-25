/* eslint-disable no-const-assign */
import './styles';
import './index.css';
import {
    StyledForm,
    StyledFormGroup,
    StyledHeaderImage,
    StyledInput,
    StyledLabel,
    StyledWriteArea,
} from './styles';
import Button from './../../common/components/button';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from './../../context/Context';

export default function Write() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState('');
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            description,
            categories,
        };

        if (categories) {
            newPost.categories = categories.split(',');
            await axios.post('/categories', newPost.categories);
        }

        if (file) {
            const data = new FormData();

            //creates unique filename,if user adds file with same name again it won't create conflict
            const fileName = Date.now() + file.name;
            data.append('name', fileName);
            data.append('file', file);
            newPost.header = fileName;

            try {
                await axios.post('/upload', data);
            } catch (err) {}
        }
        try {
            const response = await axios.post('/posts', newPost);
            window.location.replace('/viewpost/' + response.data._id);
        } catch (err) {}
    };

    return (
        <>
            <StyledWriteArea>
                {/* {isError && <p>Error in uploading file...</p>} */}
                {file && (
                    //creates url for the file
                    <StyledHeaderImage
                        src={URL.createObjectURL(file)}
                    ></StyledHeaderImage>
                )}

                <StyledForm onSubmit={handleSubmit}>
                    <StyledFormGroup>
                        <Button
                            onclick=""
                            label="Publish"
                            position="absolute"
                            top="20px"
                            right="50px"
                            type="submit"
                        />
                        <StyledLabel for="fileInput">
                            Add Header Image
                        </StyledLabel>
                        <StyledInput
                            type="file"
                            id="fileInput"
                            style={{ display: 'none' }}
                            onChange={(e) => setFile(e.target.files[0])}
                        ></StyledInput>
                        <StyledInput
                            type="text"
                            placeholder="Title"
                            autoFocus={true}
                            onChange={(e) => setTitle(e.target.value)}
                        ></StyledInput>
                    </StyledFormGroup>
                    <StyledFormGroup>
                        <StyledInput
                            type="text"
                            placeholder="add categories here seperated by commas..."
                            autoFocus={true}
                            onChange={(e) => setCategories(e.target.value)}
                            categories
                        ></StyledInput>
                    </StyledFormGroup>
                    <StyledFormGroup>
                        <textarea
                            placeholder="Write your post here..."
                            type="text"
                            className="writeText"
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </StyledFormGroup>
                </StyledForm>
            </StyledWriteArea>
        </>
    );
}
