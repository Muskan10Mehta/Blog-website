import './styles';
import {
    StyledImage,
    StyledPostCard,
    StyledInfoBox,
    StyledPostTag,
    StyledPostTags,
    StyledPostTitle,
    StyledPostDate,
    StyledPostDescription,
} from './styles';

export default function Post() {
    return (
        <>
            <StyledPostCard>
                <StyledImage
                    src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="blog image"
                ></StyledImage>
                <StyledInfoBox>
                    <StyledPostTags>
                        <StyledPostTag>Music</StyledPostTag>
                        <StyledPostTag>Life</StyledPostTag>
                    </StyledPostTags>
                    <StyledPostTitle>Post Title here</StyledPostTitle>
                    <StyledPostDate>1 hour ago</StyledPostDate>
                </StyledInfoBox>
                <StyledPostDescription>
                    Something is brewing! Something is brewing! Something is
                    brewing! Something is brewing! Something is brewing!
                    Something is brewing! Something is brewing! Something is
                    brewing! Something is brewing! Something is brewing!
                    Something is brewing! Something is brewing! Something is
                    brewing! Something is brewing! Something is brewing!
                </StyledPostDescription>
            </StyledPostCard>
        </>
    );
}
