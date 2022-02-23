import styled, { css } from 'styled-components';

export const StyledHeader = styled.div`
    color: white;
    text-decoration: none;
    position: Sticky;
    top: 0;
    display: flex;
    background-color: white;
    padding: 5px;
`;

export const StyledItems = styled.div`
    color: black;
    text-decoration: none;
    flex: 6;
`;
export const StyledList = styled.ul`
    color: black;
    text-decoration: none;
    list-style-type: none;
    display: inline;
    align-items: left;
`;
export const StyledListItem = styled.li`
    color: black;
    text-decoration: none;
    padding: 0;
    margin-right: 30px;
    font-size: 25px;
    cursor: pointer;
    display: inline;

    ${(props) =>
        props.username &&
        css`
            color: coral;
            font-size: 25px;
        `};
`;
export const StyledImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 5px;
`;
