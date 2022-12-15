import React from "react";
import { Button } from "./styles";

export function Buttons(props){
    
    return(
        <Button>{props.title}</Button>
    );
}

export default Buttons;