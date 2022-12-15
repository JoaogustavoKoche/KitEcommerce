import React from "react";
import { ContainerBack } from "./styles";
import image from './../../assets/image-fruit1.svg';

export function Background(){
    return(
        <ContainerBack>
            <img src={image} alt="Imagem de fruta"/>
        </ContainerBack>
    );
}