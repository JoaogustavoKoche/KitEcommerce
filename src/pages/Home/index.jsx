
import { FirstSection, InputDiv, InvButton, BasketBar } from "./styles";
import Input from '../../components/input/index';
import Imgs from "../../components/img";
import { useLocation } from "react-router-dom";

//imports icons
import icon from '../../assets/search.svg';
import filter from '../../assets/filter.svg';
import menuicon from '../../assets/menuIcon.svg';
import basket from '../../assets/basket.svg';


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


    return(
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
            <h1>  Hello {name} What fruit salad combo do you want today?</h1>          
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
    );
}