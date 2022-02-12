import React from 'react';
import './styles';
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

export default function SinglePost() {
    return (
        <>
            <SytledSinglePostArea>
                <StyledSinglePostWrapper>
                    <StyledSinglePostImage src="https://images.unsplash.com/photo-1621139151681-5ac8d73128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></StyledSinglePostImage>
                    <StyledSinglePostTitle>
                        Post title here
                        <StyledEdit>
                            <Styledicon edit>Edit</Styledicon>
                            <Styledicon delete>Delete</Styledicon>
                        </StyledEdit>
                    </StyledSinglePostTitle>
                    <StyledInfo>
                        <StyledSinglePostAuthor>
                            Author : Me
                        </StyledSinglePostAuthor>
                        <StyledDate>1 hour ago</StyledDate>
                    </StyledInfo>

                    <StyledDescription>
                        Something here, something here, Something here,
                        something here, Something here, something here,
                        Something here, something here, Something here,
                        something here, Something here, something here,
                        Something here, something here, Something here,
                        something here, Something here, something here,
                        Something here, something here, Something here,
                        something here, Something here, something here,
                        Something here, something here, Something here,
                        something here, Something here, something here,
                        Something here, something here, Something here,
                        something here, Something here, something here,
                        Something here, something here, Something here,
                        something here, Something here, something here,
                        Something here, something here, Something here,
                        something here, Something here, something here,
                        Something here, something here, Something here,
                        something here, Something here, something here,
                        Something here, something here, Something here,
                        something here, Something here, something here,
                        Something here, something here, Something here,
                        something here, Something here, something here,
                    </StyledDescription>
                </StyledSinglePostWrapper>
            </SytledSinglePostArea>
        </>
    );
}
