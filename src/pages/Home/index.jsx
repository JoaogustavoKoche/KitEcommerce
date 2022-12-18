
import { FirstSection, InputDiv } from "./styles";
import Input from '../../components/input/index';
import icon from '../../assets/search.svg';
import filter from '../../assets/filter.svg'
import Imgs from "../../components/img";



export function Home(props){

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
            <h1  >Hello name, What fruit salad combo do you want today?</h1>


            

                <InputDiv>
                    <Input 
                        placeholder="Search for fruit salad combos"
                        style={divStyle}
                    />
                    
                    <button >
                        <Imgs 
                            src={filter} 
                            alt="Filter"
                            width={'35px'}
                        />
                    </button>
                </InputDiv>
        </FirstSection>
    );
}