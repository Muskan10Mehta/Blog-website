import Post from '../post';
import './styles';
import { StyledPostArea } from './styles';

export default function Posts({ posts }) {
    return (
        <>
            <StyledPostArea>
                {posts.map((post) => (
                    <Post post={post} />
                ))}
            </StyledPostArea>
        </>
    );
}
