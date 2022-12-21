
import {Container, FirstSection, InputDiv, InvButton, BasketBar, SecondSection} from "./styles";
import Input from '../../components/input/index';
import Imgs from "../../components/img";
import { useLocation } from "react-router-dom";

//imports icons
import icon from '../../assets/search.svg';
import filter from '../../assets/filter.svg';
import menuicon from '../../assets/menuIcon.svg';
import basket from '../../assets/basket.svg';

import text from '../../teste-data/quinoa.svg';
import additem from '../../assets/addItem.svg'

import fav from '../../assets/favorite.svg'


import { Text, ContainerCards } from "./styles";



export function Home(){

    const location = useLocation();

    const name = location.state?.name;
    
    const divStyle = {
        backgroundImage: 'url(' + icon + ')',
        backgroundRepeat: 'no-repeat',  
        backgroundPositionX: '10px',
        backgroundPositionY: 'center',
        paddingLeft: '45px',
        backgroundSize: '25px',
    }; 

   
   /*  const nameFruit = "fruta";
    const price = 2000;
  /*   const image = '../../teste-data/honeyLime.svg'; */  

    return(
        
        <Container>
            <FirstSection>
                <BasketBar>
                    <InvButton>
                        <Imgs 
                            src={menuicon}
                            width={'35px'}
                        />
                    </InvButton>
                    <InvButton
                        style={{display: 'grid', justifyItems: 'center'}}
                    >
                        <Imgs 
                            src={basket}
                            width={'35px'}
                        />
                        My basket
                    </InvButton>
                    
                </BasketBar>
                <h1> Hello {name} What fruit salad combo do you want today?</h1>          
                <InputDiv>
                        <Input 
                            placeholder="Search for fruit salad combos"
                            style={divStyle}
                        />
                        <InvButton>
                            <Imgs 
                                src={filter} 
                                alt="Filter"
                                width={'35px'}
                            />
                        </InvButton>
                </InputDiv>
            </FirstSection>



        {/* usando apenas para ilustrar por hora */}
        
            <SecondSection>
                 <Text>Recommended Combo</Text>
                 <ContainerCards>
                    <div className="containerImgs">
                        <Imgs src={fav}
                            width='20px'

                        />
                        <Imgs src={text}
                            width='135px'

                        />
                    </div>

                    
                   
                    <h1>Honey lime combo</h1>
                    <div>
                        <h3>&#x20A6; 2,000</h3>
                        <Imgs src={additem}
                            width='30px'
                            height='none'
                        />
                    </div>
                    
                </ContainerCards>   
            </SecondSection>
        </Container>
    );
}