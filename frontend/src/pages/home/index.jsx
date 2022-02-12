import React from 'react';
import Header from '../../common/components/header';
import Posts from '../../common/components/posts';
import SideBar from '../../common/components/sidebar';
import { StyledHomeArea } from './styles';

export default function Home() {
    return (
        <>
            <Header />
            <StyledHomeArea>
                <Posts />
                <SideBar />
            </StyledHomeArea>
        </>
    );
}
