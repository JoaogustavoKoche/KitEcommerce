import styled from "styled-components";


export const Container = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;

    button{
        margin: 55px;
    }

`;

export const Text = styled.div`


    h1{
        font-family: 'Brandon Grotesque';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 50px;
        letter-spacing: -0.01em;
        color: #27214D;
    }

    h3{
        font-family: 'Brandon Grotesque';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #5D577E;
    }

    display: flex;
    margin: 15px;
    flex-direction: column;
    align-content: center; 
`;
