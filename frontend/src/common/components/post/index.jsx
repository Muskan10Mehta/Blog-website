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
import { Link } from 'react-router-dom';

export default function Post({ post }) {
    const publicFolder = 'http://localhost:3001/postImages/';

    return (
        <>
            <StyledPostCard>
                {post.header && (
                    <StyledImage
                        src={publicFolder + post.header}
                        alt="blog image"
                    ></StyledImage>
                )}
                <StyledInfoBox>
                    <StyledPostTags>
                        {post.categories.map((category) => (
                            <Link
                                to={`/?category=${category}`}
                                className="link"
                            >
                                <StyledPostTag>{category}</StyledPostTag>
                            </Link>
                        ))}
                    </StyledPostTags>
                    <Link to={`/viewpost/${post._id}`} className="link">
                        <StyledPostTitle>{post.title}</StyledPostTitle>
                    </Link>
                    <StyledPostDate>
                        {new Date(post.createdAt).toDateString()}
                    </StyledPostDate>
                </StyledInfoBox>
                <StyledPostDescription>
                    {post.description}
                </StyledPostDescription>
            </StyledPostCard>
        </>
    );
}
