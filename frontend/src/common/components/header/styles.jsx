import styled from 'styled-components';

export const StyledHeading = styled.div`
    border: 2px solid black;
    background-image: url(https://images.unsplash.com/photo-1553292127-3a633151968f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80);
    display: flex;
    flex-direction: column;
    align-items: center;
    object-fit: cover;
`;

export const StyledText = styled.p`
    font-size: 70px;
    font-weight: 1000;
    color: white;
    padding: 10%;
    text-shadow: 6px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black,
        1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
`;
