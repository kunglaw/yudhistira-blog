import React from 'react';
import TextFieldUI from "@material-ui/core/TextField"
import "./TextField.css"

const TextField = (props) => {
    
    const style = {
        color:props.textColor
    }

    return (
        <TextFieldUI className={ props.className } style={style}  
        {...props}></TextFieldUI>
    );
    
}

export default TextField;