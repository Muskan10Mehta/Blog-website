import styled from 'styled-components';

export const StyledPostCard = styled.div`
    width: 400px;
    margin: 50px 25px 40px 50px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
`;
export const StyledImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
`;
export const StyledInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const StyledPostTag = styled.div`
    flex: 1;
    margin-right: 7px;
    margin-top: 7px;
    padding: 3px;
    border: 1px solid coral;
    border-radius: 5px;
    color: coral;
    cursor: pointer;
`;
export const StyledPostTags = styled.div`
    display: flex;
`;
export const StyledPostTitle = styled.div`
    font-size: 30px;
    font-weight: 600;
    margin-top: 15px;
    cursor: pointer;
    color: black;
`;
export const StyledPostDate = styled.div`
    font-size: 12px;
    margin-top: 15px;
    color: #999;
`;
export const StyledPostDescription = styled.p`
    padding: 5px;
    margin-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;
