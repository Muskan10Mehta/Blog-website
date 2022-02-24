import styled, { css } from 'styled-components';

export const StyledHeader = styled.div`
    color: white;
    text-decoration: none;
    position: Sticky;
    top: 0;
    display: flex;
    background-color: black;
    padding: 5px;
    height: 55px;
    font-family: 'Nunito', sans-serif;
`;

export const StyledItemsLeft = styled.div`
    color: black;
    text-decoration: none;
    align-items: left;
    flex: 8;
`;
export const StyledItemsRight = styled.div`
    color: black;
    text-decoration: none;
    align-items: right;
    flex: 4;
`;
export const StyledList = styled.ul`
    color: black;
    text-decoration: none;
    list-style-type: none;
    display: inline;
    margin-left: 50px;
`;
export const StyledListItem = styled.li`
    color: white;
    text-decoration: none;
    font-size: 30px;
    cursor: pointer;
    display: inline;
    margin-right: 20px;

    ${(props) =>
        props.logout &&
        css`
            color: orange;
        `};
    ${(props) =>
        props.username &&
        css`
            font-style: italic;
            color: orange;
            font-size: 25px;
        `};
`;
export const StyledImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 10px;
    margin-bottom: 7px;
`;
