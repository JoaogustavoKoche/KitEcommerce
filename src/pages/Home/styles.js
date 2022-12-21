import styled from "styled-components";

export const Container = styled.div`

    display: grid;
`;

export const FirstSection = styled.div`

    display: grid;
    padding: 20px;


    h1{
        font-family: Brandon Grotesque;
        font-size: 20px;
        font-weight: 500;
        line-height: 29px;
        letter-spacing: -0.01em;
        text-align: left;

        font-family: Brandon Grotesque;
        font-size: 20px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: -0.01em;
        text-align: left;
        color: #27214D;
    }
    
`;

export const InputDiv = styled.div`

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

`;

export const BasketBar = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const InvButton = styled.button`

    border-style: none;
    background: transparent;
`;




export const SecondSection = styled.div`

    
`;

export const Text = styled.h1`

`;

export const ContainerCards = styled.div`

    background-color: #FEF0F0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin: 30px;

    display: inline-grid;
    h1{
        font-family: 'Brandon Grotesque';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
        /* identical to box height */

        display: flex;
        align-items: flex-end;
        letter-spacing: -0.01em;

        color: #27214D;
    }


    h3{
        font-family: 'Brandon Grotesque';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height */

        display: flex;
        align-items: flex-end;
        letter-spacing: -0.01em;

        color: #F08626;

    }

    div.containerImgs{
        display: inline-flex;
        align-items: flex-end;
        flex-direction: column;
        padding: 20px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`;


