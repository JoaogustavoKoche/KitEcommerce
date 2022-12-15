import React from "react";
import {useNavigate} from 'react-router-dom';

import { Button } from "../../components/button/styles";
import { UpContent } from "../Authentication/styles";
import { Container, Text } from "./styles";
import { Imgs } from '../../components/img/index'
import Minifruit from '../../assets/mini-fruit.svg'
import Fruit from '../../assets/basketfruit1.svg'
import Shadow from '../../assets/shadow1.svg'


export function Intro(){

    const navigate = useNavigate();

    const navigateNext = () =>{
        navigate('/auth');
    };

    return(
        <Container>
            <UpContent>
                <Imgs 
                    src={Minifruit} 
                    alt="Mini fruit"
                    width={'30%'}                      
                /> 
                <Imgs 
                    src={Fruit} 
                    alt="Basket with fruits"
                    width={'100%'}
                />    
                <Imgs 
                    src={Shadow} 
                    alt="Basket shadow"
                    width={'100%'}
                />
            </UpContent>
                <Text>
                    <h1>Get The Freshest Fruit Salad Combo</h1>
                    <h3>We deliver the best and freshest fruit salad in town. Order for a combo today!!!</h3>          
                </Text>
                <Button onClick={navigateNext}>Let's Continue</Button>
        </Container>
    );
}

export default Intro;