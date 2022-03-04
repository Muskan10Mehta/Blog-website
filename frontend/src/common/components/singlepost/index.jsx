import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import './styles';
import './../../../pages/write/index.css';
import {
    StyledDate,
    StyledDescription,
    StyledEdit,
    Styledicon,
    StyledInfo,
    StyledSinglePostAuthor,
    StyledSinglePostImage,
    StyledSinglePostTitle,
    StyledSinglePostWrapper,
    SytledSinglePostArea,
} from './styles';
import { useState, useContext } from 'react';
import { Context } from './../../../context/Context';
import { StyledInput, StyledLabel } from '../../../pages/write/styles';
import { StyledPostTag, StyledPostTags } from '../post/styles';
import Button from '../button';

export default function SinglePost() {
    const { user } = useContext(Context);
    const publicFolder = 'http://localhost:3001/postImages/';
    const location = useLocation();

    // post id
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get('/posts/' + path);
            setPost(response.data);
            setTitle(response.data.title);
            setDescription(response.data.description);
            setCategories(response.data.categories);
            setFile(response.data.file);
        };
        getPost();
    }, [path]);

    const handleDelete = async (e) => {
        try {
            await axios.delete('/posts/' + path, {
                data: { username: user.username },
            });
            window.location.replace('/');
        } catch (error) {}
    };

    const handleUpdate = async () => {
        const updatedPost = {
            username: user.username,
            title,
            description,
            categories: categories.split(','),
        };

        if (file) {
            console.log('found file');
            const data = new FormData();

            //creates unique filename,if user adds file with same name again it won't create conflict
            const fileName = Date.now() + file.name;
            data.append('name', fileName);
            data.append('file', file);
            updatedPost.header = fileName;
            //console.log(updatedPost.header);

            try {
                await axios.post('/upload', data);
            } catch (err) {}
        }

        try {
            await axios.put('/posts/' + path, updatedPost);
            setUpdateMode(false);
        } catch (error) {}
    };

    return (
        <>
            <SytledSinglePostArea>
                <StyledSinglePostWrapper>
                    <form onSubmit={handleUpdate}>
                        <StyledSinglePostImage
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : publicFolder + post.header
                            }
                        ></StyledSinglePostImage>

                        {updateMode && (
                            <>
                                <StyledLabel for="fileInput">
                                    Add Header Image
                                </StyledLabel>
                                <StyledInput
                                    type="file"
                                    id="fileInput"
                                    style={{ display: 'none' }}
                                    onChange={(e) => setFile(e.target.files[0])}
                                ></StyledInput>
                            </>
                        )}

                        {updateMode ? (
                            <StyledInput
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            ></StyledInput>
                        ) : (
                            <StyledSinglePostTitle>
                                {title}
                                {/* user? for if there is no user it won't show any error */}
                                {post.username === user?.username && (
                                    <StyledEdit>
                                        <Styledicon
                                            edit
                                            onClick={() => setUpdateMode(true)}
                                        >
                                            Edit
                                        </Styledicon>
                                        <Styledicon
                                            delete
                                            onClick={handleDelete}
                                        >
                                            Delete
                                        </Styledicon>
                                    </StyledEdit>
                                )}
                            </StyledSinglePostTitle>
                        )}
                        <StyledInfo>
                            <StyledSinglePostAuthor>
                                <Link
                                    to={`/?user=${post.username}`}
                                    className="link"
                                >
                                    Author : {post.username}
                                </Link>
                            </StyledSinglePostAuthor>
                            <StyledDate>
                                {new Date(post.createdAt).toDateString()}
                            </StyledDate>
                        </StyledInfo>

                        {updateMode ? (
                            <textarea
                                className="writeText"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        ) : (
                            <StyledDescription>{description}</StyledDescription>
                        )}
                        {updateMode && (
                            <Button
                                label="Update"
                                onClick={handleUpdate}
                                type="submit"
                            />
                        )}

                        {updateMode ? (
                            <StyledInput
                                type="text"
                                value={categories}
                                placeholder="add categories here seperated by commas..."
                                autoFocus={true}
                                onChange={(e) => setCategories(e.target.value)}
                                categories
                            ></StyledInput>
                        ) : (
                            <StyledPostTags>
                                {post.categories &&
                                    post.categories.map((category) => (
                                        <Link
                                            to={`/?category=${category}`}
                                            className="link"
                                        >
                                            <StyledPostTag>
                                                {category}
                                            </StyledPostTag>
                                        </Link>
                                    ))}
                            </StyledPostTags>
                        )}
                    </form>
                </StyledSinglePostWrapper>
            </SytledSinglePostArea>
        </>
    );
}
