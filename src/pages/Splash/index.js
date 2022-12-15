import { React } from "react";
import logo from './../../assets/logo.svg';
import { Title } from './styles';

export function Load() {
    return(
        <Title>
            <img src={logo} alt="Logo"/>
            <h1>Fruit Hub</h1>
        </Title>
    );
}

export default Load;




