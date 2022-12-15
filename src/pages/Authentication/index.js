import React from "react";
import { Button } from "../../components/button/styles";
import { Imgs } from "../../components/img";
import Input from "../../components/input";
import { ContainerEnter, DownContent, UpContent } from "./styles";
import Minifruit from '../../assets/mini-fruit.svg'
import Fruit from '../../assets/basketfruit2.svg'
import Shadow from '../../assets/shadow2.svg'

export function Enter(props){
    return( 
        <ContainerEnter>
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
            <DownContent> 
                    <Input
                        type={"text"}
                        placeholder="Tony"
                    />
                    <Button>
                        Start Ordering
                    </Button>
            </DownContent>
        </ContainerEnter>
    );
}

export default Enter;