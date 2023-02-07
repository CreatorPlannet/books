import React from 'react';
import classes from './MButton.module.css';

const MyButton = ({children, ...props}) => {

    return(
        <button {...props} className={classes.myBtn}>
            {children} 
        </button>
    )
}  

export default MyButton;