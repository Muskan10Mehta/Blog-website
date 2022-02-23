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
import { StyledInput } from '../../../pages/write/styles';
import Button from '../button';

export default function SinglePost() {
    const { user } = useContext(Context);
    const publicFolder = 'http://localhost:3001/postImages/';
    const location = useLocation();

    // post id
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get('/posts/' + path);
            setPost(response.data);
            setTitle(response.data.title);
            setDescription(response.data.description);
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
        try {
            await axios.put('/posts/' + path, {
                username: user.username,
                title,
                description,
            });
            setUpdateMode(false);
        } catch (error) {}
    };
    return (
        <>
            <SytledSinglePostArea>
                <StyledSinglePostWrapper>
                    {post.header && (
                        <StyledSinglePostImage
                            src={publicFolder + post.header}
                        ></StyledSinglePostImage>
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
                                    <Styledicon delete onClick={handleDelete}>
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
                        <Button label="Update" onClick={handleUpdate} />
                    )}
                </StyledSinglePostWrapper>
            </SytledSinglePostArea>
        </>
    );
}
