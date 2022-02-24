import styled from 'styled-components';

export const StyledSideBarArea = styled.div`
    flex: 3;
    margin: 50px;
    padding-bottom: 30px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const StyledTitle = styled.div`
    border-bottom: 1px solid black;
    font-weight: 500;
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
    display: inline-block;
    width: 50%;
    margin-top: 10px;
`;
