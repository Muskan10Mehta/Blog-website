import Post from '../post';
import './styles';
import { StyledPostArea } from './styles';

export default function Posts() {
    return (
        <>
            <StyledPostArea>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </StyledPostArea>
        </>
    );
}
