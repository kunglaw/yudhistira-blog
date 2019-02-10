import React from 'react';
import ButtonUI from "@material-ui/core/Button"

const Button = (props) =>  {
    return (
        <ButtonUI className={ props.className } { ...props}></ButtonUI>
    );
}

export default Button;