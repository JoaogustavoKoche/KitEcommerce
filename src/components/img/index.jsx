import styled from "styled-components";


export const Imgs = styled.img`

    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '100%'};
    position: ${(props) => props.position || 'none'};

`;

export default Imgs;


