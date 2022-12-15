import React from "react";
import Buttons from "../../components/button";
import { Background } from "../../components/img-background";
import { Container } from "./styles";

export function Intro(){
    return(
        <Container>
            <Background/>
            <h1>Get The Freshest Fruit Salad Combo</h1>
            <h3>We deliver the best and freshest fruit salad in town. Order for a combo today!!!</h3>
            <Buttons title="Let's Continue"></Buttons>
        </Container>
    );
}

export default Intro;