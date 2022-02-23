import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../common/components/header';
import Posts from '../../common/components/posts';
import SideBar from '../../common/components/sidebar';
import { StyledHomeArea } from './styles';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('/posts' + search);
            setPosts(response.data);
        };
        fetchPosts();
    }, [search]);
    return (
        <>
            <Header />
            <StyledHomeArea>
                <Posts posts={posts} />
                <SideBar />
            </StyledHomeArea>
        </>
    );
}
