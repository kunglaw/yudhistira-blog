import React from 'react';
import InputUI from "@material-ui/core/Input"

const Input = (props) => {
    return (
        <InputUI className={ props.className } {...props}></InputUI>
    );
}


export default Input;