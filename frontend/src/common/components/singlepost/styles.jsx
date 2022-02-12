import styled, { css } from 'styled-components';

export const SytledSinglePostArea = styled.div`
    flex: 9;
`;

export const StyledSinglePostWrapper = styled.div`
    padding: 20px;
    padding-right: 0;
`;
export const StyledSinglePostImage = styled.img`
    width: 100%;
    height: 300px;
    border-radius: 5px;
    object-fit: cover;
`;
export const StyledSinglePostTitle = styled.div`
    text-align: center;
    margin: 10px;
    font-size: 30px;
    font-weight: 600;
`;
export const StyledEdit = styled.div`
    float: right;
    display: flex;
    font-size: 15px;
    margin: 10px;
`;
export const Styledicon = styled.div`
    flex: 1;
    margin-left: 5px;
    cursor: pointer;
    margin-top: 5px;
    color: coral;

    ${(props) =>
        props.edit &&
        css`
            color: lightblue;
        `};
    ${(props) =>
        props.delete &&
        css`
            color: coral;
        `};
`;
export const StyledInfo = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
`;
export const StyledDescription = styled.p`
    font-size: 18px;
    line-height: 25px;
`;
export const StyledSinglePostAuthor = styled.div`
    font-weight: 600;
`;
export const StyledDate = styled.div``;

//export const StyledPostTag = styled.div``;
// export const StyledPostTags = styled.div``;
