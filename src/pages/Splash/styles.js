import styled from 'styled-components';


export const Title = styled.div`

    height: 100vh;
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        //Fonts configs
        font-family: Bad Script;
        font-size: 24px;
        font-style: italic;
        font-weight: 400;
        line-height: 40px;
        letter-spacing: -0.02em;
        text-align: center;
        color: #FFFFFF;

        //background configs
        background-color: #FFA451;
        width: 45vw;
        border-bottom-right-radius: 20px;
        border-top-left-radius: 20px;

        @media (min-width: 1080px){
            width: 25vw;
        };

        @media (min-width: 768px){
            width: 30vw;
        };
    }
`;