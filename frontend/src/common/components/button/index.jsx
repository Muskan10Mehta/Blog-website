import React from 'react';

const Button = (props) => {
    const buttonStyle = {
        backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : props.disabled
            ? 'grey'
            : 'black',
        color: props.color ? props.color : 'white',
        fontSize: props.fontSize ? props.fontSize : '15px',
        border: props.border ? props.border : '1px solid black',
        borderRadius: props.borderRadius ? props.borderRadius : '5px',
        padding: props.padding ? props.padding : '5px 10px',
        fontWeight: props.fontWeight ? props.fontWeight : '400',
        position: props.positon,
        top: props.top,
        right: props.right,
    };

    return (
        <button
            style={buttonStyle}
            onClick={props.clickHandler}
            disabled={props.disabled}
            {...props}
        >
            {props.label}
        </button>
    );
};

export default Button;
