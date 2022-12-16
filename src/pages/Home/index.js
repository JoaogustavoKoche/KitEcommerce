
import { FirstSection } from "./styles";
import { useState} from "react";
export function Home(){

    const [name] = useState();
    
    return(
        <FirstSection>
            <h1>Hello {name}, What fruit salad combo do you want today?</h1>
        </FirstSection>
        
    );
}