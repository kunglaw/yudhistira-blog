import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography"

const Text = (props) => {

    const style = {
        color:props.textColor,
        textDecoration:"none"
    }

    return (
        <Typography style={style} className={ props.className } {...props}>{ props.children }</Typography>
    );
}

export default Text;